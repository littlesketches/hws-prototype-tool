<!-- DOWN ARROW FOR HOME PAGE HERO-->

<section class ='down-container'>
    <h3 class= 'down-label'>About</h3>
    <div class = 'down-icon-container'>
        <svg id = "down-button" viewBox="0 0 37.5 37.5" width="100%">
            <path d="M34.98 13.775 18.75 30.006 2.518 13.776a1.036 1.036 0 1 0-1.462 1.47l16.963 16.962c.405.4 1.057.4 1.463 0l16.963-16.963a1.038 1.038 0 0 0-1.463-1.47z"/>
            <path d="M18.018 23.727c.406.4 1.057.4 1.463 0L36.444 6.765a1.038 1.038 0 0 0-1.463-1.47L18.751 21.51 2.518 5.294a1.037 1.037 0 1 0-1.463 1.47Z"/>
        </svg>
    </div>
</section>


<!-- STYLES -->
<style>
    section{
        grid-area:          9 / 5 / 10 / 7 ;      
        z-index:            6;
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
        margin-top:         -1.25vw;
        width:              5vw;
        align-self:         center;
    }
    svg#down-button{
        fill:               #fff;
        display:            block;
    }
</style>