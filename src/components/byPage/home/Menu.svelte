<script>
    import MenuCard                 from './MenuCard.svelte'
    import { app, deleteAllUsers }  from '../../../data/realm.js';
    import { getMenuOptions }       from '../../../data/content.js'
    import { user, ui }             from '../../../data/stores.js'
    import { slugify }              from '../../../utils/helpers.js'

    $ui.items.pages = getMenuOptions($user)

</script>

<!------ COMPONENT MARKUP ------->
<section>
    <!-- <h3>Menu of stuff</h3> -->
    <div class ='menu-container'>
        {#each $ui.items.pages as page (slugify(page.name))}
            <MenuCard name = {page.name} shortDesc = {page.shortDesc}/>
        {/each}
    </div>
    <div class ='down-container'>
        <h3 class= 'down-label'>About</h3>
        <div class = 'down-icon-container'>
            <svg id = "down-button" viewBox="0 0 37.5 37.5" width="100%">
                <path d="M34.98 13.775 18.75 30.006 2.518 13.776a1.036 1.036 0 1 0-1.462 1.47l16.963 16.962c.405.4 1.057.4 1.463 0l16.963-16.963a1.038 1.038 0 0 0-1.463-1.47z"/>
                <path d="M18.018 23.727c.406.4 1.057.4 1.463 0L36.444 6.765a1.038 1.038 0 0 0-1.463-1.47L18.751 21.51 2.518 5.294a1.037 1.037 0 1 0-1.463 1.47Z"/>
            </svg>
        </div>
    </div>
</section>


<!------ STYLE ------->
<style>
    h3{
        font-size:          2vw;
        color:              #fff;
        text-transform:     lowercase;
    }
    section{
        grid-area:          6 / 1 / 10 / 11 ;      
        z-index:            7;
    }

    .menu-container{
        width:              100%;
        display:            flex;
        justify-content:    center;
    }
    .down-container{
        display:            flex;
        flex-direction:     column;
        justify-content:    center;        
        align-content:      center;        
        color:              #fff;
    }
    .down-label{
        text-align:         center;
        font-weight:        500;
    } 
    .down-icon-container{
        margin-top:         -3.0vh;
        width:              5vw;
        align-self:         center;
    }
    svg#down-button{
        fill:           #fff;
        display:        block;
    }
</style>