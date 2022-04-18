<!-- HOME PAGE COMPONENT-->
<script>
	import Title    from '../components/byPage/home/Title.svelte'
	import Menu     from '../components/byPage/home/Menu.svelte'
    import Hero     from '../components/byPage/home/Hero.svelte'
	import { ui }   from '../data/stores.js'	

    $ui.showNav = false
</script>


<!-- COMPONENT HTML MARKUP-->
<section id="home-page">
    <Hero/>
    <Title/>
    <Menu/>
</section>


<!------ STYLE ------->
<style>
    section{
		display:        grid;
        height:         100vh;
        text-align:     center;
		grid-template-rows:     5vh repeat(8, 1fr) 5vh;
		grid-template-columns:  5vh repeat(8, 1fr) 5vh;
    }
</style>