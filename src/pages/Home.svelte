<!-- HOME PAGE COMPONENT-->
<script>
	import { fade }     from 'svelte/transition'
	import { ui }       from '../data/stores.js'	
	import Title        from '../components/byPage/home/Title.svelte'
	import Menu         from '../components/byPage/home/Menu.svelte'
    import Hero         from '../components/byPage/home/Hero.svelte'
    import AboutArrow   from '../components/byPage/home/AboutArrow.svelte'

    $ui.state.showNav = false
</script>


<!-- COMPONENT HTML MARKUP-->
<section id="home-page" in:fade="{{duration: 1500}}">
    <Hero/>
    <Title/>
    <Menu/>
    <AboutArrow/>
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