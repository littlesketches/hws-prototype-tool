<!-- SHARE NEW IDEA PANE COMPONENT-->
<script>
    import InfoEmptySearch      from "./infoPane/InfoEmptySearch.svelte"
    import InfoSearchResults    from "./infoPane/InfoSearchResults.svelte"
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
<section>
    <div class = 'selection-info info-container'>
        <h2>&#8212; {@html componentContent.share.new.selectionHeader}</h2>
        {@html  componentContent.share.new.selectionDefault}  
    </div>

    <div class = "button-container">
        {#if $user.isRegistered}
        <button on:click={openNewProject}>Contribute a project</button>
        {:else}
        <button on:click={handleLoginRedirect}>Login to share your project</button>
        {/if}
    </div>
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:  share;
        column-gap: 2.5vw;    
        background: rgb(238, 238, 238);
        padding:    1rem;
        display:    flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .button-container{
        margin-top: 0.5rem;
    }


</style>