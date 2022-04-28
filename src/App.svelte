<!--- MAIN APP COMPONENT-->
<script>
	import { fade } 	from 'svelte/transition';
	import Home 		from './pages/Home.svelte'
	import Discover 	from './pages/Discover.svelte'
	import Connect 		from './pages/Connect.svelte'
	import Share 		from './pages/Share.svelte'
	import Join 		from './pages/Join.svelte'
	import Manage 		from './pages/Manage.svelte'
	import Nav 			from './components/shared/ui/Nav.svelte'
	import ModalMessage from './components/shared/ui/ModalMessage.svelte'
	import Footer 		from './components/shared/layout/Footer.svelte'
	import Realm 		from './components/data/Realm.svelte'
	import { user, ui } from './data/stores.js'	 
	import { getContent,  getMenuOptions } from './data/content.js'	 
    import { database } from './data/dataStores.js'

    export let queryParams
    export let airtableData
    
	$user.isRegistered = queryParams.get('userRegistered') === 'true' ? true : false
	const promiseContent = getContent(airtableData)

</script>	


<!------ HTMl COMPONENT MARKUP ------->
{#await promiseContent then value}
	<Nav/>
	<main id ='main-page'><!-- Main "Page: section controlled with logic selector -->
		{#if      $ui.page === 'home'}      <Home/>
		{:else if $ui.page === 'discover'}  <Discover/>
		{:else if $ui.page === 'connect'}   <Connect/>
		{:else if $ui.page === 'share'}     <Share/>
		{:else if $ui.page === 'join'}      <Join/>
		{:else if $ui.page === 'manage'}    <Manage/>
		{/if}
	</main>
	<Realm/>
	{#if $ui.page !== 'home'}
	<Footer/>
	{/if}
    <!-- MODAL -->
    {#if $ui.infoModal.show && $ui.infoModal.message}
        <ModalMessage />
    {/if}
{/await}

<!------ STYLE ------->
<style></style>