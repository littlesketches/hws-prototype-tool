<script>
	import { onMount } from 'svelte';
    export let id
    export let name
    export let shortDesc
    export let imgURL

    function openProject(){

    }

	onMount(async () => {
        document.getElementById(`card-${id}`).style.backgroundImage = `url("${imgURL}")`
	});


</script>


<!-- COMPONENT MARKUP-->
<li>
    <div id = {`card-${id}`} class = 'card'>
        <h3>{@html name}</h3>
        <div class = 'desc-container'>
            <p>{@html shortDesc}</p>
            <div class = "project-link" on:click={openProject}>
                <a on:click={openProject}> >> See more</a>
            </div>
        </div>
    </div>

</li>


<!------ STYLE ------->

<style>
    li{
        outline: none;
    }
    h3{
        padding:    1rem 0.5rem;
        background: #333;
        color:      #fff;
        font-size:      1vw;
    }
    .desc-container{
        background:     rgba(255, 255, 255, 0.9);
        padding:        0.5rem;
        font-size:      0.5rem
    }
    .card{
        padding:                    1rem;
        height:                 35vh;
		background-position:    center;
		background-size:        cover;
        filter:                 grayscale(80%) sepia(20%);
        cursor:                 pointer;
    }
    .card:hover{
        filter:                 grayscale(0%) sepia(20%)
    }
    .project-link{

    }
</style>
