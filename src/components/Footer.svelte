
<!----- COMPONENT MARKUP ----->
<footer>
    <div class = 'logo-container'>
        <div class = 'logo-tagline'>
            An initiative to support the
        </div>
        <div class = "logo-img-container">
            <img src = "./static/img/logo.svg"/>
        </div>
    </div>

</footer>


<!------ STYLE ------->
<style>
    footer{
        display: flex;
        justify-content: flex-end;
        border-top: 1px #ddd solid;
        padding: 1rem;
        margin: 0 1rem;
    }

    /* HWS logo */
    .logo-container {
        display:    flex;
        align-content: center;
        justify-content: flex-end;  
        background: rgba(255, 255, 255, 0.9);
        grid-area:  3 / 6 / 4 / 7;
        padding:    0.75rem 0;
    }
    .logo-tagline, 
    .logo-img-container {
        display:    flex;
        align-content: center;
        height: calc(7.5vh - 2rem);
        padding-left: 1rem;
        justify-content: end;
    }

    .logo-tagline{
    font-size: 0.7rem;
    }

</style>