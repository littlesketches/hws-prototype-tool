<!-- COMPONET TO HOIST THE MAP CONTEXT TO A STORE: makes it available for geoJSON layer-->
<script>
    import { getContext } from 'svelte';
	import { ui }       from '../../../data/stores.js'	 
    import L from 'leaflet';
    const {getMap} = getContext(L);
    $ui.map.context = getMap()

</script>



