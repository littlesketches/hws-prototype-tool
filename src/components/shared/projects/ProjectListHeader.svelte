<script>
    import { ui }       from '../../../data/stores.js'

    // Switch between cards and map  
    $ui.byPage.discover.projectView = 'cards'

    function switchView(){
        $ui.byPage.discover.projectView = this.getAttribute('name')
        for (const item of document.getElementsByClassName('icon-container') ){
            item.classList.remove('selected')
        }
        this.classList.add('selected')
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<section>
    <div>   
        {#if $ui.byPage.discover.projectView === 'cards'}
        <h4>&#8212;&#8212; Project menu</h4>
        {:else}
        <h4>&#8212;&#8212; Project locations</h4>
        {/if}
    </div>
        
    <div class = "switch-container">
        <div on:click={switchView} name="cards" 
            class = 'icon-container selected' type = 'button'>
            Cards
        </div>
        <div class = "icon-divider">|</div>
        <div on:click={switchView} name="map" 
            class = 'icon-container' type = 'button'>
            Map
        </div>
    </div>
</section>

<!------ STYLE ------->
<style>
    section{
        display:            flex;
        justify-content:    space-between;
        padding-bottom:     1rem;
    }
    h4, .switch-container{
        font-size:          1rem;
    }
    h4{
        font-weight:        500;
        margin-block-start: 0;
        margin-block-end:   0;
        color:            rgb(100, 100, 100);
    }
    .switch-container{
        display:            flex;
        align-items:        flex-start;
    }
    .icon-divider{
        padding:            0 0.25rem;
        font-size:          0.75rem;
    }
    .icon-container{
        display:            inline-block;
        cursor:             pointer;
        opacity:            0.65;
    }
    .icon-container.selected{
        opacity:            1;
    }
    .icon-container:hover{
        font-weight:        600;
    }
</style>