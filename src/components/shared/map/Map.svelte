<!-- PROJECT MAP: LEAFLET MAP WITH SVG OVERLAYS-->
<script>
    import { onMount }      from 'svelte';
	import { fade }         from 'svelte/transition'
	import { ui }           from '../../../data/stores.js'	 
    import { LeafletMap, TileLayer, GeoJSON, Tooltip, Popup, Circle } from 'svelte-leafletjs';
    import { loop_guard }   from 'svelte/internal';
    import L                from 'leaflet';

    import MapContext       from './MapContext.svelte'

    export let focus = {
        catchments:         [],
        subcatchments:      [],
        points:             [],
        polygons:           []
    }

    let leafletMap
    let view 

    if(focus.polygons.length > 0){
        view = 'polygons'
    } else if(focus.points.length > 0){
        view = 'points'
    } else if (focus.subcatchments.length > 0){
        view = 'subcatchments'
    } else {
        view = 'catchments'
    }
    console.log('Map view: ', view)

    // MAP OPTIONS AND TILES
    let mapOptions = {
        center:     [-38.0, 145.1],
        zoom:       8,
        minZoom:    7,
        attributionControl: false,
    };

    
    const tileUrl = {
        toner:          'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',      
        tonerBG:        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}',  
        tonerLight:     'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', 
        waterColour:    'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', 
    }

    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 30,
        maxNativeZoom: 19,
        ext: 'png'
        // attribution: "© OpenStreetMap contributors",
        // attribution: "'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'",
    };


    // LAYER SHAPE FILES AND STYLING
    const geoLayers = {
        states:             './static/spatial/states.json',
        region:             './static/spatial/hws_region.json',
        catchments:         './static/spatial/hws_major_catchments.json',
        subcatchments:      './static/spatial/hws_subcatchments.json',
        waterways:          './static/spatial/waterways.json',
    }

    const styles = {
        default:{
            catchment:{
                color:              '#e905ac',
                stroke:             true,
                weight:             1.5,
                fillColor:          '#301934',
                fillOpacity:        0.25
            },
        },
        hover: {
            fillOpacity:        0.8,
            fillColor:          '#301934',
        },
        active: {
            color:              '#000',
            stroke:             true,
            weight:             0.25,
            fillColor:          '#e905ac',
            fillColor:          '#301934',
            fillOpacity:        0.95,
        },
        waterMain: {
            color:              '#87CEEB',
            stroke:             true,
            weight:             1.5,
            interactive:        false
        },
        waterTributary: {
            color:              '#87CEEB',
            stroke:             true,
            weight:             0.75,
            interactive:        false
        },
        darkened: {
            stroke:             false,
            fillColor:          '#000',
            fillOpacity:        0.2
        },
        regionOutline:{
            color:              '#750382',
            color:              '#e905ac',
            stroke:             false,
            weight:             3,
            fillColor:          'none',
        },
        polygon: {
            stroke:             true,
            color:             '#FF5733',
            weight:             10,
            fillColor:          '#FF5733',
            fillOpacity:        1
        },
       
    }

    // LAYER INTERACTIVITY METHODS
    const prevLayer = {
        hovered:    null, 
        clicked:    null
    }

    const layerMethods = {
        mouseover:  function(e){
            const type = this.options.className
            if(this !== prevLayer.clicked){
                this.setStyle({
                    fillOpacity:        styles.hover.fillOpacity,
                    fillColor:          styles.hover.fillColor
                })

                prevLayer.hovered = this
            }
        },
        mouseout:  function(e){
            const type = this.options.className
            if(prevLayer.hovered){
                prevLayer.hovered.setStyle({
                    fillOpacity:        styles.default[type].fillOpacity,
                    fillColor:          styles.default[type].fillColor
                })
            }
        },
        click: function(e){
            const type = this.options.className
            if(prevLayer.clicked){
                prevLayer.clicked.setStyle({
                    fillOpacity:        styles.default[type].fillOpacity,
                    fillColor:          styles.default[type].fillColor
                })
            }

            this.setStyle({
                fillOpacity:        styles.active.fillOpacity,
                fillColor:          styles.active.fillColor
            })

            $ui.map.context.fitBounds( this.getBounds(), { padding: [25, 25] })         

            prevLayer.hovered = null
            prevLayer.clicked = this

        }
    }

    // WATERWAYS LAYER
    const waterwaysLayerOptions = {
        style:  (feature) => feature.properties.DRAINAGE_CATEGORY === "M" ? styles.waterMain : styles.waterTributary,
        onEachFeature: function(feature, layer) {
            layer.setStyle({ className:      'waterway', })
        },
    };

    // STATES LAYER
    const statesLayerOptions = {
        style:      styles.darkened,
        onEachFeature: function(feature, layer) {
            layer.setStyle({className: 'state'})
            layer.bindTooltip(feature.properties.CATCHMENT).openTooltip()
        },
    };

    // REGION LAYER
    const regionLayerOptions = {
        style:      styles.regionOutline,
        onEachFeature: function(feature, layer) {
            layer.setStyle({
                className:      'region',
                pointerEvents:  'none'
            })
            layer.on({
                mouseover:  null,
            })
        },
    };

    // CATCHMENT LAYER
    const catchmentLayerOptions = {
        style:      styles.default.catchment,
        onEachFeature: function(feature, layer) {
            layer.setStyle({
                className:      'catchment',
                pointerEvents:  'none'
            })
            layer.on({
                mouseover:  layerMethods.mouseover,
                mouseout:   layerMethods.mouseout,
                click:      layerMethods.click
            })

            layer.bindTooltip(feature.properties.CATCHMENT).openTooltip()
        },
    };

    // SUB CATCHMENT LAYER
    const subCatchmentOptions = {
        id:     'subcatchment-group',
        style:  (feature) => focus.subCatchments.indexOf(feature.properties.SUBCATCHMENT) > -1 ? styles.active : styles.default,
        onEachFeature: function(feature, layer) {
            layer.setStyle({className: 'subcatchment'})
            layer.on({
                mouseover:  layerMethods.mouseover,
                mouseout:   layerMethods.mouseout,
                click:      layerMethods.click
            })

            layer.bindTooltip(feature.properties.SUBCATCHMENT).openTooltip()
        },
    };


    // POLYGONS LAYER
    const polygonLayerOptions = {
        style:      styles.polygon,
        onEachFeature: function(feature, layer) {
            layer.setStyle({className: 'polygon'})
            // layer.bindTooltip(feature.properties.CATCHMENT).openTooltip()
        },
    };


    // Change focus to update zoom to match any polygons 
    onMount( () => {
        if (focus.polygons.length === 0) return 

        if (focus.polygons.length === 1){
            // Get polygon layer and zoom to it
            const polygonID  =  focus.polygons[0].id
            const layersEntries = Object.entries($ui.map.context._layers)
            const layerID = layersEntries.filter( d => d[1].feature && d[1].feature.id ===  polygonID)[0][0]
            const layer = $ui.map.context._layers[layerID]

            $ui.map.context.fitBounds(layer._bounds, {maxZoom: 14})
        }
    })


