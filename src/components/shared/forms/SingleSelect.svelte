<!-- SINGLE SELECT DROPDOWN -->
<script>
    import { fly } from 'svelte/transition';    
    import { onMount } from 'svelte';
    export let optionData
    export let value = ''

    onMount( () =>{
        document.getElementsByTagName('select').value = ""
    })
</script>


<!-- COMPONENT HTML MARKUP -->
<section>
    <select bind:value={value}>
        <option value ="" disabled selected hidden>{@html optionData.placeholderSingle} </option>
        {#each optionData.list as option}
            <option value = {option}>{@html option}</option>
        {/each}
    </select>
    <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M5 8l4 4 4-4z"></path>
    </svg>
</section>



<!-- STYLES -->
<style>
    section{
        display:                grid;
        background-color:       white;
        border-bottom:          1px solid hsl(0, 0%, 70%);
        position:               relative;
        padding:                0.125rem;
        grid-template-columns: auto auto;
    }

    select{
        border:                 none;
        font-size:              0.8rem;
        font-weight:            300;
        line-height:            1.5rem;
        margin:                 0;
        outline:                none;
        padding:                0;
        width:                  100%;
        min-height:             2.5rem;
        -moz-appearance:        none; /* Firefox */
        -webkit-appearance:     none; /* Safari and Chrome */
        appearance:             none;
        grid-area:              1 / 1 / 2 /3;
    }
    option{

    }
    .dropdown-arrow{
        grid-area:              1 / 2 / 2 / 3;
        justify-self:           end;
        align-self:             center;
        pointer-events:         none;
    }
    .dropdown-arrow path {
        fill:                   hsl(0, 0%, 70%);
    }
    select:invalid { color: rgb(189, 183, 183); }
</style>