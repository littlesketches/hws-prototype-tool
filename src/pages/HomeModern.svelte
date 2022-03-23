<!-- HOME PAGE COMPONENT-->
<script>
	import HomeTitle from '../components/HomeTitle.svelte'
	import HomeMenu from '../components/HomeMenu.svelte'
    import About from  '../components/About.svelte'

	export let transition

</script>


<!-- COMPONENT MARKUP-->
<section class ="splash-page hero">
    <HomeTitle/>
    <HomeMenu/>
</section>
<hr>
<About/>



<!------ STYLE ------->
<style>
    hr{
        width: 5vw;
		/* border: 10px; */
    }
    section{
		display: grid;
        height: 100vh;
		grid-template-rows: 5vh repeat(8, 1fr) 5vh;
		grid-template-columns: 5vh repeat(8, 1fr) 5vh;
        text-align: center;
    }
	.hero{
		background: url("../static/img/abstract/elemental_flows_water.png");
		background-position: center;
		background-size: cover;
		margin: 7.5vh;
		height: 85vh;
		width: calc(100vw - 15vh);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>