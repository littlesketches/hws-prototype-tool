<!-- PROJECT VIEW MAP INTERFACE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import { ui }               from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'
</script>

<!-- COMPONENT HTML MARKUP-->
<h2>&#8212; {@html componentContent.projectInfo.selectionHeader}</h2>
{@html componentContent.projectInfo.mapDesc}  


<!-- STYLES -->
<style>
</style>