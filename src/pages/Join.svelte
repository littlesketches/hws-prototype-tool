<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import InfoPane         from '../components/byPage/join/InfoPane.svelte'
    import ImagePane        from '../components/byPage/join/ImagePane.svelte'
    import NewUser          from '../components/byPage/join/NewUser.svelte'
    import Login            from '../components/byPage/join/Login.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section id="join-page" class='page' in:fade="{{duration: 1500}}" >
    <TitleBlock {titleData}/>
    <InfoPane/>
    {#if $ui.byPage.join.form ==='newUser'}
        <NewUser/>
    {:else}
        <Login/>
    {/if}
</section>


<!------ STYLE ------->
<style></style>