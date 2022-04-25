<!-- FEEDBAC ON EXISTING PROJECT COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import DividerZagged20px    from "../../shared/layout/DividerZagged20px.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'

    function showSearch(){
        console.log('Show the search page')
        $ui.byPage.share.overlay = 'projectSearch'
    };

</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: 500, duration: 800}}" out:fly="{{x: 500, duration: 300}}">
    <DividerZagged20px/>
    <h2>&mdash; {@html componentContent.share.existing.aboutHeader}</h2>
    {@html componentContent.share.existing.aboutDesc}

    <div class = "button-container">
        <button on:click={showSearch}>Search for projects &rarr;</button>
    </div>
    <div class = 'float-bottom'>
        <DividerZagged20px/>
    </div>
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:          feedback;    
        display:            flex;
        flex-direction:     column;
    }
    .button-container{
        margin-top:         auto;
    }
    .float-bottom{
        margin-top:         1.5rem;
    }
</style>