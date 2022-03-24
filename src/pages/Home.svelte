<!-- HOME PAGE COMPONENT-->
<script>
	import Title from '../components/home/Title.svelte'
	import Menu from '../components/home/Menu.svelte'
    import Hero from  '../components/home/Hero.svelte'
    import About from  '../components/home/About.svelte'
    import Footer from '../components/Footer.svelte'
	export let transition
</script>


<!-- COMPONENT MARKUP-->
<section {transition}>
    <Hero/>
    <Title/>
    <Menu/>
</section>

<Footer/> <!-- Re-added as App level footer is cutoff by parallax hero -->

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