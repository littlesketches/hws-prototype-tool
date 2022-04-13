<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import QuickSearch              from '../QuickSearch.svelte'
    import { componentContent }     from '../../../../data/content.js'
    import { ui }                   from '../../../../data/stores.js'

    function showSearch(){
        $ui.byPage.discover.main = 'search'
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.discover.info.selectionHeader}</h2>
    {@html componentContent.discover.info.selectionDefault}  
</div>

<hr>
<div>
    <h2>&mdash; {@html componentContent.discover.info.searchToolHeader}</h2>
    {@html componentContent.discover.info.searchToolDesc}
    <ul>
        <li>
            <div class = "search-box-container">
                <QuickSearch/>
            </div>
        </li>
        <li>
            <div class = "button-container">
                <button on:click={showSearch}>User search filters &rarr;</button>
            </div>
        </li>
    </ul>
</div>


<!------ STYLE ------->
<style> 
    h2{
        margin-block-start: 0;
    }
    ul{
        list-style-type: none;
        border: 0;
        margin: 0;
        margin-block-start: 0  ;
        margin-block-end: 0  ;
        padding-inline-start: 0;
    }
    hr{
        margin: 2.5rem 0;
    }
    .search-box-container{
        width: 100%;
        position: relative;
        display: flex;
    }
    .button-container{
        margin-top: 0.5rem;
    }
</style>