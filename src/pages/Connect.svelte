<!-- CONNECT PAGE COMPONENT-->
<script>
	import { fade }             from 'svelte/transition'
    import TitleBlock           from '../components/shared/TitleBlock.svelte'
    import StakeholderList      from '../components/shared/stakeholders/StakeholderList.svelte'
    import StakeholderPage      from '../components/shared/stakeholders/StakeholderPage.svelte'
    import InfoPane             from '../components/byPage/connect/InfoPane.svelte'
    import StakeholderSearch    from '../components/byPage/connect/StakeholderSearch.svelte'
	import { ui }               from '../data/stores.js'	 
    import { getPageInfo }      from '../data/content.js'

    const titleInfo = getPageInfo($ui.page)[0].TitleBlock
</script>


<!-- COMPONENT MARKUP-->
<section in:fade="{{duration: 1500}}" >
    <!-- 1. Stakeholder cards view-->
    {#if !$ui.byPage.connect.stakeholderPage}
    <TitleBlock {...titleInfo}/>
    <InfoPane/>
        <!-- a. Stakeholder default listing-->
        {#if $ui.byPage.connect.main === 'list'}
        <StakeholderList/>
        <!-- b. Stakeholder search results view-->
        {:else if  $ui.byPage.connect.main === 'search'}
        <StakeholderSearch/>
        {/if}

    <!-- 2. Connection page overlay-->
    {:else}    
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
            "info main";
        padding:                5vw;
    }
</style>