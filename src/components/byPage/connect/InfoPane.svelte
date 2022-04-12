<!-- CONNECT PAGE INFO PANE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import InfoNetwork          from "./infoPane/InfoNetwork.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: -100, duration: 1500}}">
    <!-- 1. STAKEHOLDER DEFAULT LISTING -->
    {#if $ui.byPage.connect.main === 'list'}
        <!-- a. STAKEHOLDER CARD VIEW: DEFAULT OR AFTER SEARCH-->
        {#if $ui.byPage.connect.stakeholderView === 'cards'}
            {#if !$ui.byPage.connect.stakeholderSearch.isMade}
            <InfoEmptySearch/>
            {:else}
            <InfoSearchResults/>
            {/if}
        <!-- b.STAKEHOLDER NETWORK VIEW -->
        {:else}
            <InfoNetwork/>
        {/if}

    <!-- 2. STAKEHOLDER DEFAULT LISTING -->
    {:else if $ui.byPage.connect.main === 'search'}
        <h2>&#8212;  {@html componentContent.connectInfo.filterHeader}</h2>
        {@html componentContent.connectInfo.filterDesc}  
    {/if}
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:  info;    
        background: rgb(238, 238, 238);
        padding:    1rem;
    }
</style>