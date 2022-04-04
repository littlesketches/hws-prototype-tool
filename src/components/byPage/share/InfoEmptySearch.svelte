<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import { componentContent } from '../../../data/content.js'
    import { ui }       from '../../../data/stores.js'

    function showSearch(){
        $ui.byPage.discover.main = 'search'
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<div class = 'search-options-container'>
    <!-- Replciates project search -->
    <h2>{@html componentContent.shareInfo.searchToolHeader}</h2>
    {@html  componentContent.shareInfo.searchToolDesc}
    <ul>
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
    .button-container{
        margin-top: 0.5rem;
    }
    button{
        cursor:         pointer;
        width:          100%;
        padding:        0.75rem 0.5rem;
        margin-bottom:  0.75rem;
        text-align:     left;
        color: #333;
    }
    button:hover{
        background-color:#fff;
        font-weight: 500;
    }


</style>