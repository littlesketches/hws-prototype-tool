<!-- PROJECT LIST-->
<script>
	import { ui } from '../../data/stores.js'	 
    function closeMap(){
        $ui.byPage.discover.main = 'list'
    }
</script>
<!-- COMPONENT MARKUP-->

<section>
    <div class ='map-wrapper'>
        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=144.3501162528992%2C-38.22939875284671%2C145.52839994430545%2C-37.35035595234929&amp;layer=hot" >
        </iframe>    
    </div>

    <div class='button-container'>
        <button on:click={closeMap}>
            Close map
        </button>
    </div>
</section>

<!------ STYLE ------->
<style>
    section{
        grid-template-areas:    main;
        display:    grid;

    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
        list-style-type:        none;
        border:                 0;
        margin:                 0;
        margin-block-start:     0;
        margin-block-end:       0;
        padding-inline-start:   0;
    }
    .map-wrapper{
        height:     75vh;
    }
    iframe{

        width:      100%;
        height:     100%
    }
    .button-container{
        align-self: end;
        justify-self: end;
    }
</style>