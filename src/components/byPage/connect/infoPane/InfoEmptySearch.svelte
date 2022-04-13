<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import QuickSearch          from '../QuickSearch.svelte'
    import { componentContent } from '../../../../data/content.js'
    import { ui }               from '../../../../data/stores.js'

    function showSearch(){
        $ui.byPage.connect.main = 'search'
    };

    function showMoreRandom(){
        $ui.byPage.discover.main = 'list'
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<div class = 'selection-info info-container'>
    <h2>&mdash; {@html componentContent.connect.info.selectionHeader}</h2>
    {@html  componentContent.connect.info.selectionDefault}  
</div>
<hr>
<div class = 'search-options-container'>
    <h2>&mdash; {@html componentContent.connect.info.searchToolHeader}</h2>
    {@html  componentContent.connect.info.searchToolDesc}
    <ul>
        <li>
            <div class = "button-container">
                <button on:click={showSearch}>Search for stakeholders &rarr;</button>
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
    .button-container{
        margin-top: 0.5rem;
    }
</style>