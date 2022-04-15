<!-- MORE INFO (Sources and references)-->
<script>
	import { slide }    from 'svelte/transition'
    import { ui }       from '../../../../data/stores.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData
</script>


<!-- HTML COMPONENT MARKUP -->
<section transition:slide>
    {#if projectData.lessons.general.length > 0}
        <h5>&mdash General learnings</h5>
        <ul>
            {#each projectData.lessons.general as learning, index}
                <li class ='margin-top'> {@html learning}</li>

            {/each}
        </ul>
    {/if}
    {#if projectData.lessons.worked.length > 0}
        <h5>&mdash What worked well</h5>
        <ul>
            {#each projectData.lessons.worked as learning, index}
                <li class ='margin-top'> {@html learning}</li>
            {/each}
        </ul>
    {/if}
    {#if projectData.lessons.failed.length > 0}
        <h5>&mdash What didn't work well</h5>
        <ul>
            {#each projectData.lessons.failed as learning, index}
                <li class ='margin-top'> {@html learning}</li>
            {/each}
        </ul>
    {/if}
</section>


<!-- STYLES -->
<style>
    ul{
        font-weight:            300;
        line-height:            1.5;
        font-size:              0.8rem;
    	padding-inline-start:   2rem;
    }
    h5{ 
        margin-block-end:     0;
    }
</style>