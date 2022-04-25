<!-- PROJECT MAP-->
<script>
	import { fade }    from 'svelte/transition'
	import { ui } from '../../../data/stores.js'	 
</script>

<!-- COMPONENT MARKUP-->
<section in:fade="{{x: -500, duration: 1000}}" out:fade="{{x: -500, duration: 300}}">
    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" alt="A placeholder map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=144.3501162528992%2C-38.22939875284671%2C145.52839994430545%2C-37.35035595234929&amp;layer=hot" >
    </iframe>    
</section>

<!------ STYLE ------->
<style>
    section{
        height:     60vh;
    }
    iframe{
        width:      100%;
        height:     100%
    }
</style>