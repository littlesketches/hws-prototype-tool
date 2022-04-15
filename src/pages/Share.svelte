<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import ShareNew         from '../components/byPage/share/ShareNew.svelte'
    import ShareExisting    from '../components/byPage/share/ShareExisting.svelte'
    import ShareImage       from '../components/byPage/share/ShareImage.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section class='page share'  in:fade="{{duration: 1500}}" >
    <TitleBlock {titleData}/>
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
        grid-template-columns:  1fr 1fr 1fr;
        grid-template-areas: 
            "title title title"
            "share image feedback";
    }
</style>