<!-- Search for an existing project to feedback on-->
<script>
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import ProjectList          from "../../shared/projects/ProjectList.svelte"
    import ProjectSearch        from "../../byPage/discover/ProjectSearch.svelte"
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
	import { fly }              from 'svelte/transition'
    import { user, ui }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'

</script>



<!-- COMPONENT HTML MARKUP-->
<section id = "search-for-feedback" in:fly="{{y: -200, duration: 800}}" out:fly="{{y: -200, duration: 100}}">
    <div class = 'info-pane'>
        <DividerZagged20px/>
        {#if $ui.byPage.share.main === 'search'}
            <InfoEmptySearch/>
        {:else if $ui.byPage.share.main === 'list'}
            <InfoSearchResults/>
        {/if}
        <div class = 'float-bottom'>
            <DividerZagged20px/>
        </div>
    </div>

    <div class = 'search-pane'>
        {#if $ui.byPage.share.main === 'search'}
        <ProjectSearch/>
        {:else if $ui.byPage.share.main === 'list'}
        <ProjectList/>
        {/if}
    </div>
</section>


<!-- STYLES-->
<style>
    section {
        grid-area:              2 / 1 / 3 / 4;  
        display:                grid;
        grid-template-columns:  1fr 2fr;
        column-gap:             5vw;
        min-height:             70vh;
    }
    .info-pane{
        display:                flex;
        flex-direction:         column;
    }
    .float-bottom{
        margin-top:             auto;
    }
</style>