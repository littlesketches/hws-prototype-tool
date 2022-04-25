<!-- PROJECT LIST-->
<script>
    import ProjectListHeader from './ProjectListHeader.svelte'
    import ProjectCard       from './ProjectCard.svelte'
    import ProjectMap        from './ProjectMap.svelte'
    import { ui }            from '../../../data/stores.js'
    import { database }      from '../../../data/dataStores.js'

    // Random project selection if no serch
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
    const projectDatabase = $database.projects
    const projects = $ui.search.project.length > 0 ? $ui.search.project : shuffleArray(projectDatabase).slice(0, 6)

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
    
    {:else}
    <ProjectMap/> 
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
</style>