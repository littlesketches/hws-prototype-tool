<!-- SHARE NEW IDEA PANE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { user, ui }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'

    function handleLoginRedirect(){
        $ui.page = 'join'
    }; 

    function openNewProject(){
        console.log('Open the project entry')
    }; 
</script>


<!-- COMPONENT HTML MARKUP-->
<section transition:fly="{{x: -500, duration: 800}}">
    <DividerZagged20px/>
    <div class = 'content-container'>
        <h2>&#8212; {@html componentContent.share.new.selectionHeader}</h2>
        {@html  componentContent.share.new.selectionDefault}  
    </div>

    <div class = "button-container">
        {#if $user.isRegistered}
        <button on:click={openNewProject}>Contribute a project</button>
        {:else}
        <button on:click={handleLoginRedirect}>Login to share your project &rarr;</button>
        {/if}
    </div>

    <div class = 'float-bottom'>
        <DividerZagged20px/>
    </div>
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:      share;
        column-gap:     2.5vw;    
        display:        flex;
        flex-direction: column;
    }
    .button-container{
        margin-top: auto;
    }
    .float-bottom{
        margin-top: 1.5rem;
    }


</style>