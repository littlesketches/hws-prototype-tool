<!-- PROJECT DETAIL COMPONENT-->
<script>
    import { ui }   from '../../../data/stores.js'
	import { fade } from 'svelte/transition';
    import { getRandomStockImgPath } from '../../../data/content.js'

    const imgURL = getRandomStockImgPath()
  
</script>

<!-- COMPONENT HTML MARKUP-->
<section>
    <div class = 'title-block'>
        <h2>Project title goes here and might be a shortish sentence</h2>
    </div>
    <div class = 'info-pane'>
        <p>Info pane going in here</p>
    </div>
    <div class = "actions-pane">
        <span>Star</span>
        <span>Favorite</span>
        <span>Like</span>
    </div>

    <div class = 'content-pane'>
        <p class = 'short-desc'>Short description of one to two sentences go in here.Short description of one to two sentences go in here. Short description of one to two sentences go in here.</p>
        <hr>
        <div class = "content-container">
            <h3>Healthy waterways outcomes</h3>
            <div class = 'hws-tag-container'>
                <div>HWS outcome tag</div>
                <div>HWS outcome tag</div>
                <div>HWS outcome tag</div>
                <div>HWS outcome tag</div>
                <div>HWS outcome tag</div>
            </div>
        </div>
        <hr>
        <div class = "content-container">
            <h3>Project details</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
        </div>

    </div>


    <div class = 'image-pane'>
        <img src= {imgURL}>
    </div>

</section>

<!------ STYLE ------->
<style>
    section{
        grid-area: 1 / 1 / 3 / 3 ;
        background-color: rgb(242, 250, 251);
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        column-gap: 2.5vw;
        row-gap: 2.5vw;
    }
    h2, h3{
        margin-block-start: 0;
        margin-block-end: 0;
    }
    hr{
        margin: 0.5rem 0 1rem 0;
    }
    section div{
        height: fit-content
    }
    .title-block{
        grid-area:  1 / 1 / 2 / 5;    
        padding: 0.5rem 1rem;
    }
    .actions-pane{
        grid-area:  1 / 5 / 2 / 7;
        align-self:     start;
        justify-self:   end;
        padding: 1rem;
    }
    .actions-pane span{
        padding: 0.5rem;
    }
    .content-pane{
        grid-area:  2 / 1 / 8 / 4; 
        padding: 1rem;
    }
        .hws-tag-container{
            padding: 0.5rem 0;
        }
        .hws-tag-container div{
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            background-color: aquamarine;
            font-weight: 600;
            font-size: 0.75vw
        }

    .info-pane{
        grid-area:  2 / 4 / 3 / 7; 
        background: rgb(240, 240, 240);           
        display: grid;
        padding: 1rem;
    }



    .image-pane{
        grid-area:  4 / 5 / 9 / 7;    
        height: auto;
    }
    .image-pane img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>