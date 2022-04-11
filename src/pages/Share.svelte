<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ShareNew         from '../components/byPage/share/ShareNew.svelte'
    import ProjectFeedback  from '../components/byPage/share/ProjectFeedback.svelte'
    import ProjectList      from '../components/byPage/discover/ProjectList.svelte'
    import ProjectSearch    from '../components/byPage/discover/ProjectSearch.svelte'
    import ProjectPage      from '../components/byPage/discover/ProjectPage.svelte'

	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

	export let transition
    const pageInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section  { transition }>
    <TitleBlock {...pageInfo}/>
    <!-- Project cards view-->
    <ShareNew/>
    <ProjectFeedback/>
    {#if !$ui.byPage.share.projectPage}

        <!-- {#if $ui.byPage.discover.main === 'list'}
        <ProjectList/>
        {:else if  $ui.byPage.discover.main === 'search'}
        <ProjectSearch/>
        {/if} -->
    {/if}    

    <!-- Project page overlay-->
    {#if $ui.byPage.discover.projectPage}
    <!-- <ProjectPage/> -->
    {/if}    

</section>


<!------ STYLE ------->
<style>
    section{
        display:                grid;
        grid-template-columns:  2fr 1fr;
        grid-template-rows:     auto 1fr;
        column-gap:             2.5vw;
        row-gap:                2.5vw;
        grid-template-areas: 
            "title title"
            "share feedback"
        ;
        min-height:             100vh;
        padding:                5vw;
    }
</style>