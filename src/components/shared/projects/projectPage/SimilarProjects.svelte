<!-- COMPONENT FOR SIMILAR PROJECTS-->
<script>
    import ProjectCard          from '../ProjectCard.svelte'
    import DividerZagged20px    from '../../layout/DividerZagged20px.svelte'
    import { ui }               from '../../../../data/stores.js'
    import { searchProjects }   from '../../../../data/realm.js'
    import { database }         from '../../../../data/dataStores.js'

    // Reacgive variables
    $: projectData = $ui.state.focus.projectData

    // Similar projecct data
    let simImpactProjects = [], 
        simLocationProjects =[],
        simLeadProjects = [],
        simProjectType =[] 

    const promise = searchProjects()

    //     const projectData =  await searchProjects()
    //     console.log(projectData)
    // };


    // Random project selection
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

    // const projectDatabase = $database.projects
    // const shuffledProjects = shuffleArray(projectDatabase)
    // const simImpactProjects = []   
    // const simLocationProjects = []
    // const simLeadProjects = []
    // const simProjectType = []

    // const shuffledProjects = shuffleArray(projectDatabase)
    // const simImpactProjects = shuffledProjects.slice(0, 3)    
    // const simLocationProjects = shuffledProjects.slice(3, 6)    
    // const simLeadProjects = shuffledProjects.slice(6, 9)    
    // const simProjectType = shuffledProjects.slice(9, 12)    
</script>


<!-- COMPONENT HTML MARKUP-->
{#await promise}
<section id = "similar-projects">
    <DividerZagged20px/>
    <h3>&mdash;&mdash; Similar projects to {projectData.name}</h3>

    <div class = 'group-container'>
        <h4>&mdash; by waterways impact </h4>
        <div class = "card-container">
            <ul class = "unformatted">
                {#each simImpactProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&mdash; by projectType </h4>
        <div class = "card-container">
            <ul class = "unformatted">
                {#each simProjectType as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&mdash; by location </h4>
        <div class = "card-container">
            <ul class = "unformatted">
                {#each simLocationProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&mdash; by project lead </h4>
        <div class = "card-container">
            <ul class = "unformatted">
                {#each simLeadProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>
</section>
{/await}

<!-- STYLE -->
<style>
    section{
        grid-area:              8 / 1 / 9 / 3;
        border-bottom:          1.5vh solid var(--darkGrey);
        margin-top:             2rem;
        padding-top:            1rem;
    }
    .group-container{
        display:                grid;
        margin-bottom:          2.5vw;
        grid-template-columns:  1fr 3fr;        
    }
    .card-container{
        display:                grid;
        column-gap:             2.5vw;
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
    }
    h3{
        margin-block-end:       2rem;
    }
    h4{
        margin-block-start:     0;
        font-size:              1rem;
        font-weight:            500;
    }
</style>