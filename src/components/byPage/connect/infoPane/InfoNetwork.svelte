<!-- STAKEHOLDER NETWORK VIEW INTERFACE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import { ui }               from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'
</script>

<!-- COMPONENT HTML MARKUP-->
<h2>&mdash;  {@html componentContent.connect.info.networkHeader}</h2>
{@html componentContent.connect.info.networkDesc}  


<!-- STYLES -->
<style>
</style>