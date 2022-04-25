<!-- MULTI INPUT with add and remove components  -->
<script>
	import { slide }       from 'svelte/transition'
    export let store 
    export let label 
    export let type 

    const iconClearPath = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';

    // Add and remove items for array inputs
    function deleteItem(index){
        store = store.filter((d, i) => i !== index)
    };
    function addItem(){
        store = [...store, '']
    };

</script>


<!-- COMPONENT HTML MARKUP -->
<ul>
    {#each store as item, index}
    <li id = "{type}-{index+1}-container" transition:slide>
        <label for= "{type}-{index+1}">{@html index+1}.</label>
        <div class = 'input-container'>
            <input name = "{type}-{index+1}" bind:value={item}/>
            <div class = "remove-row-button" on:click={() => deleteItem(index)}>
                <svg class="icon-clear" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path d="{iconClearPath}"/>
                </svg>
            </div>
        </div>
    </li>
    {/each}
</ul>
<div class ='add-container'>
    <div on:click={addItem}>&oplus; {@html label}</div>
</div>



<!-- STYLES-->
<style>
    label{
        color:              var(--darkGrey);
        padding:            0;
        font-size:          0.8rem;
        display:            flex;
        font-weight:        700;
        padding-left:       1rem;
        align-self:         center;
        justify-content:    flex-end;
    }
    .input-container{
         display: grid;
    }
    .input-container input,
    .input-container div{
        grid-area: 1 / 1/ 2/ 2;
    }
    .input-container div{
        justify-self:           end;
        z-index:                100;
        cursor:                 pointer;
        align-items:            center;
        background-color:       hsl(214, 15%, 55%);
        border-radius:          50%;
        display:                flex;
        justify-content:        center;
        height:                 1.25rem;
        min-width:              1.25rem;
        margin-right:           1rem;
    }

    svg path {
        fill: white;
    }

    .add-container{
        display:            flex;
        justify-content:    end;
        padding-bottom:     1.5rem;
    }
    .add-container div{
        font-size:          0.8rem;
        cursor:             pointer;
    }
    .add-container div:hover{
        font-weight:        700;
        text-decoration:    underline;
    }


</style>