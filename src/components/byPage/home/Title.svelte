<script>
	import  { fly, fade }            from 'svelte/transition'
    import { componentContent } from '../../../data/content.js'

    const content = componentContent.title
</script>


<!-- COMPONENT MARKUP-->
    <section class = "title-content" out:fade>
        <h3 in:fly="{{y: -50, duration: 1000}}" >
            { @html content.subHeading } 
        </h3>
        <h1 in:fly="{{y: -100, duration: 1000}}">
            { @html content.mainHeading}
        </h1>    
    </section>


<!------ STYLE ------->
<style>
    section{
        grid-area:      2 / 1 / 4 / 11 ;
        display:        grid;
        justify-items:  center;
        mix-blend-mode: hard-light;
        color:          rgb(13, 50, 50);
        z-index:        2;
    }

    h1, h3 {
		text-transform:     lowercase; 
        margin-block-end:   0;
        letter-spacing:     0.25rem;
    }
	h3 {
		font-size:          2.5vw;
		font-weight:        200;

        align-self:         end;
	}
	h1 {
		font-size:          8vw;
		font-weight:        500;
        margin-block-start: 0;
	}

</style>