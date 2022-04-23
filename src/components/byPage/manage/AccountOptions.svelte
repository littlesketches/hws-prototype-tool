<!-- MANAGER USER PROJECTS COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import ProjectListTable     from './projectList/ProjectListTable.svelte'
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { ui, user }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
    import { database }         from '../../../data/dataStores.js'

    $: projectsData = $user.data.draftProjects 

    function handleLogout(){
        $ui.page = 'home'
        $ui.isRegistered = false
    };

    function openMessage(){
        if($ui.infoModal.showNotes){
            $ui.infoModal.message = {
                buttons:        [{text: 'Close' , function: 'close'}],
                header:         `&#9888; ${this.innerHTML}`,
                content:         componentContent.messageModal[this.getAttribute('name')]
            }
        }
    };
</script>

<!--COMPONENT HTML MARKUP-->
<section>
    <div>
        <h2>&mdash;&mdash; {@html componentContent.manage.info.accountHeader}</h2>
        {@html componentContent.manage.info.accountDesc}
    </div>
    <div class = "content">
        <ul class = 'unformatted'>
            <li name="setUserPreferences" on:click={openMessage} type="button">&rarr; Set news and alerts preferences</li>
            <li name="updateUserDetails" on:click={openMessage} type="button">&rarr; Update your details</li>
            <li name="logOut" on:click={handleLogout} type="button">&rarr; Logout</li>
        </ul>
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
    li{
        cursor:                 pointer;
        padding:                1rem 0;
        font-weight:            600;
        border-bottom:          0.75px solid var(--lightGrey);
    }
    li:hover{
        font-weight:    800;
        text-decoration: underline;
    }
</style>
