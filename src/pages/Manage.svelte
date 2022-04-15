<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
    import InfoPane         from '../components/byPage/manage/InfoPane.svelte'

	import { ui }           from '../data/stores.js'	 
    import { getPageInfo }  from '../data/content.js'

    const titleData = getPageInfo($ui.page)[0].TitleBlock
</script>


<!-- COMPONENT MARKUP-->
<section class='page manage' in:fade="{{duration: 1500}}" >
    <TitleBlock {titleData}/>
    <InfoPane/>
</section>


<!------ STYLE ------->
<style>
</style>