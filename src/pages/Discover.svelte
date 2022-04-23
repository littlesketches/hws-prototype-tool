<!-- DSICOVER (PROJECTS) PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ProjectList      from '../components/shared/projects/ProjectList.svelte'
    import ProjectPage      from '../components/shared/projects/ProjectPage.svelte'
    import InfoPane         from '../components/byPage/discover/InfoPane.svelte'
    import ProjectSearch    from '../components/byPage/discover/ProjectSearch.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock
</script>


<!-- COMPONENT MARKUP-->
<section id="discover-page" class='page' in:fade="{{duration: 1500}}" >
    <!-- 1. Project search and listing-->
    {#if !$ui.byPage.discover.overlay}
    <TitleBlock {titleData}/>
    <InfoPane/>
        <!-- a. Project default listing-->
        {#if $ui.byPage.discover.main === 'list'}
        <ProjectList/>

        <!-- b. Project search results view-->
        {:else if $ui.byPage.discover.main === 'search'}
        <ProjectSearch/>
        {/if}

    <!-- 2. Project page overlay-->
    {:else if $ui.byPage.discover.overlay === 'project'}
    <ProjectPage/>
    {/if}        
</section>

<!------ STYLE ------->
<style></style>