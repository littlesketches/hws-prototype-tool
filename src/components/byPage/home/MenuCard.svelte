<script>
	import { ui }       from '../../../data/stores.js'
    import {fade, fly}     from 'svelte/transition';

    export let name
    export let shortDesc
    export let index

    function switchPage(){
        $ui.page = this.getAttribute('name').toLowerCase()
        $ui.showNav = true
    };

</script>


<!-- HTML -->
<div class = 'card' name={name} on:click={switchPage} index={index} 
    in:fly="{{ y: 200 * (index%2 - 0.5) , duration: 1200, delay: 1800 }}"
    out:fade >
    <h3>{@html name}</h3>
    <hr>
    <div>
        <p>{@html shortDesc}</p>
    </div>
</div>


<!-- STYLES-->
<style>
    hr{
        border:         none;
        border-top:     3px solid;
        width:          10%;
        margin:         0 auto;
    }
    h3{
        font-size:      2vw;
        margin-top:     0;
        margin-bottom:  0.5rem;
        text-transform: lowercase;
        letter-spacing: 0.05rem;
    }
    p{
        font-size: 1vw;
    }
    .card{
        width:          12.5vw;
        height:         12.5vw;
        margin:         1rem;
        padding:        1rem;
        background:     rgba(255, 255, 255, 0.85);
        cursor:         pointer;
        transition:      all 200ms;
        transform-origin: 50% 50%;
    }
    .card:hover{
        color:          #fff;
        background:     rgba(0, 0, 0, 0.7);
        border-color:   #fff;
        font-weight:     500;
        transform:      scale(1.15);
    }
</style>
