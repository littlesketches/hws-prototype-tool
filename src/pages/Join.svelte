<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import JoinInfoPane     from '../components/byPage/join/JoinInfoPane.svelte'
    import NewUser          from '../components/byPage/join/NewUser.svelte'
    import Login            from '../components/byPage/join/Login.svelte'
	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

	export let transition

    const titleInfo = getPageInfo($ui.page)[0].TitleBlock

</script>

<!-- COMPONENT MARKUP-->
<section  { transition }>
    <TitleBlock {...titleInfo}/>
    <JoinInfoPane/>
    {#if $ui.byPage.join.form ==='newUser'}
    <NewUser/>
    {:else}
    <Login/>
    {/if}

</section>


<!------ STYLE ------->
<style>
    section{
        display:                grid;
        grid-template-columns:  1fr 2fr;
        grid-template-rows:     auto 1fr;
        column-gap:             2.5vw;
        row-gap:                2.5vw;
        grid-template-areas: 
            "title title"
            "info main"
        ;
        min-height:             100vh;
        padding:                5vw;
    }
</style>