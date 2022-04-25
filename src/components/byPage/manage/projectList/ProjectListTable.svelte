<!-- MANAGER USER PROJECTS COMPONENT-->
<script>
	import { fly, slide }       from 'svelte/transition'
    import DividerZagged20px    from "../../../shared/layout/DividerZagged20px.svelte"
    import { ui }               from '../../../../data/stores.js'
    import { componentContent } from '../../../../data/content.js'
    import { database }         from '../../../../data/dataStores.js'

    export let projectsData
    export let editable = false

    function handleEdit(index){
        console.log('Opening a project for editing')
        $ui.state.focus.projectData = projectsData[index]
        $ui.byPage.manage.overlay = 'editProject'
        $ui.editProject.data = projectsData[index]
        window.scrollTo({top: 0, behavior: 'smooth'});

        // Hack for manually setting display
        if(document.getElementById('new-project')) document.getElementById('new-project').style.display = ''

    };
    function handleOpen(index){
        console.log('Open a project for viewing')
        $ui.state.focus.projectData = projectsData[index]
        $ui.byPage.manage.overlay = 'project'
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log( $ui.state.focus.projectData )

        // Hack for manually setting display
        if(document.getElementById('project-overlay')) document.getElementById('project-overlay').style.display = ''
    };
    function handleNewProject(index){
        console.log('Adding a new project')
        $ui.newProject = {
            name:           null,
            leadOrg:        '',
            meta:           {},
            about:          {},
            contact:        {},
            hws:            {},
            location:       {},
            learnings:        {
                general:    ['', '', ''],
                worked:     ['', '', ''],
                failed:     ['', '', ''],
            },
            links:          [
                {name: '', url: '', description: ''}
            ],
            partnerOrgs:    [],
            status:         {},
            record:         {}
        }

        $ui.byPage.manage.overlay = 'newProject'

        // Hack for manually setting display
        if(document.getElementById('new-project')) document.getElementById('new-project').style.display = ''

    };

    function handleDelete(index){
        console.log('Delete a project')
        projectsData = projectsData.filter((d, i) => i !== index)
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<section>
    {#each projectsData as project, index (project._id.toString())}
    <div class = 'row' name = {project._id.toString()} transition:slide>
        <div class = row-content>
            <div class = 'thumbnail-container'>
                <img src={project.imgURL} alt = 'thumbanail'/>
            </div>
            <div class = 'label'>{@html project.name}</div>
        </div>
        <div class = 'row-buttons' projectID = {project._id.toString()}>            
            <div on:click={() => handleOpen(index)}>View</div>
            {#if editable}
            <div on:click={() => handleEdit(index)}>Edit</div>
            {/if}
            <div on:click={() => handleDelete(index)}>Delete</div>
        </div>
    </div>
    {/each}

    {#if editable}
    <div class = 'add-container' on:click={handleNewProject}>
        &#x2295; Add a new project
    </div>
    {/if}
</section>


<!-- STYLES -->
<style>
    section{
        grid-area:          userProjects;
    }
    .row{
        display:            flex;
        padding:            0.5rem;
        align-items:        center;
        justify-content:    space-between;
        border-bottom:         1px solid var(--lightGrey);
    }
    .row-content, .row-buttons{
        display:            flex;
        align-items:        center
    }
    .thumbnail-container{
        justify-self:       flex-start;
    }
    img{
        width:              3rem;
        height:             3rem;
        size:               object-fit;
    }
    .label{
        font-size:          1rem;
        font-weight:        700;
        padding:            0 1rem
    }
    .row-buttons div{
        text-align:         center;
        font-size:          0.8rem;
        font-weight:        500;
        width:              3rem;
        padding:            0.5rem;
        margin:             0 0.125rem;
        border:             1px solid var(--darkGrey);
        border-radius:      0.25rem;
        cursor:             pointer;
    }
    .row-buttons div:hover{
        background-color:   var(--darkGrey);
        color:              #fff;
        font-weight:        700;
    }
    .add-container{
        text-align:         right;
        font-weight:        500;
        font-size:          1rem;
        padding-top:        1.5rem;
        cursor:             pointer;
    }
    .add-container:hover{
        font-weight:        700;
        text-decoration:    underline;
    }
</style>