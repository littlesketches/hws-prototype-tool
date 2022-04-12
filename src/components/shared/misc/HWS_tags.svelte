<!-- HWS TAGS-->
<script>
    import { ui }       from '../../../data/stores.js'
    import { slugify }  from '../../../utils/helpers.js'

    export let data
</script>


<!-- HTML COMPONENT MARKUP -->
<section>
    <h4>{@html data.name}</h4>
    <div class = 'hws-tag-container'>
        {#each data.array as item, index}
        <div class="{slugify(item)}">{@html item}</div>
        {/each}
    </div>
</section>


<!-- STYLES -->
<style>
    section{
        padding:                1rem 0;
        display:                grid;
        grid-template-columns:  1fr 3fr;
    }
    h4{
        margin-block-start:     0;
        margin-block-end:       0;
        font-weight:            500;
        font-size:              1rem;
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