<!-- NEW USER SIGN UP FORM COMPOENNT -->
<script>
	import  { fly, fade }    from 'svelte/transition'
    import DividerZagged20px from '../../shared/misc/DividerZagged20px.svelte'
    import { app }          from '../../../data/realm.js'
    import { user, ui }     from '../../../data/stores.js'


    let username, password, firstName, lastName, organisation, submitted
    function handleSubmit(){
        console.log(username, password,  lastName, organisation, submitted)
        if(firstName && lastName && username && organisation && password){
        }
        // Set the UI state
        $user.isRegistered = true
        $ui.page = 'home'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    function switchForm(){
        $ui.byPage.join.form = 'login'
    }
</script>


<!-- COMPONENT HTML MARKUP -->
<section in:fly="{{x: 500,duration: 800, delay: 0}}"
        out:fly="{{x: 500,duration: 200, delay: 0}}">
    <div>
        <DividerZagged20px/>
        <h2>&mdash; Create your account</h2>
        <form class ='login' on:submit|preventDefault={handleSubmit}>
            <ul>
                <li>
                    <label for="firstName">First name</label>
                    <input class = "name" name ="firstName" bind:value={firstName}  placeholder="Enter your first name">
                </li>
                <li>
                    <label for="lastName">Last name</label>
                    <input class = "name" name ="firstName" bind:value={lastName} placeholder="Enter your first name">
                </li>
                <li>
                    <label for="organisation">Organsation </label>
                    <input class = "name" name ="firstName" bind:value={organisation}  placeholder="Choose your organisation">
                </li>
                <li>
                    <label for="emailUsername">Email (username)</label>
                    <input class = "email" name ="emailUsername" bind:value={username} placeholder="Enter your email address (username)">
                </li>
                <li>
                    <label for="password">Password</label>
                    <input class = "name" name ="password" bind:value={password} placeholder="Choose your password">
                </li>
            </ul>
            <button on:click={handleSubmit}> Create account </button>
        </form>
    </div>
    <div>
        <div class = 'switch-form-container'> 
            <h4>Aleady have an account?</h4>
            <div class = "instruction-text" on:click={switchForm}>
                &rarr; Click here to login
            </div>
        </div>
        <DividerZagged20px/>
    </div>
</section>


<!-- STYLES -->
<style>
    section{
        grid-area:          main;
        width:              70%;
        margin:             0 auto; 
        display:            flex;
        flex-direction:     column;
        justify-content:    space-between;
    }
</style>
