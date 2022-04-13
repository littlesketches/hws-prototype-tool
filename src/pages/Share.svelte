<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ShareNew         from '../components/byPage/share/ShareNew.svelte'
    import ShareExisting    from '../components/byPage/share/ShareExisting.svelte'
    import ShareImage       from '../components/byPage/share/ShareImage.svelte'

	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    const pageInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section>
    <TitleBlock {...pageInfo}/>
    <ShareNew/>
    <ShareImage/>
    <ShareExisting/>


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
        grid-template-columns:  1fr 1fr 1fr;
        grid-template-rows:     auto 1fr;
        column-gap:             2.5vw;
        row-gap:                2.5vw;
        grid-template-areas: 
            "title title title"
            "share image feedback";
        padding:                5vw;
    }
</style>