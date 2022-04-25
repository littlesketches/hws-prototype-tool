<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from './../../../../data/content.js'
    import { ui }               from './../../../../data/stores.js'

    function openSearch(){
        $ui.byPage.discover.main = 'search'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.discover.info.searchResultsHeader}</h2>
    
    {#if $ui.search.project.length > 0}
        {#if $ui.search.project.length === 1}
        <p>Your search came back with {$ui.search.project.length} project! </p>
        {:else}
        <p>Your search came back with {$ui.search.project.length} projects! </p>
        {/if}
        {@html componentContent.discover.info.searchResultsDesc}
    {:else}
        <p>Unfortunatley there were no projects that met all of your search criteria.</p>
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
        margin-bottom:       1.5rem;
    }
</style>