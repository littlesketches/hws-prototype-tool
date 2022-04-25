<!-- ABOUT SECTION COMPONENT-->
<script>
    import { ui }       from '../../../data/stores.js'
    import { getRandomStockImgPath, componentContent, infoModal } from '../../../data/content.js'

    /// Temporary info modals: to be eventually replaced withe their own information pages
    function handleInfoModal(){
        if($ui.infoModal.showNotes && componentContent.messageModal.projectSearch){
            $ui.infoModal.message = infoModal[this.getAttribute('modal')]
        }
    };

</script>


<!-- COMPONENT HTML MARKUP-->
<section class = "about-section">
    <!-- ABOUT ROW -->
    <div class = 'about-section-3col'> 
        <div class = 'content-oxx'>
            <h1>{ @html componentContent.about.title }</h1>    
        </div>
        <div class = 'content-xox'> 
            {@html componentContent.about.intro}
            <p>You can find out more about the development and governance of the tool <span class = "link-info" modal="toolGovernance" on:click={handleInfoModal}>here &rarr;</span></p>
        </div>
        <div class = 'content-xxo'> 
            <img src = { getRandomStockImgPath() } alt="Stock"/>
        </div>
    </div>
    <!-- DISCOVER & CONNECT ROW -->
    <div class = 'about-section-3col'> 
        <div class = 'content-xox'>
            <img src = { getRandomStockImgPath() } alt="Stock"/>
        </div>
        <div class = 'content-oxx'>
            <h2>{ @html componentContent.about.section_01_title }  </h2>    
            { @html componentContent.about.section_01_description }
        </div>
        <div class = 'content-xxo'>
            <h2>{ @html componentContent.about.section_02_title } </h2>    
            { @html componentContent.about.section_02_description }
        </div>
    </div>
    <!-- SHARE ROW -->
    <div class = 'about-section-3col'> 
        <div class = 'content-xox'>
            <h2>{ @html componentContent.about.section_03_title } </h2>    
            { @html componentContent.about.section_03_description }
        </div>
        <div class = 'content-oxx'>
            <img src = { getRandomStockImgPath() } alt="Stock"/>
        </div>
        <div class = 'content-xxo'>
            <img src = { getRandomStockImgPath() } alt="Stock"/>
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-xoo'>
            <img src = { getRandomStockImgPath() } alt="Stock"/>
        </div>
        <div class = 'content-oxx'>
            <h2>{ @html componentContent.about.section_04_title } </h2>    
            { @html componentContent.about.section_04_description }
        </div>
    </div>

    <div class = 'about-section-3col'> 
        <div class = 'content-oox'>
            <img src = {getRandomStockImgPath() } alt="Stock"/>
        </div>
        <div class = 'content-xxo'>
            <h2>{ @html componentContent.about.section_05_title } </h2>    
            { @html componentContent.about.section_05_description_A }
            <p>You can find out more about help and guidance in the tool <span class = "link-info" modal="toolGuidance" on:click={handleInfoModal}>here &rarr;</span></p>
            { @html componentContent.about.section_05_description_B }
            <p>You can find out more about other wateways resources <span class = "link-info" modal="otherResources" on:click={handleInfoModal}>here &rarr;</span></p>
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
        font-size:          3rem;
    }
    p{
        margin-block-start: 0;
    }
    img{
        height:             100%;
        max-height:         80vh;
        width:              100%;
        object-fit:         cover;
    }
    .note{
        font-size:      0.75rem;
        color:         rgb(150, 150, 150);
        font-style:     italic;
        width:          75%;
    }
    .link-info{
        font-weight:        500;

        cursor:             pointer;
    }
    .link-info:hover{
        font-weight:        700;
        text-decoration:    underline;
    }


</style>