<!-- CONNECT (WITH STAKEHOLDERS) PAGE COMPONENT-->
<script>
	import { fade }             from 'svelte/transition'
    import TitleBlock           from '../components/shared/layout/TitleBlock.svelte'
    import StakeholderList      from '../components/shared/stakeholders/StakeholderList.svelte'
    import StakeholderPage      from '../components/shared/stakeholders/StakeholderPage.svelte'
    import ProjectPage          from '../components/shared/projects/ProjectPage.svelte'
    import InfoPane             from '../components/byPage/connect/InfoPane.svelte'
    import StakeholderSearch    from '../components/byPage/connect/StakeholderSearch.svelte'
	import { ui }               from '../data/stores.js'	 
    import { getPageInfo }      from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock
</script>


<!-- COMPONENT MARKUP-->
<section id="connect-page" class='page' in:fade="{{duration: 1500}}" >
    <!-- 1. Stakeholder cards view-->
    {#if !$ui.byPage.connect.overlay}
    <TitleBlock {titleData}/>
    <InfoPane/>
        <!-- a. Stakeholder default listing-->
        {#if $ui.byPage.connect.main === 'list'}
        <StakeholderList/> 
        <!-- b. Stakeholder search results view-->
        {:else}
        <StakeholderSearch/>
        {/if}

    <!-- 2. Connection or project page overlay-->
    {:else if $ui.byPage.connect.overlay === 'stakeholder'}    
    <StakeholderPage/>
    {:else if $ui.byPage.connect.overlay === 'project'}    
    <ProjectPage/>
    {/if}    
</section>


<!------ STYLE ------->
<style></style>