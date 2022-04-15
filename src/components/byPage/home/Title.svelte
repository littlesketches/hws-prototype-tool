<script>
	import  { fly, fade }           from 'svelte/transition'
    import { componentContent }     from '../../../data/content.js'
</script>


<!-- COMPONENT MARKUP-->
    <section class = "title-content">
        <h3 in:fly="{{y: -50, duration: 1000}}" >
            { @html componentContent.title.subHeading } 
        </h3>
        <h1 in:fly="{{y: -100, duration: 1000}}">
            { @html componentContent.title.mainHeading}
        </h1>    
    </section>


<!------ STYLE ------->
<style>
    section{
        grid-area:          2 / 1 / 4 / 11 ;
        display:            grid;
        justify-items:      center;
        color:              var(--forestGreen);
        z-index:            2;
    }

    h1, h3 {
		text-transform:     lowercase; 
        margin-block-end:   0;
        letter-spacing:     0.25rem;
    }
	h1 {
		font-size:          8vw;
		font-weight:        500;
        margin-block-start: 0;
	}
	h3 {
		font-size:          2.5vw;
		font-weight:        200;
        align-self:         end;
	}
</style>