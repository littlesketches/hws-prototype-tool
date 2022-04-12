<script>
    import { ui }       from '../../../../data/stores.js'
    import  DividerZagged20px from '../../../shared/misc/DividerZagged20px.svelte'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <DividerZagged20px/>
    <h3>&#8212;&#8212; What others think about {projectData.name}</h3>
    <div class = 'content'></div>
</section>


<!-- STYLES-->
<style>
    section{
        width:      100%;
        height:     fit-content;
        grid-area:  7 / 1 / 8/ 3;
        display:    grid;
    }
    .content{
        height: 30vh;
    }
</style>