<!-- MULTI INPUT with add and remove components  -->
<script>
	import { slide }        from 'svelte/transition'
    import { ui }           from '../../../data/stores.js'
    export let item 
    export let index 

    const iconClearPath = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';

    // Add and remove items for array inputs
    function deleteItem(){
        $ui.newProject.links = $ui.newProject.links.filter((d, i) => i !== index)
    };

</script>


<!-- COMPONENT HTML MARKUP -->
<li id = "link-container-{index+1}" transition:slide>
    <div class = 'input-container'>
        <label for= "link-name-{index+1}">Name of resource #{@html index+1}</label>
        <input name = "link-name-{index+1}" bind:value={item.name}/>
    </div>
    <div class = 'input-container'>
        <label for= "link-url-{index+1}">Website URL</label>
        <input name = "link-url-{index+1}" bind:value={item.url}/>
    </div>
    <div class = 'input-container'>
        <label for= "link-desc-{index+1}">Description</label>
        <input name = "link-desc-{index+1}" bind:value={item.description}/>
    </div>
    <div class = 'remove-container'on:click={deleteItem}>
        <div>Remove resource #{@html index+1}</div>
        <div class="token-remove">
            <svg class="icon-clear" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="{iconClearPath}"/>
            </svg>
        </div>
    </div>
</li>



<!-- STYLES-->
<style>
    li{
        display:                block;
    }
    label{
        color:                  var(--darkGrey);
        padding:                0;
        font-size:              0.8rem;
        display:                flex;
        font-weight:            300;
        padding-left:           1rem;
        align-self:             center;
    }
    .input-container{
        display:                grid;
        grid-template-columns:  1fr 3fr;
        column-gap:             2.5vw;
    }
    .remove-container{
        display:                flex;
        justify-content:        flex-end;
        align-content:          center;
        padding-top:            0.75rem;
        cursor:                 pointer;
    }
    .remove-container:hover{
        font-weight:            700;
        text-decoration:        underline;
    }
    div.token-remove{
        justify-self:           end;
        z-index:                100;
        align-items:            center;
        background-color:       hsl(214, 15%, 55%);
        border-radius:          50%;
        display:                flex;
        justify-content:        center;
        height:                 1.25rem;
        width:                  1.25rem;
        margin-left:            1rem;
    }
    .icon-clear path {
        fill: white;
    }

</style>