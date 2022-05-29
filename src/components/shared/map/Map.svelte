<!-- PROJECT MAP: LEAFLET MAP WITH SVG OVERLAYS-->
<script>
    import { getContext }   from 'svelte';
	import { fade }         from 'svelte/transition'
	import { ui }           from '../../../data/stores.js'	 
    import { LeafletMap, TileLayer, GeoJSON, Tooltip, Popup, Circle } from 'svelte-leafletjs';
    import { loop_guard }   from 'svelte/internal';
    import L from 'leaflet';

    import MapContext       from './MapContext.svelte'

    export let focus = {
        catchments:         [],
        subCatchments:      [],
        points:             [],
        polygons:           []
    }

    let leafletMap

    let view = null
    if ((focus.polygons.length + focus.catchments.length + focus.subCatchments.length) === 0){
        view = 'catchments'
    } else if (focus.polygons.length > 0){

    }


    //     // For no selection, show "catchments" outline view
    //     if(Object.values(focus).flat.length === 0){
    //         return "catchments"

    //     // Where there is some location selection...
    //     } else {
    //         // If polygons are specified
    //         if(focus.polygons.length > 0){
    //             return "polygons"
    //         // No polygons
    //         } else {
    //             // Subcatchments only
    //             if(focus.subCatchments.length > 0 && focus.catchments.length === 0){
    //                 return "subcatchments"
    //             } else if(focus.subCatchments.length > 0 && focus.catchments.length > 0) {
    //                 return "subcatcmenstAndCatchments"
    //             }
    //         }
    //         // Note: points will always be assumed/checked
    //     }
    // }

    console.log( focus )
    console.log( $ui.map.context)         


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
            color:             'yellow',
            weight:             10,
            fillColor:          'yellow',
            fillOpacity:        0.9
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


</script>

<!-- COMPONETN HTML MARKUP-->
<section id ="map">
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <MapContext/> 
        <TileLayer url={tileUrl[$ui.map.style]} options={tileLayerOptions}/>

        <!-- CATCHMENTS VIEW -->
        {#if (focus.polygons.length + focus.catchments.length + focus.subCatchments.length) === 0 }     
            <GeoJSON url = {geoLayers.catchments}    options = {catchmentLayerOptions} />
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />

        <!-- POLYGON VIEW -->
        {:else if focus.polygons.length > 0}
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />
            {#each focus.polygons as polygon }
                <GeoJSON geoData = {polygon}   options = {polygonLayerOptions}    />             
            {/each}
        <!-- {:else if viewMode(focus) === 'subcatchments'}
            <GeoJSON url = {geoLayers.subcatchments} options = {subCatchmentOptions}   />   
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />

        {:else if viewMode(focus) === 'subcatcmenstAndCatchments'}
            <GeoJSON url = {geoLayers.subcatchments} options = {subCatchmentOptions}   />   
            <GeoJSON url = {geoLayers.waterways}     options = {waterwaysLayerOptions} />  -->
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