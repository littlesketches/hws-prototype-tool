<!-- COMPONENT FOR SIMILAR PROJECTS-->
<script>
    import ProjectCard       from '../ProjectCard.svelte'
    import DividerZagged20px from '../../misc/DividerZagged20px.svelte'
    import { ui }            from '../../../../data/stores.js'
    import { database }      from '../../../../data/dataStores.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData

    // Random project selection
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

    const projectDatabase = $database.projects
    const shuffledProjects = shuffleArray(projectDatabase)
    const simImpactProjects = shuffledProjects.slice(0, 3)    
    const simLocationProjects = shuffledProjects.slice(3, 6)    
    const simLeadProjects = shuffledProjects.slice(6, 9)    
    const simProjectType = shuffledProjects.slice(9, 12)    
</script>


<!-- COMPONENT HTML MARKUP-->

<section>
    <DividerZagged20px/>
    <h3>&#8212;&#8212; Similar projects to {projectData.name}</h3>

    <div class = 'group-container'>
        <h4>&#8212; by waterways impact </h4>
        <div class = "card-container">
            <ul>
                {#each simImpactProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&#8212; by projectType </h4>
        <div class = "card-container">
            <ul>
                {#each simProjectType as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&#8212; by location </h4>
        <div class = "card-container">
            <ul>
                {#each simLocationProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&#8212; by project lead </h4>
        <div class = "card-container">
            <ul>
                {#each simLeadProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>
</section>


<!-- STYLE -->
<style>
    section{
        grid-area:      8 / 1 / 9 / 3;
        border-bottom:     1.5vh solid #000;
        margin-top:     2rem;
        padding-top:    1rem;
    }
    .group-container{
        display:            grid;
        margin-bottom:      2.5vw;
        grid-template-columns:  1fr 3fr;        

    }
    .card-container{
        display:    grid;
        column-gap: 2.5vw;
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

    h3{
        margin-block-end: 2rem;
    }
    h4{
        margin-block-start: 0;
        font-size:          1rem;
        font-weight:        500;
    }
</style>