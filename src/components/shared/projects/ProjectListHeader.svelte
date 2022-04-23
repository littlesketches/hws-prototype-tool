<script>
    import { fly }      from    'svelte/transition'
    import { ui }       from '../../../data/stores.js'
    import { componentContent }       from '../../../data/content.js'

    // Switch between cards and map  
    $ui.byPage.discover.projectView = 'cards'

    function switchView(){
        $ui.byPage.discover.projectView = this.getAttribute('name')
        for (const item of document.getElementsByClassName('icon-container') ){
            item.classList.remove('selected')
        }
        this.classList.add('selected')

        // Temporary info box for map
        if($ui.byPage.discover.projectView === 'map'){
            $ui.showMessage = {
                buttons: [{ text: 'Ok, got it!', function:  'close', }],
                header:         `&#9888; Map features are yet to be added`,
                content:         componentContent.messageModal.projectMap
            }
        }
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: 500, duration: 1500}}" out:fly="{{x: 500, duration: 150}}">
    <div>   
        {#if $ui.byPage.discover.projectView === 'cards'}
        <h4>&mdash;&mdash; Project menu</h4>
        {:else}
        <h4>&mdash;&mdash; Project locations</h4>
        {/if}
    </div>
        
    <div class = "switch-container">
        <div on:click={switchView} name="cards" 
            class = 'icon-container cards selected' type = 'button'>
            Cards
        </div>
        <div class = "icon-divider">|</div>
        <div on:click={switchView} name="map" 
            class = 'icon-container map' type = 'button'>
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
        font-weight:        700;
        margin-block-start: 0;
        margin-block-end:   0;
    }
    .switch-container{
        display:            flex;
        align-items:        flex-start;
    }
    .icon-divider{
        padding:            0 0.125rem;
    }
    .icon-container{
        display:            inline-block;
        cursor:             pointer;
        opacity:            0.65;
        font-weight:        300;
    }
    .icon-container.cards{
        width:              50px;
        text-align:         left;
    }
    .icon-container.map{
        width:              35px;
        text-align:         right;
    }
    .icon-container.selected{
        opacity:            1;
        font-weight:        700;
    }
    .icon-container:hover{
        font-weight:        700;
    }
</style>