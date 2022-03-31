<script>
	// import AutoLogin from './AutoLogin.svelte'
    import { componentContent } from '../../../data/content.js'

    const content = componentContent.title
</script>


<!-- COMPONENT MARKUP-->
    <div class = "title-content">
        <div>
            <h3>{ @html content.subHeading } </h3>
            <h1>{ @html content.mainHeading} </h1>    
        </div>
    </div>


<!------ STYLE ------->
<style>
    .title-content{
        grid-area:      2 / 1 / 4 / 11 ;
        display:        grid;
        align-items:    end;
        justify-items:  center;
        mix-blend-mode: hard-light;
        color:          rgb(13, 50, 50);
        z-index: 2;
    }

    h1, h3 {
		text-transform:     lowercase; 
        margin-block-end:   0;
        letter-spacing:     0.25rem;
    }
	h3 {
		font-size:          2.5vw;
		font-weight:        200;
        margin-block-start: 0;
	}
	h1 {
		font-size:          8vw;
		font-weight:        500;
        margin-block-start: -1.0vw;
	}

</style>