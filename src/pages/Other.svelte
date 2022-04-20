<!-- EXPLORE PAGE COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'
    import TitleBlock       from '../components/shared/TitleBlock.svelte'
	import { ui }           from '../data/stores.js'	 
    import { componentContent }  from '../data/content.js'

    const titleData = {
        title:          componentContent.other.titleBlock.title,
        instruction:    componentContent.other.titleBlock.instruction,
    }

</script>


<!-- COMPONENT MARKUP-->
<section id="other-page"  class ="page" in:fade="{{duration: 1500}}" >
    <TitleBlock {titleData}/>


</section>


<!------ STYLE ------->
<style>

</style>