<!-- COMPONENT TO DISPLAY SEARCH OPTIONS (No search)-->
<script>
    import QuickSearch          from '../QuickSearch.svelte'
    import { componentContent } from '../../../../data/content.js'
    import { ui }               from '../../../../data/stores.js'
    import { leadOrg }          from '../../../../data/selectorLists.js'

    function showSearch(){
        $ui.byPage.connect.main = 'search'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

</script>

<!-- COMPONENT HTML MARKUP-->
<div>
    <h2>&mdash; {@html componentContent.connect.info.selectionHeader}</h2>
    <p>We've identified {leadOrg.list.length} stakeholders - from public and private sector orgnaisations, to grassroots groups - all working on projects that impact the health of our waterways
    </p>
    {@html  componentContent.connect.info.selectionDefault}  
</div>
<hr>
<div class = 'search-options-container'>
    <h2>&mdash; {@html componentContent.connect.info.searchToolHeader}</h2>
    {@html  componentContent.connect.info.searchToolDesc}
    <ul class ='unformatted'>
        <li>
            <div class = "button-container">
                <button on:click={showSearch}>Search for stakeholders &rarr;</button>
            </div>
        </li>
    </ul>
</div>


<!------ STYLE ------->
<style> 
    hr{
        margin:             2.5rem 0;
    }
    .button-container{
        margin-top:         0.5rem;
        margin-bottom:      1.5rem;
    }
</style>