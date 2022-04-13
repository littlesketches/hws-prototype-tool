<!-- SHARE PAGE IMAAGE COMPONENT-->
<script>
    import { getRandomStockSplashImgPath }  from '../../../data/content.js'

</script>

<!-- COMPONENT HTML MARKUP-->
<section>
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