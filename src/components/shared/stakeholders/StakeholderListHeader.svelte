<script>
    import { ui }         from '../../../data/stores.js'
	import { fly }        from 'svelte/transition'
    // Switch between cards and netowrk  
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
<section in:fly="{{x: 500, duration: 1500}}" out:fly="{{x: 500, duration: 150}}">
    <div>   
        {#if $ui.byPage.connect.stakeholderView === 'cards'}
        <h4>&#8212;&#8212; Stakeholders menu</h4>
        {:else}
        <h4>&#8212;&#8212; Stakeholder network</h4>
        {/if}
    </div>
        
    <div class = "switch-container">
        <div on:click={switchView} name="cards" 
            class = 'icon-container cards selected' type = 'button'>
            Cards
        </div>
        <div class = "icon-divider">|</div>
        <div on:click={switchView} name="network" 
            class = 'icon-container network' type = 'button'>
            Network
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
        padding:            0 0.25rem;
    }
    .icon-container{
        display:            inline-block;
        cursor:             pointer;
        opacity:            0.65;
        font-weight:        300;
    }
    .icon-container.cards{
        width:          50px;
        text-align:     left;
    }
    .icon-container.network{
        width:          65px;
        text-align:     right;
    }

    .icon-container.selected{
        opacity:            1;
        font-weight:        700;
    }
    .icon-container:hover{
        font-weight:        700;
    }
</style>