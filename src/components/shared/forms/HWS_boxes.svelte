<!-- HWS CONDITIONS AND VALUES BOXES-->
<script>
    import { ui }           from '../../../data/stores.js'
    import { hwsSchema }    from '../../../data/schema.js'
    import { slugify }      from '../../../utils/helpers.js'
	import { slide }        from 'svelte/transition'

    export let data

</script>


<!-- HTML COMPONENT MARKUP -->
<section transition:slide>
    <div>
        <h4>{@html data.name}</h4>
    </div>
    <div class = 'hws-box-container'>
        {#each data.array as item, index}
        <div class ="box" id = {`box-${slugify(data.name)}-${slugify(item)}`}>
            <img src = {hwsSchema[data.schemaName][item].imgURL} alt="tba"/>
            <div class = "height-pad"></div>
            <div class = "label">
                <h5>{@html item}</h5>
            </div>
        </div>
        {/each}
    </div>
</section>


<!-- STYLES-->
<style>
    section{
        display:            grid;
        grid-template-columns:  1fr 3fr;
        padding-bottom:         2.5vw;
    }
    h4{
        margin-block-start:  0;
        margin-block-end:    0;
        font-weight:        500;
        font-size:              1rem;
    }
    h5{
        margin-block-start: 0.5rem;
        margin-block-end:   0.5rem;
    }
    .hws-box-container{
        display:            grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap:         5px;
        row-gap:            5px;
    }
    .box{
        width:              100%;
        display:            grid;
        grid-template-columns: 1fr;
        grid-template-rows:     1fr;
        align-items:        center;
        justify-content:    center;
        font-weight:        600;
        cursor:             pointer;
        filter:             grayscale(50%) sepia(30%) brightness(100%);
    }
    .box:hover{
        filter:              grayscale(0%) sepia(0%) brightness(150%);
    }
    img, .height-pad, .label{
        grid-area: 1 / 1 / 2/ 2;
    }
    img{
        width: 100%;
        height: 100%; 
        object-fit: cover;
        z-index: -1;
    }
    .height-pad{
        padding-top:        100%;
        z-index:            -2;
    }
    .label{
        width:              100%;    
        font-size:          0.85vw;
        background:         rgba(0, 0, 0, 0.65);    
        color:              #fff;
        text-align:         center;
    }
</style>