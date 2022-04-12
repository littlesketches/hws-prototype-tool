<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from './../../../../data/content.js'
    import { ui }               from './../../../../data/stores.js'
    import Magnify              from "svelte-material-icons/Magnify.svelte";

    // Options for "re-search"
    function clearSearch(){
        $ui.byPage.connect.main = 'list'
        $ui.byPage.connect.stakeholderSearch.isMade = false
        console.log('Search cleared')
    };
    function openSearch(){
        $ui.byPage.connect.main = 'search'
        $ui.byPage.connect.stakeholderSearch.isMade = false
        console.log('Opening search cleared')
    };

</script>


<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&#8212; {@html componentContent.stakeholderInfo.searchResultsHeader}</h2>
    {@html componentContent.stakeholderInfo.searchResultsDesc}
</div>
<hr>
<div class="search-options">
    {@html componentContent.stakeholderInfo.searchResultsOptions}
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
    button{
        cursor:      pointer;
        width:       100%;
        text-align:  left;
        color:      #333;
    }
    button:hover{
        background-color:   #fff;
        font-weight:        600;
    }
</style>