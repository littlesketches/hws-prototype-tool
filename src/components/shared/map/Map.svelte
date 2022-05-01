<!-- PROJECT MAP-->
<script>
    import { getContext }   from 'svelte';
	import { fade }         from 'svelte/transition'
	import { ui }           from '../../../data/stores.js'	 
    import { LeafletMap, TileLayer, GeoJSON, Tooltip, Popup, Circle } from 'svelte-leafletjs';
    import { loop_guard }   from 'svelte/internal';
    import L from 'leaflet';

    import MapContext       from './MapContext.svelte'

    export let focus = {
        points:             [],
        catchments:         null,
        subCatchments:      [],
    }

    let leafletMap;

    // MAP OPTIONS NAD TILES
    const mapOptions = {
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
        majorCatchments: './static/spatial/catchments-major.geojson',
        HWS_SubCatchments: './static/spatial/HWS2018_Subcatchment_Boundaries.json'
    }

    const styles = {
        water: {
            color:              'aqua',
            stroke:             true,
            weight:             0.25,
            fillColor:          'aqua',
            fillOpacity:        1
        },
        default:{
            color:              '#fff',
            stroke:             true,
            weight:             1,
            fillColor:          '#ddd',
            fillOpacity:        0.3
        },
        hover: {
            fillOpacity:        0.8,
            fillColor:          '#000',
        },
        active: {
            color:              'yellow',
            stroke:             true,
            weight:             0.25,
            fillColor:          'yellow',
            fillOpacity:        0.8
        }
    }

    // LAYER INTERACTIVITY METHODS
    const prevLayer = {
        hovered:    null, 
        clicked:    null
    }

    const layerMethods = {
        mouseover:  function(e){
            if(this !== prevLayer.clicked){
                this.setStyle({
                    fillOpacity:        styles.hover.fillOpacity,
                    fillColor:          styles.hover.fillColor
                })

                prevLayer.hovered = this
            }
        },
        mouseout:  function(e){
            if(prevLayer.hovered){
                prevLayer.hovered.setStyle({
                    fillOpacity:        styles.default.fillOpacity,
                    fillColor:          styles.default.fillColor
                })
            }
        },
        click: function(e){
            if(prevLayer.clicked){
                prevLayer.clicked.setStyle({
                    fillOpacity:        styles.default.fillOpacity,
                    fillColor:          styles.default.fillColor
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


    // SUB CATCHMENT LAYER
    const subCatchmentOptions = {
        style: function(feature) {
            return focus.subCatchments.indexOf(feature.properties.SUBCATCHMENT) > -1 ? styles.active : styles.default
        },
        onEachFeature: function(feature, layer) {

            layer.on({
                mouseover:  layerMethods.mouseover,
                mouseout:   layerMethods.mouseout,
                click:      layerMethods.click
            })

            layer.bindTooltip(feature.properties.SUBCATCHMENT).openTooltip()
            // console.log("Catchment: ", feature.properties.CATCHMENT);
            // console.log('Feature and layer', feature, layer);
        },
    };



</script>

<!-- COMPONETN HTML MARKUP-->
<section id ="map">
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <MapContext/> 
        <TileLayer url={tileUrl[$ui.map.style]} options={tileLayerOptions}/>
        <!-- <Circle latLng={mapOptions.center} radius={1000} color="#ff0000" fillColor="#ff0000">
            <Popup>Thii is a pop up  that will show when the circle is clicked</Popup>
            <Tooltip>Click me</Tooltip>
        </Circle> -->

        <GeoJSON url={geoLayers.HWS_SubCatchments} options={subCatchmentOptions}    />
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