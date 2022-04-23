<!-- COMPONENT FOR SIMILAR PROJECTS-->
<script>
    import ProjectCard          from '../../projects/ProjectCard.svelte'
    import DividerZagged20px    from '../../misc/DividerZagged20px.svelte'
    import { ui }               from '../../../../data/stores.js'
    import { database }         from '../../../../data/dataStores.js'

    // Reactive variables
    $: stakeholderData = $ui.state.focus.stakeholderData 
    $: leadProjects    =  $database.projects.filter( d => d.leadOrg === stakeholderData.name).slice(0, 3)
    $: partnerProjects  = $database.projects.filter( d => d.partnerOrgs.indexOf(stakeholderData.name) > -1).slice(0, 3)

</script>


<!-- COMPONENT HTML MARKUP-->

<section>
    <DividerZagged20px/>
    <h3>&mdash;&mdash; Projects {stakeholderData.name} is invovled with</h3>

    <div class = 'group-container'>
        <h4>&mdash; as project lead </h4>
        <div class = "card-container">
            <ul>
                {#each leadProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>

    <div class = 'group-container'>
        <h4>&mdash; as a project partner </h4>
        <div class = "card-container">
            <ul>
                {#each partnerProjects as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
        </div>
    </div>
</section>


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
        list-style-type:        none;
        border:                 0;
        margin:                 0;
        margin-block-start:     0;
        margin-block-end:       0;
        padding-inline-start:   0;
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