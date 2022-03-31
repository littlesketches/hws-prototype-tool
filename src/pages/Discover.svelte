<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ProjectInfoPane  from '../components/byPage/project/ProjectInfoPane.svelte'
    import ProjectList      from '../components/byPage/project/ProjectList.svelte'
    import ProjectSearch    from '../components/byPage/project/ProjectSearch.svelte'
    import ProjectMap       from '../components/byPage/project/ProjectMap.svelte'
    import ProjectPage      from '../components/byPage/project/ProjectPage.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'
	import { fade }         from 'svelte/transition';

	export let transition
    const titleInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section transition:fade >
    <TitleBlock {...titleInfo}/>

    <!-- Project cards view-->
    {#if !$ui.byPage.discover.projectPage}
    <ProjectInfoPane/>
        {#if $ui.byPage.discover.main === 'list'}
        <ProjectList/>
        {:else if  $ui.byPage.discover.main === 'search'}
        <ProjectSearch/>
        {:else if  $ui.byPage.discover.main === 'map'}
        <ProjectMap/>
        {/if}
    {/if}    

    <!-- Project page overlay-->
    {#if $ui.byPage.discover.projectPage}
    <ProjectPage/>
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