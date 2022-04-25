<!-- CONNECT PAGE INFO PANE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import InfoNetwork          from "./infoPane/InfoNetwork.svelte"
    import DividerZagged20px    from "../../shared/layout/DividerZagged20px.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'


</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: -500, duration: 1500}}" out:fly="{{x: -500, duration: 150}}">
    <DividerZagged20px/>
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
        <h2>&mdash; {@html componentContent.connect.info.filterHeader}</h2>
        {@html componentContent.connect.info.filterDesc}  
    {/if}
    <div class = 'float-bottom'>
        <DividerZagged20px/>
    </div>
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:      info;    
        display:        flex;
        flex-direction: column;
    }
    .float-bottom{
        margin-top: auto;
    }
</style>