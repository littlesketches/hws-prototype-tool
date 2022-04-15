<!-- FEEDBAC ON EXISTING PROJECT COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section transition:fly="{{x: 500, duration: 800}}">
    <DividerZagged20px/>
    {#if !$ui.byPage.share.projectSearch.isMade}
    <InfoEmptySearch/>
    {:else}
    <InfoSearchResults/>
    {/if}

    <div class = 'float-bottom'>
        <DividerZagged20px/>
    </div>
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:  feedback;    
        display:    flex;
        flex-direction: column;
    }
    .float-bottom{
        margin-top: 1.5rem;
    }
</style>