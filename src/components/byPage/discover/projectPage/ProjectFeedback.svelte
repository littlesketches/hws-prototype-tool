<script>
    import { ui }       from '../../../../data/stores.js'
</script>

<section>
    <div class = 'divider'></div>
    <h3>HELLO FROM FEEDBACK</h3>
</section>


<style>

    section{
        width:      100%;
        height:      25vh;
        /* background: #000;
        color:       #fff; */
        grid-area: 7 / 1 / 8/ 3;
        /* border-top: #000 3vh solid;
        border-bottom: #000 3vh solid; */
        /* background-color: #e5e5f7; */
    }
    .divider{
        height: 20px;
        opacity: 0.8;   
        background: #000;
        background-image:  
            linear-gradient(135deg, #fff 25%, transparent 25%), 
            linear-gradient(225deg, #fff 25%, transparent 25%), 
            linear-gradient(45deg, #fff 25%, transparent 25%), 
            linear-gradient(315deg, #fff 25%, #000 25%);
        background-position:  10px 0, 10px 0, 0 0, 0 0;
        background-size: 20px 20px;
        background-repeat: repeat;
    }

</style>