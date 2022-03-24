<script>
    import { getRandomStockImgPath } from '../../data/content.js'
</script>



<div class = 'about-section-3col'> 
    <div class = 'content-oxx'>
        <h1>about the collaborative tool</h1>    
    </div>
    <div class = 'content-oxo'> 
        <p>A short simple desciption about the purpose of the tool, the catchment it covers and whot its for.</p>
        <p>Also add a statement about waterway health the link to the Healthy waterways strategy. As well as any other importnant acknowlegments.</p>
        <p>There probably will be more sections that could be added here - and further info linked - but an initial suggsetion here is to structure the about section simiarly to the main 'action' items that a user is presented with (i.e. in the main menu above).</p>
    </div>
    <div class = 'content-xxo'> 
        <img src = { getRandomStockImgPath() } />
    </div>

</div>
<div class = 'about-section-3col'> 
    <div class = 'content-xox'>
        <img src = { getRandomStockImgPath() }>
    </div>
    <div class = 'content-oxx'>
        <h2>Discover </h2>    
        <p>Longer statement about finding out about what's happening in the waterways: sharing and accessing project 'data', but more around beign able to find out what (of interest to the user) is being done to improve waterway health.</p>
    </div>
</div>

<div class = 'about-section-3col'> 
    <div class = 'content-xxo'>
        <h2>Connect and build community</h2>    
        <p>Something about fostering a community of users, sharing knowledge etc.: the idea of this 'area' is more around helping identify the 'who' and bringing faces and connections to things that are happening in the catchment. </p>
    </div>
    <div class = 'content-oox'>
        <img src = {getRandomStockImgPath() }>
    </div>
</div>

<div class = 'about-section-3col'> 
    <div class = 'content-xoo'>
        <img src = {getRandomStockImgPath() }>
    </div>
    <div class = 'content-oxx'>
        <h2>Share and collaborate on  ideas</h2>    
        <p>Statements about goals related to about sharing and building on each others ideas, providing feedback and shaping action etc.</p>
    </div>
</div>


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