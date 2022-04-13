<!-- DISCOVER PAGE INFO PANE COMPONENT-->
<script>
    import { ui }               from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <h2>&mdash; {@html componentContent.join.info.header}</h2>
   {@html componentContent.join.info.desc}
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:  info;    
        background: rgb(238, 238, 238);
        padding:    1rem;
    }
</style>