<!-- PROJECT MAP VIEW INTERFACE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import { ui }               from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'
</script>

<!-- COMPONENT HTML MARKUP-->
<h2>&mdash; {@html componentContent.discover.info.selectionHeader}</h2>
{@html componentContent.discover.info.mapDesc}  


<!-- STYLES -->
<style></style>