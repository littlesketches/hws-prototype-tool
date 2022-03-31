<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

	export let transition

    const titleInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<main {transition}>
    <TitleBlock {...titleInfo}/>
</main>



<!------ STYLE ------->
<style>
</style>