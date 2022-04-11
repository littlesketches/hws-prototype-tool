<!-- EXPLORE PAGE COMPONENT-->
<script>
	import  { fade }            from 'svelte/transition'
    import TitleBlock           from '../components/shared/TitleBlock.svelte'
    import ConnectInfoPane      from '../components/byPage/connect/ConnectInfoPane.svelte'
    import StakeholderList      from '../components/byPage/connect/StakeholderList.svelte'
    import StakeholderSearch    from '../components/byPage/connect/StakeholderSearch.svelte'
    import StakeholderPage      from '../components/byPage/connect/StakeholderPage.svelte'
	import { ui }               from '../data/stores.js'	 
    import { getPageInfo }      from '../data/content.js'


    const titleInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section  transition:fade>
    <TitleBlock {...titleInfo}/>
    <!-- Project cards view-->
    {#if !$ui.byPage.connect.projectPage}
    <ConnectInfoPane/>
        {#if $ui.byPage.connect.main === 'list'}
        <StakeholderList/>
        {:else if  $ui.byPage.connect.main === 'search'}
        <StakeholderSearch/>
        {/if}
    {/if}    

    <!-- Connection page overlay-->
    {#if $ui.byPage.connect.stakeholderPage}
    <StakeholderPage/>
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