<!-- COMPONENT FOR SIMILAR PROJECTS-->
<script>
    import ProjectCard              from '../ProjectCard.svelte'
    import DividerZagged20px        from '../../layout/DividerZagged20px.svelte'
    import { ui }                   from '../../../../data/stores.js'
    import { getSimilarProjects }   from '../../../../data/realm.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData

    const promise = getSimilarProjects($ui.state.focus.projectData, $ui.state.focus.similarProjects)    
</script>


<!-- COMPONENT HTML MARKUP-->

{#await promise then value}
<section id = "similar-projects">
    <DividerZagged20px/>
    <h3>&mdash;&mdash; Similar projects to {projectData.name}</h3>

    <!-- SAME HWS THEME -->
    <div class = 'group-container'>
        <div class = "info-container">
            <h4>&mdash; by waterways impact themes </h4>
            {#if $ui.state.focus.similarProjects.byTheme.length === 0}
                <p>There are no other projects that share any of the themes of as {projectData.name}: </p>
            {:else if $ui.state.focus.similarProjects.byTheme.length === 1}
                <p>There is one other project that share any of the themes of as {projectData.name}): </p>
            {:else}
                <p>There are {$ui.state.focus.similarProjects.byTheme.length} other projects that share any of the themes of as {projectData.name}: </p>
            {/if}
            <ul class = 'similarity-list'>
                {#each projectData.hws.themes as item}
                <li>{item}</li>
                {/each}
            </ul>
        </div>

        <div class = "card-container">
            <ul class = "unformatted">
                {#each $ui.state.focus.similarProjects.byTheme.slice(0,6) as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
            {#if $ui.state.focus.similarProjects.byTheme.length > 6}
            <div class = "page-selector-container">Page selector for more results TBA</div>
            {/if}
        </div>
    </div>

    <!-- SAME PROJECT TYPE -->
    <div class = 'group-container'>
        <div class = "info-container">
            <h4>&mdash; by project type "{projectData.meta.type.toLowerCase()}"</h4>
            {#if $ui.state.focus.similarProjects.byProjectType .length === 0}
                <p>There are no other projects that are of the same type as {projectData.name}.</p>
            {:else if $ui.state.focus.similarProjects.byProjectType .length === 1}
                <p>There is one other project that is of the same type as {projectData.name}.</p>
            {:else}
                <p>There are {$ui.state.focus.similarProjects.byProjectType.length} other projects that are of the same type as {projectData.name}.</p>
            {/if}
        </div>

        <div class = "card-container">
            <ul class = "unformatted">
                {#each $ui.state.focus.similarProjects.byProjectType.slice(0,6) as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
            {#if $ui.state.focus.similarProjects.byProjectType.length > 6}
            <div class = "page-selector-container">Page selector for more results TBA</div>
            {/if}
        </div>
    </div>

    <!-- SAME LOCATION -->
    <div class = 'group-container'>
        <div class = "info-container">
            {#if projectData.location.subcatchments}
                <h4>&mdash; by location (sub-catchment)</h4>
                {#if $ui.state.focus.similarProjects.byLocation.length === 0}
                    <p>There are no other projects in same subcatchment(s) as {projectData.name}: </p>
                {:else if $ui.state.focus.similarProjects.byLocation.length === 1}
                    <p>There is one other project that is in the same sub-catchments as {projectData.name}:</p>
                {:else}
                    <p>There are {$ui.state.focus.similarProjects.byLocation.length} other projects that are in one of the same sub-catchments as {projectData.name}:</p>
                {/if}
                <ul class = 'similarity-list'>
                    {#each projectData.location.subcatchments as item}
                    <li>{item}</li>
                    {/each}
                </ul>
            {:else if projectData.location.catchments}
                {#if projectData.location.catchments.length < 5}
                    <h4>&mdash; by location (catchment)</h4>
                    {#if $ui.state.focus.similarProjects.byLocation.length === 0}
                        <p>There are no other projects in same catchment(s) as {projectData.name}: </p>
                    {:else if $ui.state.focus.similarProjects.byLocation.length === 1}
                        <p>There is one other project that is in the same catchments as {projectData.name}:</p>
                    {:else}
                        <p>There are {$ui.state.focus.similarProjects.byLocation.length} other projects that are in one of the same catchments as {projectData.name}:</p>
                    {/if}
                    <ul class = 'similarity-list'>
                        {#each projectData.location.catchments as item}
                        <li>{item}</li>
                        {/each}
                    </ul>
                {:else}
                    <h4>&mdash; by location (region wide)</h4>
                    {#if $ui.state.focus.similarProjects.byLocation.length === 0}
                        <p>There are no other region-wide projects (covering all catchments).</p>
                    {:else if $ui.state.focus.similarProjects.byLocation.length === 1}
                        <p>There is one other project that is a region-wide project (covering all catchments).</p>
                    {:else}
                        <p>There are {$ui.state.focus.similarProjects.byLocation.length} other projects that are region-wide projects (covering all catchments).</p>
                    {/if}
                {/if}            
            {/if}
        </div>

        <div class = "card-container">
            <ul class = "unformatted">
                {#each $ui.state.focus.similarProjects.byLocation.slice(0,6) as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
            {#if $ui.state.focus.similarProjects.byLocation.length > 6}
            <div class = "page-selector-container">Page selector for more results TBA</div>
            {/if}
        </div>
    </div>

    <!-- SAME PROJECT LEAD -->
    <div class = 'group-container'>
        <div class = "info-container">
            <h4>&mdash; also led by {projectData.leadOrg}</h4>
            {#if $ui.state.focus.similarProjects.byProjectLead.length === 0}
                <p>There are no other projects led by {projectData.leadOrg}.</p>
            {:else if $ui.state.focus.similarProjects.byProjectLead.length === 1}
                <p>There is one other project led by {projectData.leadOrg}.</p>
            {:else}
                <p>There are {$ui.state.focus.similarProjects.byProjectLead.length} other projects led by {projectData.leadOrg}.</p>
            {/if}
        </div>

        <div class = "card-container">
            <ul class = "unformatted">
                {#each $ui.state.focus.similarProjects.byProjectLead.slice(0,6) as projectData, index}
                <ProjectCard {projectData} {index} />
                {/each}
            </ul>
            {#if $ui.state.focus.similarProjects.byProjectLead.length > 6}
            <div class = "page-selector-container">Page selector for more results TBA</div>
            {/if}
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
    .group-container p,
     ul.similarity-list{
        display:                block;
        font-size:              1rem;
        font-weight:            300;
        line-height:            1.5;
    }
    ul.similarity-list{
        padding-left:           1rem;
    }
    ul.similarity-list li{

        padding-right:          1rem;
    }
    .info-container{
        padding-right:          2.5vw;
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
        color:                  var(--userComment);;
        margin-block-start:     0;
        font-weight:            500;
    }
    .page-selector-container{
        display:                flex;
        justify-content:        flex-end;
        padding:                0.5rem 0;
        font-weight:            600;
        font-size:              0.8rem;
    }
</style>