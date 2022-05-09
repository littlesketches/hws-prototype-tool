<!-- LOGIN (ANON) COMPONENT AND CONNECTION SETUP--->
<script>
    import { 
        app,    
        initRealm, 
        loginAnonymous,    
        connectToMongoAtlas, 
        connectToCollections,
        updateSelectionLists
    } from "../../data/realm.js";
    import {  createSelectorLists } from  "../../data/selectorLists.js";
    export let schemaData
    
    const promise = async function(app){
        await createSelectorLists(schemaData)
        await initRealm(app)
        await loginAnonymous(app)
        await connectToMongoAtlas(app)
        await connectToCollections(app)
        await updateSelectionLists(app)	
    };
</script>


<!-- COMPONENT MARKUP -->
{#await promise(app) then data }{/await}

<!-- STYLES -->
<style></style>