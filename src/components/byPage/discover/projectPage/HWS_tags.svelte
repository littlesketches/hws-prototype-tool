<!-- HWS TAGS-->
<script>
    import { ui }       from '../../../../data/stores.js'
    import {slugify }   from '../../../../utils/helpers.js'

    export let data
    const projectData = $ui.state.focus.projectData
</script>


<!-- HTML COMPONENT MARKUP -->
<section>
    <div>
        <h4>&#8212; Themes</h4>
    </div>
    <div class = 'hws-tag-container'>
        {#each projectData.hws.poTheme as theme, index}
        <div class="{slugify(theme)}">{@html theme}</div>
        {/each}
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
    }
    .hws-tag-container div{
        display:            inline-block;
        padding:            0.5rem 0.75rem;
        margin-right:       5px;
        margin-bottom:      5px;
        border-radius:      0.5rem;
        background-color:   rgb(236, 238, 237);
        font-weight:        600;
        font-size:          0.75rem
    }
</style>