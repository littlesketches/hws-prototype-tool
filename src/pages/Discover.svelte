<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition';
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ProjectList      from '../components/shared/projects/ProjectList.svelte'
    import ProjectPage      from '../components/shared/projects/ProjectPage.svelte'
    import InfoPane         from '../components/byPage/discover/InfoPane.svelte'
    import ProjectSearch    from '../components/byPage/discover/ProjectSearch.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    // Get title block information
    const titleInfo = getPageInfo($ui.page)[0].TitleBlock
</script>


<!-- COMPONENT MARKUP-->
<section in:fade="{{duration: 1500}}" >
    <!-- 1. Project search and listing-->
    {#if !$ui.byPage.discover.projectPage}
    <TitleBlock {...titleInfo}/>
    <InfoPane/>
        <!-- a. Project default listing-->
        {#if $ui.byPage.discover.main === 'list'}
        <ProjectList/>
        <!-- b. Project search results view-->
        {:else if $ui.byPage.discover.main === 'search'}
        <ProjectSearch/>
        {/if}

    <!-- 2. Project page overlay-->
    {:else}
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
            "info main";
        padding:                5vw;
    }
</style>