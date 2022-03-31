<!-- LOGIN (ANON) COMPONENT AND CONNECTION SETUP--->
<script>
    import MainMenu from './HomeMenu.svelte'
    import { 
        app,    
        initRealm, 
        loginAnonymous,    
        connectToMongoAtlas, 
        connectToCollections
    } from "../../data/realm.js";

    console.log('Hello from the (anon) autologin and connection component..')   

    const promise = async function(app){
        await initRealm(app)
        await loginAnonymous(app)
        await connectToMongoAtlas(app)
        await connectToCollections(app)
    };
</script>


<!-- COMPONENT MARKUP -->
{#await promise(app)}
    <p>...connecting to realm app</p>
{:then data}
    <p>The realm and mongo atlas connections are made!!</p>

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<!-- STYLES -->
<style></style>