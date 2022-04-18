<!-- PROJECT LIST-->
<script>
    import ProjectListHeader from './ProjectListHeader.svelte'
    import ProjectCard       from './ProjectCard.svelte'
    import ProjectMap        from './ProjectMap.svelte'
    import { ui }            from '../../../data/stores.js'
    import { database }      from '../../../data/dataStores.js'

    // Random project selection
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
    const projectDatabase = $database.projects
    const randProjNumber =  5
    const projects = shuffleArray(projectDatabase.slice(0, randProjNumber))

</script>

<!-- COMPONENT HTML MARKUP-->
<section>   
    <ProjectListHeader/> 
    {#if $ui.byPage.discover.projectView === 'cards'}
    <ul>
        {#each projects as projectData, index}
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
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
        list-style-type:        none;
        border:                 0;
        margin:                 0;
        margin-block-start:     0;
        margin-block-end:       0;
        padding-inline-start:   0;
    }
</style>