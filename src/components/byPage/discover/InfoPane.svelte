<!-- DISCOVER PAGE INFO PANE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition';
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import InfoMap              from "./infoPane/InfoMap.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: -100, duration: 1500}}">
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
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:  info;    
        background: rgb(238, 238, 238);
        padding:    1rem;
    }
</style>