<!-- MORE INFO (Sources and references)-->
<script>
	import { slide }    from 'svelte/transition'
    import { ui }       from '../../../../data/stores.js'

    const projectData = $ui.state.focus.projectData
</script>


<!-- HTML COMPONENT MARKUP -->
<section transition:slide>
    <div class = "">
        <h4>&#8212;&#8212; References</h4>
    </div>
    <div class = ''>
        <p>More details about this project are availbable at tho following links</p>
        <ul>
            <li><a>Data source link #1</a></li>
            <li><a>Data source link #2</a></li>
            <li><a>Data source link #3</a></li>
        </ul>
    </div>

    <div>
        <h4>&#8212;&#8212; Contacts</h4>
    </div>
    <div class = ''>
        <p>Projet contacts from lead org</p>
    </div>

</section>


<!-- STYLES -->
<style>
    section{
        padding-bottom:         2.5vw;
        display:                grid;
        grid-template-columns:  1fr 3fr;
    }
    h4{
        margin-block-start:     0;
        margin-block-end:       0;
        color:                  #333;
        font-weight:            500;
        padding-right:          1rem;
    }
    p, ul{
        margin-block-start:     0;
        font-weight:            300;
        line-height:            1.5;
    }
</style>