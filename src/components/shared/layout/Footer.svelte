<!----- COMPONENT MARKUP ----->
<footer class = 'tool'>
    <div>
        <div class = 'logo-tagline'>An initiative to support the </div>
        <img src = "./static/img/logo.svg" alt="Healthy Waterways strategy logo"/>
    </div>
</footer>
<footer class ='acknowledgement-of-country'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Australian_Aboriginal_Flag.svg" alt="Flag of Aboriginal Australia"/>
    <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Flag_of_the_Torres_Strait_Islanders.svg" alt="Flag of he Torres Strait Islanders"/>
    <div class ='acknowledgement-of-country-text'>
        Melbourne Water respectfully acknowledges Aboriginal and Torres Strait Islander peoples as the Traditional Owners and custodians of the land and water on which all Australians rely. We pay our respects to Wurundjeri, Bunurong and Wadawurrung, their Elders past, present and future, as Traditional Owners and the custodians of the land and water on which we rely and operate.
    </div>
</footer>

<!------ STYLE ------->
<style>
    footer.tool{
        display:            flex;
        justify-content:    flex-end;
        padding:            1rem;
        margin:             auto 1rem 0 1rem;
        border-top:         1px solid var(--lightestGrey);
    }
    .tool img{
        width:              200px;
        height:             calc(7.5vh - 1rem);
    }
    .logo-tagline{
        font-size:          0.8rem;
        font-weight:        600;
        padding-right:      0.5rem;
        opacity:            0.5;
    }

    footer.acknowledgement-of-country{
        display:            flex;
        justify-content:    flex-end;
        padding:            1rem;
        padding-top:        1.5rem;
        background:         #000;
    }
    .acknowledgement-of-country img{
        padding-left:       1rem;
        width:              auto;
        height:             3rem;        
    }
    .acknowledgement-of-country-text{
        padding:            0 1rem;
        color:              #fff;
        font-size:          0.8rem;
        font-weight:        700
    }
</style>