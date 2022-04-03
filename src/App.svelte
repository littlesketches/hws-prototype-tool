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
	import { user, ui } from './data/stores.js'	 
	import { getContent, getMenuOptions } from './data/content.js'	 

	let transition = fade

	const promise = getContent()
    // $ui.items.pages = getMenuOptions($user)
	// if($ui.page !== 'home')	$ui.showNav = true


</script>


<!------ HTMl COMPONENT MARKUP ------->
{#await promise then value}
	<Nav/>
	<main><!-- Main "Page: section controlled with base logic selector -->
		{#if $ui.page === 'home'}
			<Home {transition}/>
		{:else if $ui.page === 'discover'}
			<Discover {transition} />
		{:else if $ui.page === 'connect'}
			<Connect {transition}/>
		{:else if $ui.page === 'share'}
			<Share {transition}/>
		{:else if $ui.page === 'join'  }
			<Join {transition}/>
		{:else if $ui.page === 'manage'  }
			<Manage {transition}/>
		{/if}
	</main>
	{#if $ui.page !== 'home'}
	<Footer/>
	{/if}
{/await}

<!------ STYLE ------->
<style></style>