<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from '../../../../data/content.js'
    import { ui }               from '../../../../data/stores.js'

    function showSearch(){
        $ui.byPage.discover.main = 'search'
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <div>
        <h2>&#8212; {@html componentContent.share.existing.searchToolHeader}</h2>
        {@html  componentContent.share.existing.searchToolDesc}
    </div>

    <ul>
        <li>
            <div class = "button-container">
                <button on:click={showSearch}>Search for projects &rarr;</button>
            </div>
        </li>
    </ul>
</section>


<!------ STYLE ------->
<style> 
    section{
        display:    flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    ul{
        list-style-type: none;
        border: 0;
        margin: 0;
        margin-block-start: 0  ;
        margin-block-end: 0  ;
        padding-inline-start: 0;
    }
    .button-container{
        margin-top: 0.5rem;
    }
</style>