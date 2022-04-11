<!-- HWS CONDITIONS AND VALUES BOXES-->
<script>
	import { onMount }      from 'svelte';
    import { ui }           from '../../../../data/stores.js'
    import { hwsSchema }    from '../../../../data/schema.js'
    import { slugify }      from '../../../../utils/helpers.js'
	import { slide }        from 'svelte/transition'

    export let data

    // Set the card background image
	onMount(async () => {
        for (const item of data.array){
            document.getElementById(`box-${slugify(data.name)}-${slugify(item)}`).style.backgroundImage = `url("${hwsSchema[data.schemaName][item].imgURL}")`
        }
	});
</script>


<!-- HTML COMPONENT MARKUP -->
<section transition:slide>
    <div>
        <h4>{@html data.name}</h4>
    </div>
    <div class = 'hws-box-container'>
        {#each data.array as item, index}
        <div class ="box" id = {`box-${slugify(data.name)}-${slugify(item)}`}>
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
        color:              #333;
        font-weight: 500;
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
        display:            flex;
        align-items:        center;
        justify-content:    center;
        font-weight:        600;
        font-size:          0.85vw;
        background-size:    cover;
        filter:             grayscale(40%) sepia(30%) brightness(150%);
        cursor:             pointer;
    }
    .box:hover{
        filter:              grayscale(0%) sepia(0%) brightness(150%);
    }

    .height-pad{
        padding-top:        100%;
    }
    .label{
        width:              100%;    
        background:         rgba(0, 0, 0, 0.65);    
        color:              #fff;
        text-align:         center;
    }
</style>