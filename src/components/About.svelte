<script>
    import { getRandomStockImgPath } from '../data/ui.js'
    import AboutBanner from './HeroParallax.svelte'
</script>

<!-- HTML MARKUP : Static page-->
<section class = 'about-container'>

    <div class = 'about-section-3col'> 
        <div class = 'content-oxx'>
            <h1>about the collaborative tool</h1>    
        </div>
        <div class = 'content-oxo'> 
            <p>This tool is here to help us all share and collaborate on ideas and actions that contribute to improving the health of our waterways.</p>
            <p>This tool is here to help us all share and collaborate on ideas and actions that contribute to improving the health of our waterways.</p>
            <p>This tool is here to help us all share and collaborate on ideas and actions that contribute to improving the health of our waterways.</p>
        </div>
        <div class = 'content-xxo'> 
            <img src = {getRandomStockImgPath()} />
        </div>

    </div>
    <div class = 'about-section-3col'> 
        <div class = 'content-xox'>
            <img src = {getRandomStockImgPath()}>
        </div>
        <div class = 'content-oxx'>
            <h2>Sharing data, knowledge and wisdom</h2>    
            <p>This tool is here to help us all share and collaborate on ideas and actions that contribute to improving the health of our waterways.</p>
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-xxo'>
            <h2>Building community</h2>    
            <p>Something about fostering a community of users, sharing knowledge etc..</p>
        </div>
        <div class = 'content-oox'>
            <img src = {getRandomStockImgPath()}>
        </div>

    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-xoo'>
            <img src = {getRandomStockImgPath()}>
        </div>
        <div class = 'content-oxx'>
            <h2>Collaborating on new ideas</h2>    
            <p>Something about building on each others ideas, toawards action etc.</p>
        </div>
    </div>
</section>


<!-- STYLES-->
<style>
    .about-container{
        text-align: start;
    }
    .about-section-3col{
        display:                grid;
        grid-column-gap:        5vh;
        margin:                 7.5vh;
        grid-template-columns:  1fr 1fr 1fr;
    }

    .content-oxx{
        grid-area: 1 / 1 / 2 / 2;
    }
    .content-oox{
        grid-area: 1 / 1 / 2 / 3;
    }
    .content-ooo{
        grid-area: 1 / 1 / 2 / 4;
    }
    .content-xox{
        grid-area: 1 / 2 / 2 / 3;
    }
    .content-xoo{
        grid-area: 1 / 2 / 2 / 4;
    }
    .content-xxo{
        grid-area: 1 / 3 / 2 / 4;
    }


    h1, h2{
        margin-block-start: 0;
    }
    h1{
        font-size:          6vw;
        font-weight:        100;
        text-transform:     lowercase;
    }
    h2{
        font-size:          3vw;
        margin-block-start: 0;
        text-transform:     lowercase;
    }
    img{
        height:             100%;
        max-height:         50vh;
        width:              100%;
        object-fit:         cover;
    }
    .title-pane{
        width:              100%;
        justify-items:      end  ;
    }
    .content-pane{
        width:              100%
    }


</style>