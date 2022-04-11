<!-- PROJECT PAGE TITLE BLOCK-->
<script>
    import { ui }           from '../../../../data/stores.js'
	import { fade }         from 'svelte/transition'

    const projectData = $ui.state.focus.projectData
</script>


<!-- COMPONENT HTML MARKUP-->
<div class = 'title-block'>
    <div class = 'subtitle'>&#8212;&#8212;&#8212; waterways project</div>
    <h1>{ @html projectData.name }</h1>
</div>


<!------ STYLE ------->
<style>
    h1{ 
        font-size: 5rem;
        margin-block-start: 0.5rem;
        margin-block-end: 1rem;
    }
    .subtitle{
        color: rgb(163, 161, 161);
    }
    .title-block{
        grid-area:  1 / 1 / 2 / 3;    
        padding: 0 1rem;
    }

</style>