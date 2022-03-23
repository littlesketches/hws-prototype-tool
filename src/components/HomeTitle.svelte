<script>
	// import AutoLogin from './AutoLogin.svelte'
</script>


<!-- COMPONENT MARKUP-->
    <!-- <div class = "title-bg"></div> -->
    <div class = "title-content">
        <div>
            <h3>Healthy waterways</h3>
            <h1>Collaborative tool</h1>    
        </div>
        <!-- <AutoLogin/> -->
    </div>


<!------ STYLE ------->
<style>
    .title-bg,
    .title-content{
        grid-area:      2 / 1 / 4 / 11 ;
        display:        grid;
        align-items:    center;
        justify-items:  center;
        mix-blend-mode: hard-light;
        color:          rgb(13, 50, 50)
    }
    .title-bg{
        background:     rgba(255, 255, 255, 0.95);
        /* filter:         blur(4px);
        -webkit-filter: blur(4px); */
    }
    .title-content{
        z-index: 2;
    }
    h1, h3 {
		text-transform:     lowercase; 
        margin-block-end:   0;
        letter-spacing:     0.25rem;
    }
	h3 {
		font-size:          2.5vw;
		font-weight:        200;
        margin-block-start: 0;
	}
	h1 {
		text-transform:     lowercase;
		font-size:          8vw;
		font-weight:        500;
        margin-block-start: -1.0vw;
	}

</style>