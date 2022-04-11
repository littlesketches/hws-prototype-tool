<!-- ABOUT SECTION COMPONENT-->
<script>
    import { getRandomStockImgPath, componentContent } from '../../../data/content.js'

    let content = componentContent.about
</script>


<!-- COMPONENT HTML MARKUP-->
<section class = "about-section">
    <div class = 'about-section-3col'> 
        <div class = 'content-oxx'>
            <h1>{ @html content.title }</h1>    
            <p class = 'note'>
                This is a development version of the collaborative tool where progress is being regularly pushed. 
                Development status will (soon) be documented on the accompanying 
                <a target="_blank" href="https://github.com/littlesketches/mw-collab-tool-proto"> repository.</a>
            </p> 
        </div>
        <div class = 'content-xox'> 
            {@html content.intro}
        </div>
        <div class = 'content-xxo'> 
            <img src = { getRandomStockImgPath() } alt="Stock image"/>
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-xox'>
            <img src = { getRandomStockImgPath() } alt="Stock image"/>
        </div>
        <div class = 'content-oxx'>
            <h2>{ @html content.section_01_title }  </h2>    
            { @html content.section_01_description }
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-xxo'>
            <h2>{ @html content.section_02_title } </h2>    
            { @html content.section_02_description }
        </div>
        <div class = 'content-oox'>
            <img src = { getRandomStockImgPath() } alt="Stock image"/>
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-xoo'>
            <img src = { getRandomStockImgPath() } alt="Stock image"/>
        </div>
        <div class = 'content-oxx'>
            <h2>{ @html content.section_03_title } </h2>    
            { @html content.section_03_description }
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-oox'>
            <img src = {getRandomStockImgPath() } alt="Stock image"/>
        </div>
        <div class = 'content-xxo'>
            <h2>{ @html content.section_04_title } </h2>    
            { @html content.section_04_description }
        </div>
    </div>

</section>


<!-- STYLES-->
<style>
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
        text-transform:     lowercase;
    }
    h1{
        margin-block-end:   0.5rem;
        font-size:          5vw;
        font-weight:        100;
    }
    h2{
        font-size:          3vw;
    }
    p{
        margin-block-start: 0;
        font-weight:        300;
        line-height:        1.75;
    }

    img{
        height:             100%;
        max-height:         50vh;
        width:              100%;
        object-fit:         cover;
    }

    .note{
        font-size:      0.75rem;
        color:         rgb(150, 150, 150);
        font-style:     italic;
        width:          75%;

    }

</style>