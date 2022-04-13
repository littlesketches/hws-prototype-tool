<!-- FEEDBAC ON EXISTING PROJECT COMPONENT-->
<script>
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    {#if !$ui.byPage.share.projectSearch.isMade}
    <InfoEmptySearch/>
    {:else}
    <InfoSearchResults/>
    {/if}
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:  feedback;    
        background: rgb(238, 238, 238);
        padding:    1rem;
    }
</style>