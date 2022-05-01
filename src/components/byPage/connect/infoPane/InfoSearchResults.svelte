<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import Magnify      from "svelte-material-icons/Magnify.svelte";
    import { ui }       from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'

    // Options for "re-search"
    function openSearch(){
        $ui.byPage.connect.main = 'search'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.connect.info.searchResultsHeader}</h2>
    {#if $ui.search.results.organisation.length > 0}
        {#if $ui.search.results.organisation.length === 1}
        <p>Your search came back with {$ui.search.results.organisation.length} organisation! </p>
        {:else}
        <p>Your search came back with {$ui.search.results.organisation.length} organisations! </p>
        {/if}
        {@html componentContent.connect.info.searchResultsDesc}
    {:else}
        <p>Unfortunatley there were no stakeholders that met all of your search criteria.</p>
    {/if}
</div>
<hr>
<div class ='button-container'>
    <button on:click={openSearch}>Refine search</button>
</div>

<!------ STYLE ------->
<style> 
    .button-container{
        width:              100%;
        margin-bottom:      1.5rem;
    }
</style>