<!-- CONNECT PAGE INFO PANE COMPONENT-->
<script>
    import InfoEmptySearch      from "./InfoEmptySearch.svelte"
    import InfoSearchResults    from "./InfoSearchResults.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    {#if $ui.byPage.discover.main === 'list'}
        {#if !$ui.byPage.connect.stakeholderSearch.isMade}
        <InfoEmptySearch/>
        {:else}
        <InfoSearchResults/>
        {/if}

    {:else if $ui.byPage.discover.main === 'search'}
        <h2>{@html componentContent.connectInfo.filterHeader}</h2>
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