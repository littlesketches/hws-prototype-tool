<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }             from 'svelte/transition'
    import TitleBlock           from '../components/shared/layout/TitleBlock.svelte'
    import UserSharedProjects   from '../components/byPage/manage/UserSharedProjects.svelte'
    import UserDraftProjects    from '../components/byPage/manage/UserDraftProjects.svelte'
    import UserWatchlist        from '../components/byPage/manage/UserWatchlist.svelte'
    import NewsAndAlerts        from '../components/byPage/manage/NewsAndAlerts.svelte'
    import AccountOptions       from '../components/byPage/manage/AccountOptions.svelte'
    import NewProject           from '../components/shared/newProject/NewProject.svelte'
    import ProjectPage          from '../components/shared/projects/ProjectPage.svelte'
	import { ui, user }         from '../data/stores.js'	 
    import { app }              from '../data/realm.js'
    import { getPageInfo }      from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock

    ////////////////////////////////////////////////////////////////
    // Random project selections written to the $user.data store
    ////////////////////////////////////////////////////////////////

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

    let projectDatabase = []
    const getUserData = async() => {
        projectDatabase = await app.data.collections.projects.find({})
        console.log(projectDatabase)

        const userSharedNo =  getRandomInt(0, 7)
        const userDraftNo  =  getRandomInt(0, 7)
        const watchListtNo =  getRandomInt(0, 10)

        $user.data.sharedProjects   = shuffleArray(projectDatabase.slice(0, userSharedNo))
        $user.data.draftProjects    = shuffleArray(projectDatabase.slice(userSharedNo, userDraftNo))
        $user.data.watchListProjects = shuffleArray(projectDatabase.slice(userSharedNo +userDraftNo , watchListtNo))

    };
    const promise = getUserData()
</script>


<!-- COMPONENT MARKUP-->
{#await promise then value}
<section id="manage-page"  in:fade="{{duration: 500}}" >
    <TitleBlock {titleData}/>
    {#if !$ui.byPage.manage.overlay}
    <NewsAndAlerts/>
    <UserSharedProjects/>
    <UserDraftProjects/>
    <UserWatchlist/>
    <AccountOptions/>

    {:else if $ui.byPage.manage.overlay === 'project'}
    <ProjectPage/>
    {:else if $ui.byPage.manage.overlay === 'newProject'}
    <NewProject store={$ui.newProject}/>
    {:else if $ui.byPage.manage.overlay === 'editProject'}
    <NewProject store={$ui.editProject.data}/>
    {/if}
</section>
{/await}

<!------ STYLE ------->
<style>
    section{
        display:                grid;
        row-gap:                2.5vw; 
        grid-template-areas: 
            "title"
            "newsAndAlerts"
            "userProjects"
            "userDraftProjects"
            "watchlistProjects"
            "accountOptions";
        padding:                7.5vh;
    }
</style>