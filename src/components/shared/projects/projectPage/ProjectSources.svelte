<!-- MORE INFO (Sources and references)-->
<script>
	import { slide }    from 'svelte/transition'
    import { ui }       from '../../../../data/stores.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData
</script>


<!-- HTML COMPONENT MARKUP -->
<section transition:slide>
    {#if projectData.links.length > 0}
    <div class>
        <h4>&mdash; Links</h4>
    </div>
    <div>
        <ul>
            {#each projectData.links as linkData, index}
            <li><a href={linkData.url}>{linkData.label}</a> - {linkData.description}</li>
            {/each}
        </ul>
    </div>
    {/if}

    {#if projectData.contact.primary.firstName !== '' && projectData.contact.primary.lastName !== ''}
    <div>
        <h4>&mdash; Contact</h4>
    </div>
    <div class='info-row'>
        <div class ='info-label'>Name:</div>
        <div class ='info-content'>
            {@html projectData.contact.primary.firstName} {@html projectData.contact.primary.lastName}
        </div>
        <div class ='info-label'>Email:</div>
        <div class ='info-content'>
            {@html projectData.contact.primary.email}
        </div>
    </div>
    {/if}
</section>


<!-- STYLES -->
<style>
    section{
        padding-bottom:         2.5vw;
        display:                grid;
        grid-template-columns:  1fr 3fr;
        row-gap:                1rem;
    }
    h4{
        margin-block-start:     0;
        margin-block-end:       0;
        font-weight:            500;
        padding-right:          1rem;   
        font-size: 1rem;
    }
    p, ul{
        margin-block-start:     0;
        font-weight:            300;
        line-height:            1.5;
        font-size:              0.8rem;
    }
    ul{ 
    	padding-inline-start:   0.75rem;
    }
    a{
        font-weight:            700;
    }
    .info-row{
        display:                grid;
        grid-template-columns: auto 1fr;
        font-size:              0.8rem;
        row-gap:                0.5rem;
    }
    .info-label{
        font-weight: 400;
        color: rgb( 100, 100, 100);
        padding-right: 0.5rem;
    }
    .info-content{
        font-weight: 600;
    }
</style>