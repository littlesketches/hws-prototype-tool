<!-- MANAGER USER PROJECTS COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import ProjectListTable     from './projectList/ProjectListTable.svelte'
    import DividerZagged20px    from "../../shared/layout/DividerZagged20px.svelte"
    import { ui, user }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
    import { database }         from '../../../data/dataStores.js'

    $: projectsData = $user.data.draftProjects 

</script>

<!--COMPONENT HTML MARKUP-->
<section id = "news-and-alerts-options">
    <div>
        <h2>&mdash;&mdash; {@html componentContent.manage.info.newsAlertHeader}</h2>
        {@html componentContent.manage.info.newsAlertDesc}
    </div>
    <div class = "content">
        <p>
            This feature is a concept for showing a user customised set of "news or alerts". 
            It is simply a placeholder to prompt dicsussion on whether the idea has merit.
            This might be as simple as: 'newly added projects', or projects where there has been feedback/discussion by other users, or 'popular' projects etc.
            General news and activities might also be posted and appear here
            Users would be able to customise this feed throiugh their preferences (e.g. by location, 'interests' etc.)
        </p>
    </div>
</section>


<!-- STYLES -->
<style>
    section{
        grid-area:              newsAndAlerts;
        display:                grid;
        grid-template-columns:  1fr 2fr;
        grid-template-rows:     auto 1fr;
        column-gap:             5vw;
        border-top:             5px solid var(--darkGrey);
        padding:                1.5rem 0rem;
        z-index:                10;
    }
    h2{
        margin-block-start:     0;
        margin-block-end:       0;
    }
    p{
        font-style:             italic;
    }
    .content{
        grid-area:              1 / 2 / 2 / 3;
    }
</style>
