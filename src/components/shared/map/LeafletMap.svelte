<!-- PROJECT MAP-->
<script>

	import { fade }     from 'svelte/transition'
	import { ui }       from '../../../data/stores.js'	 
    import {LeafletMap, TileLayer, GeoJSON, Tooltip, Popup, Circle} from 'svelte-leafletjs';

    const mapOptions = {
        center: [-38.0, 145.1],
        zoom: 8,
        attributionControl: false
    };

    const geoLayers = {
        majorCatchments: './static/spatial/catchments-major.geojson',
        HWS_SubCathcmnets: './static/spatial/HWS2018_Subcatchment_Boundaries.json'
    }

    const tileUrl = {
        toner:      'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',      
        tonerBG:    'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}',  
        tonerLight: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', 
        waterColour: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', 
    }

    const tileLayerOptions = {
        minZoom: 0,
        maxZoom: 30,
        maxNativeZoom: 19,
        ext: 'png'
        // attribution: "© OpenStreetMap contributors",
        // attribution: "'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'",
    };

    const geoJsonOptions = {
        style: function(geoJsonFeature) {
            // console.log('style', geoJsonFeature);
            return {
                color:              '#444',
                stroke:             true,
                weight:              0.25,
                fillColor:            '#ddd',
                fillOpacity:          0.3
            };
        },
        onEachFeature: function(feature, layer) {
            console.log("Catchmennt: ", feature.properties.CATCHMENT);
            console.log("SubCatchment: ", feature.properties.SUBCATCHMENT);
            console.log('Feature and layer', feature, layer);
        },
    };

    let leafletMap;

</script>

<!-- COMPONETN HTML MARKUP-->
<section id ="map">
    <LeafletMap bind:this={leafletMap} options={mapOptions}>
        <TileLayer url={tileUrl[$ui.map.style]} options={tileLayerOptions}/>
        <!-- <Circle latLng={mapOptions.center} radius={1000} color="#ff0000" fillColor="#ff0000">
            <Popup>Thii is a pop up  that will show when the circle is clicked</Popup>
            <Tooltip>Click me</Tooltip>
        </Circle> -->
        <GeoJSON url={geoLayers.HWS_SubCathcmnets} options={geoJsonOptions}/>
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