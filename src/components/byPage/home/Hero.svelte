<!-- PARALLAX HERO BG COMPONENT WITH "ABOUT" && "FOOTER" COMPONENTS EMBEDDED -->
<script>
    import About from './About.svelte'
    import Footer from '../../shared/Footer.svelte'
	const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	let y;
</script>


<!------ COMPONENT HTMLMARKUP ------->
<svelte:window bind:scrollY={y}/>

<section>
    <div class="parallax-container">
        {#each layers as layer}
            <img style="transform: translate(0,{-y * layer / (layers.length - 1)}px)"
                src="./static/img/parallax/parallax{layer}.png"
                alt="parallax layer {layer}">
        {/each}
    </div>
	<!-- Content embedded to merge with parallax container scrolling-->
    <div class="content">
        <div class="about-container">
            <About/>
            <Footer/>
        </div>
    </div>
</section>


<!------ STYLE ------->
<style>
    section{
        grid-area: 1 / 1 / 11 / 11;
    }
	.parallax-container {
		position:   fixed;
		width:      2400px;
		height:     712px;
		height:     100vh;
		left:       50%;
		transform:  translate(-50%,0);
	}

	.parallax-container img {
		position: absolute;
        object-fit: cover;
		top: 0;
		left: 0;
		width: 100%;
        height: 100vh;
		will-change: transform;
	}

	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45,10,13);
	}
    img {
        filter: brightness(150%)  grayscale(30%)  hue-rotate(180deg);
    }
    img:nth-of-type(6),
    img:nth-of-type(7),
    img:nth-of-type(8),
    img:nth-of-type(9){
        filter: brightness(230%)  grayscale(30%)  hue-rotate(180deg);
    }

	/* CONTENT INTEGRATED BELOW THE HERO */
	.content {
		position: relative;
		width: 100%;
		box-sizing: border-box;
	}

	.about-container {
		position: absolute;
		top: 100vh;
		left: 0;
		text-align: start;
        background: #fff;
		padding: 10vh 0 0 0;
	}
</style>