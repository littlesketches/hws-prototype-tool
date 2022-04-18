<!-- LOGIN (ANON) COMPONENT AND CONNECTION SETUP--->
<script>
    import { 
        app,    
        initRealm, 
        loginAnonymous,    
        connectToMongoAtlas, 
        connectToCollections,
        setupLocalStore,
        updateMultiSelect
    } from "../../data/realm.js";

    import { database } from '../../data/dataStores.js'

    const promise = async function(app){
        await initRealm(app)
        await loginAnonymous(app)
        await connectToMongoAtlas(app)
        await connectToCollections(app)
        await setupLocalStore(app, $database)
        await updateMultiSelect($database)	
    };
</script>


<!-- COMPONENT MARKUP -->
{#await promise(app) then data }

{/await}

<!-- STYLES -->
<style></style>