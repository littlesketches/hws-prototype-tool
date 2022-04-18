<!-- MANAGER USER PROJECTS COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import ProjectListTable     from './projectList/ProjectListTable.svelte'
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { ui, user }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
    import { database }         from '../../../data/dataStores.js'

    $: userProjects = $user.data.userProjects 

</script>

<!--COMPONENT HTML MARKUP-->
<section>
    <div>
        <h2>&mdash;&mdash; My projects</h2>
    </div>
    <div class = "content">
        <ProjectListTable projects={userProjects}/> 
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
</style>
