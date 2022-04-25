<!-- LOGIN FORM COMPOENNT -->
<script>
	import  { fly, fade }       from 'svelte/transition'
    import DividerZagged20px    from '../../shared/layout/DividerZagged20px.svelte'
    import { app }              from '../../../data/realm.js'
    import { user, ui }         from '../../../data/stores.js'
    import { componentContent, infoModal }       from '../../../data/content.js'

    let username, password, submitted
    function handleSubmit(){
        console.log(username, password)

        // Set the UI state
        $user.isRegistered = true
        $ui.page = 'home'
        window.scrollTo({top: 0, behavior: 'smooth'});

        // Temporary warning message 
        if($ui.infoModal.showNotes && componentContent.messageModal.login){
            $ui.infoModal.message = infoModal.login
            componentContent.messageModal.login = null
        }

    };
    function switchForm(){
        $ui.byPage.join.form = 'newUser'
    }
</script>


<!-- COMPONENT HTML MARKUP -->
<section in:fly="{{x: -500, duration: 800}}"
        out:fly="{{x: -500, duration: 200}}">
    <div>
        <DividerZagged20px/>
        <h2>&mdash; Login to your account</h2>
        <form class =  'login' on:submit|preventDefault={handleSubmit}>
            <ul>
                <li>
                    <label for="emailUsername">Email (username)</label>
                    <input class = "email" name ="emailUsername" bind:value={username} placeholder="Enter your email address (username)">
                </li>
                <li>
                    <label for="password">Password</label>
                    <input class = "name" name ="password" bind:value={password} placeholder="Enter your password">
                </li>
            </ul>
            <button on:click={handleSubmit}> Login to your account </button>
        </form>
    </div>
    <div>
        <!-- <hr> -->
        <div class = 'switch-form-container'> 
            <h4>Don't have an account?</h4>
            <div class = "instruction-text" on:click={switchForm}>
                &rarr; Click here to create one
            </div>
        </div>
        <DividerZagged20px/>
    </div>
</section>



<!-- STYLES -->
<style>
    section{
        grid-area: main;
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
