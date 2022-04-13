<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from '../../../../data/content.js'
    import { ui }               from '../../../../data/stores.js'

    // Options for "re-search"
    function clearSearch(){
        $ui.byPage.discover.main = 'list'
        $ui.byPage.discover.projectSearch.isMade = false
        console.log('Search cleared')
    };
    function openSearch(){
        $ui.byPage.discover.main = 'search'
        $ui.byPage.discover.projectSearch.isMade = false
        console.log('Opening search cleared')
    };

</script>

<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>{@html componentContent.projectInfo.searchResultsHeader}</h2>
    {@html componentContent.projectInfo.searchResultsDesc}
</div>
<hr>
<div class="search-options">
    {@html componentContent.projectInfo.searchResultsOptions}
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