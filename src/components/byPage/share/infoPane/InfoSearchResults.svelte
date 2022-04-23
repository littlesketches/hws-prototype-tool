<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from '../../../../data/content.js'
    import { ui }               from '../../../../data/stores.js'

    // Options for "re-search"
    function openSearch(){
        $ui.byPage.share.main = 'search'
        $ui.byPage.share.projectSearch.isMade = false
        console.log('Opening search cleared')
    };

</script>

<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>{@html componentContent.share.existing.searchResultsHeader}</h2>
    {@html componentContent.share.existing.searchResultsDesc}
</div>
<div class ='button-container'>
    <button on:click={openSearch}>Search again</button>
</div>


<!------ STYLE ------->
<style> 
    .button-container{
        width: 100%;
        margin-bottom: 1.5rem;;
    }
</style>