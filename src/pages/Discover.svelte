<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition';
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ProjectInfoPane  from '../components/byPage/discover/ProjectInfoPane.svelte'
    import ProjectList      from '../components/byPage/discover/ProjectList.svelte'
    import ProjectSearch    from '../components/byPage/discover/ProjectSearch.svelte'
    import ProjectPage      from '../components/byPage/discover/ProjectPage.svelte'


	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    // Get title block information
    const titleInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section in:fade="{{duration: 1500}}" >
    {#if !$ui.byPage.discover.projectPage}
        <TitleBlock {...titleInfo}/>
        <!-- Project cards view-->
        <ProjectInfoPane/>
        {#if $ui.byPage.discover.main === 'list'}
        <ProjectList/>
        {:else if  $ui.byPage.discover.main === 'search'}
        <ProjectSearch/>
        {/if}
    {:else}
    <!-- Project page overlay-->
    <ProjectPage/>
    {/if}        
</section>

<!------ STYLE ------->
<style>
    section{
        display:                grid;
        grid-template-columns:  1fr 2fr;
        grid-template-rows:     auto 1fr;
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