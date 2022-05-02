<!-- PROJECT LIST-->
<script>
    import ProjectListHeader    from './ProjectListHeader.svelte'
    import ProjectCard          from './ProjectCard.svelte'
    import Map                  from '../map/Map.svelte'
    import { ui }               from '../../../data/stores.js'

    const projects = $ui.search.results.project.length > 0 ? $ui.search.results.project.slice(0, 9) : []

</script>

<!-- COMPONENT HTML MARKUP-->
<section id ="project-list">   
    <ProjectListHeader/> 
    {#if $ui.byPage.discover.projectView === 'cards'}
    <ul class = 'unformatted'>
        {#each  projects as projectData, index}
        <ProjectCard {projectData} {index} />
        {/each}
    </ul>
    {#if $ui.search.results.project.length > 9}
    <div class = "page-selector-container">Page selector for more results TBA</div>
    {/if}
    {:else}
    <Map/> 
    {/if}
    
</section>

<!------ STYLE ------->
<style>
    section{
        grid-area:              main;
        z-index:                10;
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
    }
    .page-selector-container{
        display:                flex;
        justify-content:        flex-end;
        padding:                0.5rem 0;
        font-weight:            600;
        font-size:              0.8rem;
    }
</style>