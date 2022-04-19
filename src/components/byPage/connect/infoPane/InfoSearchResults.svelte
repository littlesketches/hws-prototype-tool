<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import Magnify      from "svelte-material-icons/Magnify.svelte";
    import { ui }       from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'

    // Options for "re-search"
    function openSearch(){
        $ui.byPage.connect.main = 'search'
        $ui.byPage.connect.stakeholderSearch.isMade = false
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log('Opening search cleared')
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.connect.info.searchResultsHeader}</h2>
    {@html componentContent.connect.info.searchResultsDesc}
</div>
<hr>
<div class="search-options">
    {@html componentContent.connect.info.searchResultsOptions}
    <div class ='button-container'>
        <button on:click={openSearch}>Refine search</button>
    </div>
</div>


<!------ STYLE ------->
<style> 
    .button-container{
        width: 100%;
    }
</style>