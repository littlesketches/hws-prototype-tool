<!-- SHARE PAGE IMAAGE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import { getRandomStockSplashImgPath }  from '../../../data/content.js'
</script>

<!-- COMPONENT HTML MARKUP-->
<section transition:fly="{{y: 500, duration: 800}}">
    <img src = {getRandomStockSplashImgPath()} alt ='tba'/>
</section>


<!------ STYLE ------->
<style>
    section{
        grid-area: image;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>