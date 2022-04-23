<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import QuickSearch              from '../QuickSearch.svelte'
    import { componentContent }     from '../../../../data/content.js'
    import { ui }                   from '../../../../data/stores.js'

    function showSearch(){
        $ui.byPage.discover.main = 'search'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.discover.info.selectionHeader}</h2>
    {@html componentContent.discover.info.selectionDefault}  
</div>

<hr>
<div class ='search-container'>
    <h2>&mdash; {@html componentContent.discover.info.searchToolHeader}</h2>
    {@html componentContent.discover.info.searchToolDesc}
    <ul class = 'unformatted'>
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
    hr{
        margin:             2.5rem 0 0.5rem 0;
    }
    .search-container{
        padding-bottom:     1.5rem;
    }
    .search-box-container{
        position:           relative;
        display:            flex;
        width:              100%;
    }
    .button-container{
        margin-top:         0.5rem;
    }
</style>