</script>

<!-- COMPONETN HTML MARKUP-->
<section id ="map">
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <MapContext/> 
        <TileLayer url={tileUrl[$ui.map.style]} options={tileLayerOptions}/>

        <!-- POLYGON VIEW -->
        {#if view === 'polygons'}
            <GeoJSON url = {geoLayers.catchments}    options = {catchmentLayerOptions} />
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />
            {#each focus.polygons as polygon }
                <GeoJSON geoData = {polygon}   options = {polygonLayerOptions}    />             
            {/each}
        {:else if view ==="subcatchments"}
            <GeoJSON url = {geoLayers.subcatchments} options = {subCatchmentOptions}   />   
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />
        {:else if view ==="catchments"}
            <GeoJSON url = {geoLayers.catchments}    options = {catchmentLayerOptions} />
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />
        {/if}



        <!-- Point locations-->
        {#if focus.points > 0}
            {#each focus.points as point}
                <Circle latLng={mapOptions.center} radius={1000} color="#ff0000" fillColor="#ff0000">
                    <Popup>This is a pop up that will show when the circle is clicked</Popup>
                    <Tooltip>Click me</Tooltip>
                </Circle>
            {/each}
        {/if}

    </LeafletMap>


</section>

<!-- STYLES-->
<style>
    section{
        width:          100%;
        height:         100%;
        height:         70vh;
    }   

</style>