<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock from '../components/TitleBlock.svelte'
    import ProjectInfoPane from '../components/project/ProjectInfoPane.svelte'
    import ProjectList from '../components/project/ProjectList.svelte'
    import ProjectSearch from '../components/project/ProjectSearch.svelte'
    import ProjectMap from '../components/project/ProjectMap.svelte'
	import { ui } from '../data/stores.js'	 
    import { getPageInfo } from '../data/content.js'
	import { fade } from 'svelte/transition';

	export let transition
    let pageInfo = getPageInfo($ui.page)[0].pageInfo

</script>

<!-- COMPONENT MARKUP-->
<section transition:fade >
    <TitleBlock {...pageInfo}/>
    <ProjectInfoPane/>


    {#if $ui.byPage.discover.main === 'list'}
        <ProjectList/>
    {:else if  $ui.byPage.discover.main === 'search'}
        <ProjectSearch/>
    {:else if  $ui.byPage.discover.main === 'map'}
        <ProjectMap/>
    {/if}
</section>

<!------ STYLE ------->
<style>
    section{
        display:                grid;
        grid-template-columns:  1fr 2fr;
        column-gap:             2.5vw;
        row-gap:                2.5vw;
        grid-template-areas: 
            "title title"
            "info main"
        ;
        min-height:             100vh;
        padding:                5vw;
    }
</style>