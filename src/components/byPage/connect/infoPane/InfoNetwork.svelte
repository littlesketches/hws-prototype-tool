<!-- STAKEHOLDER NETWORK VIEW INTERFACE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import { ui }               from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'
</script>

<!-- COMPONENT HTML MARKUP-->
<h2>&#8212;  {@html componentContent.connectInfo.networkHeader}</h2>
{@html componentContent.connectInfo.networkDesc}  


<!-- STYLES -->
<style>
</style>