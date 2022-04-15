<!--- MAIN APP COMPONENT-->
<script>

	import { fade } 	from 'svelte/transition';
	import Home 		from './pages/Home.svelte'
	import Discover 	from './pages/Discover.svelte'
	import Connect 		from './pages/Connect.svelte'
	import Share 		from './pages/Share.svelte'
	import Join 		from './pages/Join.svelte'
	import Manage 		from './pages/Manage.svelte'
	import Nav 			from './components/shared/Nav.svelte'
	import Footer 		from './components/shared/Footer.svelte'
	import Realm 		from './components/data/Realm.svelte'
	import { user, ui } from './data/stores.js'	 
	import { getContent, getMenuOptions } from './data/content.js'	 

	const promiseContent = getContent()

	// Connect to Realm app
    import { 
        app,    
        initRealm, 
        loginAnonymous,    
        connectToMongoAtlas, 
        connectToCollections,
        setupLocalStore
    } from "./data/realm.js";
    import { database } from './data/dataStores.js'
    const promiseRealm = async function(app){
        await initRealm(app)
        await loginAnonymous(app)
        await connectToMongoAtlas(app)
        await connectToCollections(app)
        await setupLocalStore(app, $database)
        console.log($database)
    };


    // $ui.items.pages = getMenuOptions($user)
	// if($ui.page !== 'home')	$ui.showNav = true	
</script>	


<!------ HTMl COMPONENT MARKUP ------->
{#await promiseRealm then value}
	{#await promiseContent then value}
	<Nav/>
	<main><!-- Main "Page: section controlled with base logic selector -->
		{#if $ui.page === 'home'}
			<Home/>
		{:else if $ui.page === 'discover'}
			<Discover />
		{:else if $ui.page === 'connect'}
			<Connect/>
		{:else if $ui.page === 'share'}
			<Share/>
		{:else if $ui.page === 'join'  }
			<Join/>
		{:else if $ui.page === 'manage'  }
			<Manage/>
		{/if}
		<Realm/>
	</main>
	{#if $ui.page !== 'home'}
	<Footer/>
	{/if}
	{/await}
{/await}

<!------ STYLE ------->
<style></style>