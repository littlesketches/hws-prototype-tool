<!-- DISCOVER PAGE INFO PANE COMPONENT-->
<script>
	import { fly }         from 'svelte/transition';
    import InfoEmptySearch      from "./InfoEmptySearch.svelte"
    import InfoSearchResults    from "./InfoSearchResults.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: -100, duration: 1500}}">
    {#if $ui.byPage.discover.main === 'list'}
        {#if !$ui.byPage.discover.projectSearch.isMade}
        <InfoEmptySearch/>
        {:else}
        <InfoSearchResults/>
        {/if}
    {:else if $ui.byPage.discover.main === 'search'}
    <h2>{@html componentContent.projectInfo.filterHeader}</h2>
    {@html componentContent.projectInfo.filterDesc}  
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