<!--- MAIN APP COMPONENT-->
<script>
	import { fade } 	        from 'svelte/transition';
	import Home 		        from './pages/Home.svelte'
	import Discover 	        from './pages/Discover.svelte'
	import Connect 		        from './pages/Connect.svelte'
	import Share 		        from './pages/Share.svelte'
	import Join 		        from './pages/Join.svelte'
	import Manage 		        from './pages/Manage.svelte'
	import Nav 			        from './components/shared/ui/Nav.svelte'
	import ModalMessage         from './components/shared/ui/ModalMessage.svelte'
	import Footer 		        from './components/shared/layout/Footer.svelte'
	import Realm 		        from './components/data/Realm.svelte'
	import { user, ui }         from './data/stores.js'	 
	import { extractContent}    from './data/content.js'	 

    export let queryParams
    export let contentData

    // Extract content and setup tool
	const promiseContent = extractContent(contentData)    
	$user.isRegistered = queryParams.get('userRegistered') === 'true' ? true : false
	$ui.infoModal.showNotes = queryParams.get('showNotes') === 'false' ? false : true

    // Intro Modal
    if($ui.infoModal.showNotes){
        $ui.infoModal.message = {
            buttons:        [
                {
                    text:       'Explore the prototype',
                    function:   'close',
                }
            ],
            header:     '&#9888; THIS IS A PROTOTYPE &#9888; ',
            content:    `${contentData.filter(d => d.reference === 'messageModal.toolIntro')[0].content}
                        <hr>
                        <div style="display:flex; justify-content:center; text-align: center; color: #fff">
                            <div class="contact" style="width: 20%; padding:0.5rem; font-size: 0.8rem; margin:auto 0">
                                Feedback and further info: &rarr;
                            </div>
                            <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                <a style = "color: #fff" href="mailto:Gail.Hall@melbournewater.com.au?subject=Healthy Waterways Implementation Hub Prototype&cc=brendan@littlesketch.es">
                                    <div style="font-size: 3rem">&#9993;</div>
                                    <div style="font-size: 0.8rem">Email the prototype team directly</div>
                                </a>
                            </div>
                            <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                <a style = "color: #fff" >
                                    <div style="font-size: 3rem">&quest;</div>
                                    <div style="font-size: 0.8rem">Issues and suggestions (Airtable)</div>
                                </a>
                            </div>
                            <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                <a style = "color: #fff" href="https://www.figma.com/file/Kp2lrQynVAIS5tAlMy8whO/Prototype-wireframe-design?node-id=0%3A1" target="_blank">
                                    <div style="font-size: 3rem">&#x2692;</div>
                                    <div style="font-size: 0.8rem">UI/UX wireframes + feedback (Figma)</div>
                                </a>
                            </div>
                            <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                <a style = "color: #fff"  href="https://littlesketches.github.io/hws-prototype-tool/" target="_blank">
                                    <div style="font-size: 2rem; padding-top: 0.75rem; padding-bottom: 0.45rem">< /></div>
                                    <div style="font-size: 0.8rem">Code repository + documentation (Github)</div>
                                </a>
                            </div>
                        </div>
                        <hr>
                        `    
        }
    }

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

    <!-- INFO MODAL -->
    {#if $ui.infoModal.show && $ui.infoModal.message}
        <ModalMessage />
    {/if}
{/await}

<!------ STYLE ------->
<style></style>