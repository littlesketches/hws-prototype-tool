<!-- PROJECT PAGE TITLE BLOCK-->
<script>
    import { ui }           from '../../../../data/stores.js'
	import { fade }         from 'svelte/transition'

    // Reactive variables
    $: stakeholderName = $ui.state.focus.stakeholderData.name
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <div class = 'subtitle'>&mdash;&mdash;&mdash; <span>waterways stakeholder</span></div>
    <h1>{ @html stakeholderName }</h1>
</section>


<!------ STYLE ------->
<style>
    section{
        grid-area:  1 / 1 / 2 / 3;    
        margin-bottom: 1.5rem;
        border-bottom: 10px solid #333;
    }
    h1{
        font-size: 5rem;
        margin-block-start: 0.5rem;
        margin-block-end: 1rem;
        padding-right: 10vw;
    }
    span {
        letter-spacing: 0.0625rem;
    }
    .subtitle{
        color:          rgb(163, 161, 161);
        font-weight:    200;
        font-size:      0.8rem;
    }


</style>