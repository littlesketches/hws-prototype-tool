<!-- PROJECT PAGE IMAGE COMPONENT-->

<script>
    import { ui }           from '../../../../data/stores.js'
	import { fly }         from 'svelte/transition'

</script>

<!-- COMPONENT HTML MARKUP-->
    <section transtion:fly="{{y: 200, duration: 1000}}">
        <img src= {$ui.state.focus.projectData.imgURL} 
             alt="Image for {$ui.state.focus.projectData.name}"
        >
    </section>

<!------ STYLE ------->
<style>
    section{
        grid-area:  3 / 2 / 6 / 3;    
        height: auto;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>