<script>
    import { ui }       from '../../../data/stores.js'
    import { projectData } from '../../../data/content.js'

    // Switch between cards and map  
    $ui.byPage.connect.stakeholderView = 'cards' 

    function switchView(){
        $ui.byPage.connect.stakeholderView = this.getAttribute('name')
        for (const item of document.getElementsByClassName('icon-container') ){
            item.classList.remove('selected')
        }
        this.classList.add('selected')
    };

</script>

<!-- COMPONENT HTML MARKUP-->
<div class = "option-container">
    <div>   
        {#if $ui.byPage.connect.stakeholderView === 'cards'}
        <h4>&#8722; Stakeholders menu</h4>
        {:else}
        <h4>&#8722; Stakeholder network</h4>
        {/if}
    </div>
        
    <div class = "switch-container">
        <div on:click={switchView} name="cards" 
            class = 'icon-container selected' type = 'button'>
            Cards
        </div>
        <div class = "icon-divider">|</div>
        <div on:click={switchView} name="network" 
            class = 'icon-container' type = 'button'>
            Network
        </div>
    </div>
</div>

<!------ STYLE ------->
<style>
    h4{
        font-size: 0.75rem;
        margin-block-start: 0;
        margin-block-end:   0;
        color: rgb(150, 150, 150);
    }
    .option-container{
        display: flex;
        justify-content: space-between;
        padding-bottom: 1rem;
    }
    .switch-container{
        display: flex;
        align-items: flex-start;
    }
    .icon-divider{
        padding: 0 0.25rem;
        font-size: 0.75rem;
    }
    .icon-container{
        display: inline-block;
        cursor: pointer;
        opacity: 0.65;
        font-size: 0.75rem;
    }
    .icon-container.selected{
        opacity: 1;
    }
    .icon-container:hover{
        font-weight: 600;
    }
</style>