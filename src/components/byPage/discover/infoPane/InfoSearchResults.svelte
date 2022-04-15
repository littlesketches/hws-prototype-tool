<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from './../../../../data/content.js'
    import { ui }               from './../../../../data/stores.js'
    import Magnify              from "svelte-material-icons/Magnify.svelte";

    // Options for "re-search"
    function clearSearch(){
        $ui.byPage.discover.main = 'list'
        $ui.byPage.discover.projectSearch.isMade = false
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    function openSearch(){
        $ui.byPage.discover.main = 'search'
        $ui.byPage.discover.projectSearch.isMade = false
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.discover.info.searchResultsHeader}</h2>
    {@html componentContent.discover.info.searchResultsDesc}
</div>
<hr>
<div class="search-options">
    {@html componentContent.discover.info.searchResultsOptions}
    <div class = 'two-button-container'>
        <div class ='button-container'>
            <button on:click={clearSearch}>Clear search</button>
        </div>
        <div class ='button-container'>
            <button on:click={openSearch}>Search again</button>
        </div>
    </div>
</div>


<!------ STYLE ------->
<style> 
    .two-button-container{
        width:           100%;
        display:         inline-flex;
        justify-content: space-between;
        gap:             0.5rem;
    }
    .button-container{
        width:          100%;
    }
</style>