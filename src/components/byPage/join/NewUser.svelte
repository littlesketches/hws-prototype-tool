<!-- LOGIN FORM COMPOENNT -->
<script>
    import DividerZagged20px from '../../shared/misc/DividerZagged20px.svelte'
    import { app }          from '../../../data/realm.js'
    import { user, ui }     from '../../../data/stores.js'

    let username, password, firstName, lastName, organisation, submitted
    function handleSubmit(){
        console.log(username, password,  lastName, organisation, submitted)
        if(firstName && lastName && username && organisation && password){
        }
        $user.isRegistered = true
        $ui.page = 'home'
    };

    function switchForm(){
        $ui.byPage.join.form = 'login'
    }
</script>


<!-- COMPONENT HTML MARKUP -->
<section>
    <div>
        <DividerZagged20px/>
        <h2>Create your account</h2>
        <form on:submit|preventDefault={handleSubmit}>
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
        <hr>
        <div class = 'switch-container'> 
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
        grid-area: main;
        width: 70%;
        margin: 0 auto; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    form{
        width: 100%;        
    }
    ul{
        list-style-type:    none;
        margin-block-start:     0;
        margin-block-end:       0;
        margin-inline-start:    0;
        margin-inline-end:      0;
        padding-inline-start:   0;
    }
    hr{
        margin-top: 2rem;
    }
    li{ 
        font-size:      0.8rem;
        padding-bottom:    2rem;
    }
    label, input{
        display: inline-block;
        font-weight: 300;
    }
    label{ 
        width: 25%;
    }
    input{ 
        width:      72.5%;
        float:      right;
        padding:    0.5rem;
    }
    button{ 
        width: 100%;
    }
    .switch-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .instruction-text{
        text-align: right;
        font-weight: 300;
        font-size: 1rem;
        cursor: pointer;    
    }
    .instruction-text:hover{
        font-weight: 500;
        text-decoration: underline;
    }
</style>
