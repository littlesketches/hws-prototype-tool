<!-- LOGIN FORM COMPOENNT -->

<script>
    import { app }               from '../../../data/realm.js'
    import { user, ui }               from '../../../data/stores.js'

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
<div class = 'form-container'>
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
    <hr>
    <div> 
        <h3>Don't have an account?</h3>
        <div class = "instruction-text" on:click={switchForm}>
            &#8594; Click here to create an account
        </div>
    </div>
</div>



<!-- STYLES -->
<style>
    .form-container{
        grid-area: main;
        width: 100%;
    }
    form{
        width: 100%;        
    }
    hr{
        margin: 2rem 0;
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
    .instruction-text{
        font-weight: 300;
        cursor: pointer;
    }
    .instruction-text:hover{
        font-weight: 600;
        text-decoration: underline;
    }

</style>
