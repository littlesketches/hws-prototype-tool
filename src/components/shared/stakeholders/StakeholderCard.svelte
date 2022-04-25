<!-- PROECT SUMMARY CARD COMPONENT-->
<script>
	import { fade, fly } 	from 'svelte/transition';
	import { ui }           from '../../../data/stores.js'	 
    import { getRandomAbstractImgPath } from '../../../data/content.js'

    export let stakeholderData
    export let index

    const id = stakeholderData._id.toString()

    // Show and hide descriptions 
    let hoverState = false
    function showDesc(){ hoverState = true };
    function hideDesc(){ hoverState = false };

    // Open a stakeholder
    function openStakeholder(){
        console.log('Open stakeholder with id: ', id)
        $ui.state.focus.stakeholderData = stakeholderData
        $ui.byPage.connect.overlay = 'stakeholder'
        window.scrollTo({top: 0, behavior: 'smooth'});
        // Hack for manually setting display
        if(document.getElementById('stakeholder-overlay')) document.getElementById('stakeholder-overlay').style.display = ''
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<li  in:fly="{{x: 500, duration: 1000, delay: 500 + 100 * index}}"  out:fly="{{x: 500, duration: 200, delay: 50 * index}}">
    <div id = {`card-${id}`} class = 'card' 
        on:click={openStakeholder(stakeholderData)} 
        on:mouseover={showDesc} on:focus={showDesc}   
        on:mouseout={hideDesc}  on:blur={hideDesc}   
        >
        <img src = {stakeholderData.imgURL} alt ='tba'>
        <h3>{@html stakeholderData.name}</h3>

        {#if hoverState}
        <div class = 'desc-container' transition:fade>
            <p>{@html stakeholderData.about.shortDescription}</p>
            <div class = "stakeholder-link">
                <a>&rarr; Tap to see more</a>
            </div>
        </div>
        {/if}
    </div>
</li>


<!------ STYLE ------->
<style>
    li{
        outline:            none;
    }
    h3{
        padding:            0.5rem 0.5rem;
        background:         #333;
        color:              #fff;
        font-size:          1vw;
        height:             fit-content;
    }
    .card{
        display:            flex;
        flex-direction:     column ;
        padding:            1rem;
        height:             35vh;
        max-height:         25vw;
        filter:             grayscale(40%) sepia(20%);
        cursor:             pointer;
    }
    .card:hover{
        filter:             grayscale(0%) sepia(0%);
    }
    .desc-container{
        align-self:         flex-end;
        background:         rgba(255, 255, 255, 0.9);
        padding:            0.5rem;
        font-size:          0.75vw;
        max-height:         100%;
    }

    img{
        position:           absolute;
        top:                0;
        left:               0;
        width:              100%;
        height:             100%; 
        object-fit:         cover;
        z-index:            -1;
    }
    .stakeholder-link{
        font-weight:        600;
    }
</style>
