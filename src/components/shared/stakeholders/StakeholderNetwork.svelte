<script>
    import { getRandomAbstractImgPath } from '../../../data/content.js'

    const imageURL = getRandomAbstractImgPath()
</script>

<!-- COMPONENT HMTL MARKUP-->
<img src = {imageURL} alt ="tba"/>



<!------ STYLE ------->
<style>
img{
    width:      100%;
    height:     100%;
    object-fit: cover;
}
</style>