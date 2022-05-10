<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/layout/TitleBlock.svelte'
    import ShareNew         from '../components/byPage/share/ShareNew.svelte'
    import ShareExisting    from '../components/byPage/share/ShareExisting.svelte'
    import ShareImage       from '../components/byPage/share/ShareImage.svelte'
    import ExistingSearch   from '../components/byPage/share/ExistingSearch.svelte'
    import NewProject       from '../components/shared/newProject/NewProject.svelte'
    import ProjectPage      from '../components/shared/projects/ProjectPage.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo , newProjectObj}  from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock

    $ui.newProject = newProjectObj()
</script>

<!-- COMPONENT MARKUP-->
<section id = "share-page" class='page' in:fade="{{duration: 1500}}" >
    {#if !$ui.byPage.share.overlay}
        <TitleBlock {titleData}/>
        <ShareNew/>
        <ShareImage/>
        <ShareExisting/>

    <!-- Overlay page options -->
    {:else if $ui.byPage.share.overlay === 'newProject'}
        <TitleBlock {titleData}/>
        <NewProject store={$ui.newProject}/>
    {:else if $ui.byPage.share.overlay === 'projectSearch'}
        <TitleBlock {titleData}/>
        <ExistingSearch/>
    {:else if $ui.byPage.share.overlay === 'project'}
        <ProjectPage/>
    {/if}    
</section>


<!------ STYLE ------->
<style>
    section{
        grid-template-columns:  1fr 1fr 1fr;
        grid-template-areas: 
            "title title title"
            "share image feedback";
    }
</style>