<!-- PROECT SUMMARY CARD COMPONENT-->
<script>
	import { onMount }  from 'svelte';
	import { fade } 	from 'svelte/transition';
	import { ui }       from '../../../data/stores.js'	 

    export let id
    export let name
    export let shortDesc
    export let imgURL

    // Show and hide descriptions 
    let hoverState = false
    function showDesc(){
        hoverState = true
    };
    function hideDesc() {
        hoverState = false
    };

    // Open a project
    function openProject(){
        console.log('Open project with id: ', id)


        $ui.byPage.discover.projectPage = true
    };

	onMount(async () => {
        document.getElementById(`card-${id}`).style.backgroundImage = `url("${imgURL}")`
	});

</script>


<!-- COMPONENT HTML MARKUP-->
<li>
    <div id = {`card-${id}`} class = 'card' 
        on:click={openProject} 
        on:mouseover={showDesc}  on:focus={showDesc}   
        on:mouseout={hideDesc}  on:blur={hideDesc}   
        >
        <h3>{@html name}</h3>

        {#if hoverState}
        <div class = 'desc-container' transition:fade>
            <p>{@html shortDesc}</p>
            <div class = "project-link">
                <a>>> Tap to see more</a>
            </div>
        </div>
        {/if}
    </div>

</li>


<!------ STYLE ------->
<style>
    li{
        outline: none;
    }
    h3{
        padding:    0.5rem 0.5rem;
        background: #333;
        color:      #fff;
        font-size:      1vw;
        height: fit-content;
    }

    .card{
        display:                flex;
        flex-direction:         column ;
        padding:                1rem;
        height:                 35vh;
		background-position:    center;
		background-size:        cover;
        filter:                 grayscale(40%) sepia(20%);
        cursor:                 pointer;
    }

    .desc-container{
        align-self:     flex-end;
        background:     rgba(255, 255, 255, 0.9);
        padding:        0.5rem;
        font-size:      0.75vw;
        max-height:        100%
    }

    .card:hover{
        filter:                 grayscale(0%) sepia(0%)
    }
    .project-link{
        font-weight: 600;

    }
</style>
