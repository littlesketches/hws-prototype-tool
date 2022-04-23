<!-- MORE INFO (Sources and references)-->
<script>
	import { slide }    from 'svelte/transition'
    import { ui }       from '../../../../data/stores.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData
</script>


<!-- HTML COMPONENT MARKUP -->
<section transition:slide>
    {#if projectData.learnings.general.length > 0}
        <h5>&mdash General learnings</h5>
        <ul>
            {#each projectData.learnings.general as learning, index}
                <li class ='margin-top'> {@html learning}</li>

            {/each}
        </ul>
    {/if}
    {#if projectData.learnings.worked.length > 0}
        <h5>&mdash What worked well</h5>
        <ul>
            {#each projectData.learnings.worked as learning, index}
            <li class ='margin-top'>{@html learning}</li>
            {/each}
        </ul>
    {/if}
    {#if projectData.learnings.failed.length > 0}
        <h5>&mdash What didn't work well</h5>
        <ul>
            {#each projectData.learnings.failed as learning, index}
            <li class ='margin-top'>{@html learning}</li>
            {/each}
        </ul>
    {/if}
</section>


<!-- STYLES -->
<style>
    ul{
        font-weight:            300;
        line-height:            1.5;
        /* font-size:              0.8rem; */
    	padding-inline-start:   2rem;
    }
    h5{ 
        margin-block-end:     0;
    }
</style>