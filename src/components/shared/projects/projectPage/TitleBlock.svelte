<!-- PROJECT PAGE TITLE BLOCK-->
<script>
    import { ui }           from '../../../../data/stores.js'
	import { fade }         from 'svelte/transition'

    // Reactive variables
    $: projectName = $ui.state.focus.projectData.name
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <div>&mdash;&mdash;&mdash; <span>waterways project</span></div>
    <h1>{ @html projectName }</h1>
</section>


<!------ STYLE ------->
<style>
    section{
        grid-area:          1 / 1 / 2 / 3;    
        margin-bottom:      1.5rem;
        border-bottom:      10px solid var(--darkGrey);
    }
    h1{
        font-size:          5rem;
        margin-block-start: 0.5rem;
        margin-block-end:   1rem;
        padding-right:      10vw;
    }
    span {
        letter-spacing:     0.0625rem;
    }
    div{
        color:              var(--grey);
        font-weight:        200;
        font-size:          0.8rem;
    }
</style>