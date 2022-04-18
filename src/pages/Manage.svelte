<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import UserProjects     from '../components/byPage/manage/UserProjects.svelte'
    import NewProject       from '../components/shared/newProject/NewProject.svelte'
    import ProjectPage      from '../components/shared/projects/ProjectPage.svelte'
	import { ui, user }     from '../data/stores.js'	 
    import { database }     from '../data/dataStores.js'
    import { getPageInfo }  from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock

    // Random project selections
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
    const projectDatabase = $database.projects
    const randProjNumber =  getRandomInt(3, 10)
    $user.data.userProjects = shuffleArray(projectDatabase.slice(0, randProjNumber))

</script>


<!-- COMPONENT MARKUP-->
<section id="manage-page"  in:fade="{{duration: 1500}}" >
    <TitleBlock {titleData}/>
    {#if !$ui.byPage.manage.overlay}
    <UserProjects/>
    {:else if $ui.byPage.manage.overlay === 'project'}
    <ProjectPage/>
    {:else if $ui.byPage.manage.overlay === 'newProject'}
    <NewProject store={$ui.newProject}/>
    {:else if $ui.byPage.manage.overlay === 'editProject'}
    <NewProject store={$ui.editProject.data}/>
    {/if}
</section>


<!------ STYLE ------->
<style>
    section{
        display:                grid;
        row-gap:                2.5vw; 
        grid-template-areas: 
            "title"
            "userProjects"
            "watchlistProjects"
            "feedbackProjects"
            "userAccount";
        padding:                7.5vh;
    }
</style>