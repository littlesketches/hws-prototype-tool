<!-- LOGIN FORM COMPOENNT -->

<script>
    import DividerZagged20px from '../../shared/misc/DividerZagged20px.svelte'
    import { app }               from '../../../data/realm.js'
    import { user, ui }          from '../../../data/stores.js'

    let username, password, submitted
    function handleSubmit(){
        console.log(username, password)
        $user.isRegistered = true
        $ui.page = 'home'
    };
    function switchForm(){
        $ui.byPage.join.form = 'newUser'
    }
</script>


<!-- COMPONENT HTML MARKUP -->
<section>
    <div>
        <DividerZagged20px/>
        <h2>Login to your account</h2>
        <form on:submit|preventDefault={handleSubmit}>
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
        <hr>
        <div class = 'switch-container'> 
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
    form{
        width: 100%;        
    }
    hr{
        margin-top: 2rem;
    }
    ul{
        list-style-type:    none;
        margin-block-start:     0;
        margin-block-end:       0;
        margin-inline-start:    0;
        margin-inline-end:      0;
        padding-inline-start:   0;
    }

    li{ 
        padding-bottom:         2rem;
    }
    label, input{
        display: inline-block;
    }
    label{ 
        width: 25%
    }
    input{ 
        width: 72.5%;
        float: right;
        font-size: 0.75rem;
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
