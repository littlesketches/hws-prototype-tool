<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock from '../components/TitleBlock.svelte'

	import { ui } from '../data/stores.js'	 
    import { getPageInfo } from '../data/content.js'

	export let transition

    const pageInfo = getPageInfo($ui.page)[0].pageInfo

</script>

<!-- COMPONENT MARKUP-->
<section  { transition }>
    <TitleBlock {...pageInfo}/>
</section>


<!------ STYLE ------->
<style>
    section{
        display:                grid;
        grid-template-columns:  1fr 2fr;
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