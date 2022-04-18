<!-- DISCOVER PAGE INFO PANE COMPONENT-->
<script>
	import { fly }              from 'svelte/transition'
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fly="{{x: -500, duration: 1500}}" out:fly="{{x: -500, duration: 150}}">
    <DividerZagged20px/>
    <h2>&mdash; {@html componentContent.manage.info.defaultHeader}</h2>
    {@html componentContent.manage.info.defaultDesc}
    <div class = 'float-bottom'>
        <DividerZagged20px/>
    </div>
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:      info;    
        display:        flex;
        flex-direction: column;
    }
    .float-bottom{
        margin-top:     auto;
    }
</style>