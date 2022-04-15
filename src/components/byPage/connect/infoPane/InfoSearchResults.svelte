<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import Magnify      from "svelte-material-icons/Magnify.svelte";
    import { componentContent } from '../../../../data/content.js'
    import { ui }       from '../../../../data/stores.js'

    // Options for "re-search"
    function clearSearch(){
        $ui.byPage.connect.main = 'list'
        $ui.byPage.connect.stakeholderSearch.isMade = false
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log('Search cleared')
    };
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
        width: 100%;
    }
</style>