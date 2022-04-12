<!-- SHARE NEW IDEA PANE COMPONENT-->
<script>
    import InfoEmptySearch      from "./InfoEmptySearch.svelte"
    import InfoSearchResults    from "./InfoSearchResults.svelte"
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
        <h2>&#8212; {@html componentContent.shareInfo.selectionHeader}</h2>
        {@html  componentContent.shareInfo.selectionDefault}  
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
    }

    .button-container{
        margin-top: 0.5rem;
    }
    button{
        text-align:     center;
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