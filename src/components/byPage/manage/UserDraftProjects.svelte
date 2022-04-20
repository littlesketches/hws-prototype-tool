<!-- MANAGER USER PROJECTS COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import ProjectListTable     from './projectList/ProjectListTable.svelte'
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { ui, user }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
    import { database }         from '../../../data/dataStores.js'

    $: projectsData = $user.data.draftProjects 

</script>

<!--COMPONENT HTML MARKUP-->
<section>
    <div>
        <h2>&mdash;&mdash; {@html componentContent.manage.projects.draftHeader}</h2>
        {@html componentContent.manage.projects.draftDesc}
    </div>
    <div class = "content">
        {#if projectsData.length === 0}
        <div class = "no-entry-message">
            You don't have any projects saved in draft
        </div>
        {/if} 
        <ProjectListTable {projectsData } editable={true}/> 
    </div>
</section>


<!-- STYLES -->
<style>
    h2{
        margin-block-start:     0;
        margin-block-end:       0;
    }
    section{
        display:                grid;
        grid-template-columns:  1fr 2fr;
        grid-template-rows:     auto 1fr;
        column-gap:             5vw;
        border-top:             5px solid var(--darkGrey);
        padding:                1.5rem 0rem;
    }
    .content{
        grid-area:  1 / 2 / 2 / 3;
    }
    .no-entry-message{
        font-weight:            700;
        font-style:             italic;
        padding:                1rem;
        border-bottom:          solid 1px var(--lightGrey);
    }
</style>
