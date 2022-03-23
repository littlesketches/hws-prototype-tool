<!-- HOME PAGE COMPONENT-->
<script>
	import HomeTitle from '../components/HomeTitle.svelte'
	import HomeMenu from '../components/HomeMenu.svelte'
    import HeroParallax from  '../components/HeroParallax.svelte'
    import About from  '../components/About.svelte'

	export let transition

</script>


<!-- COMPONENT MARKUP-->
<section {transition}>
    <HeroParallax/>
    <HomeTitle/>
    <HomeMenu/>
</section>


<!------ STYLE ------->
<style>
    section{
		display: grid;
        height: 100vh;
		grid-template-rows: 5vh repeat(8, 1fr) 5vh;
		grid-template-columns: 5vh repeat(8, 1fr) 5vh;
        text-align: center;
    }
</style>