
<script>
    import { getRandomAbstractImgPath }          from '../../../data/content.js'
</script>

<!-- COMPONENT HTML MARKUP -->
<section>
    <img src={getRandomAbstractImgPath()} alt="tba">
</section>


<!-- STYLES -->
<style>
    section{
        grid-area: image;
        width: 100%;
    }

    img{
        width:      100%;
        height:     100%;
        object-fit: cover;
    }
</style>