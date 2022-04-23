<!-- DISCOVER PAGE INFO PANE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import InfoMap              from "./infoPane/InfoMap.svelte"
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section id ="info-pane" in:fly="{{x: -500, duration: 1500}}" out:fly="{{x: -500, duration: 150}}">
    <DividerZagged20px/>
    <!-- 1. PROJECT DEFAULT LISTING -->
    {#if $ui.byPage.discover.main === 'list'}
        <!-- a. PROJECT CARD VIEW: DEFAULT OR AFTER SEARCH-->
        {#if $ui.byPage.discover.projectView === 'cards'}
            {#if !$ui.byPage.discover.projectSearch.isMade}
            <InfoEmptySearch/>
            {:else}
            <InfoSearchResults/>
            {/if}

        <!-- b.PROJECT MAP VIEW INTERFACE-->
        {:else}
            <InfoMap/>
        {/if}

    <!-- 2. PROJECT SEARCH RESULT -->
    {:else if $ui.byPage.discover.main === 'search'}
        <h2>&mdash; {@html componentContent.discover.info.filterHeader}</h2>
        {@html componentContent.discover.info.filterDesc}  
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
        margin-top:     auto;
    }
</style>