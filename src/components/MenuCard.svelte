<script>
	import { ui } from '../data/stores.js'
    export let name
    export let shortDesc

    function switchPage(){
        $ui.page = this.getAttribute('name').toLowerCase()
        $ui.showNav = true
    };

</script>


<!-- HTML -->
<div class = 'card' name={name} on:click={switchPage} >
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
        text-transform:     lowercase;
    }
    p{
        font-size: 1vw;
    }
    .card{
        width:      12.5vw;
        margin:     1rem;
        padding:    1rem;
        background: rgba(255, 255, 255, 0.85);
        cursor:     pointer;
    }
    .card:hover{
        color:          #fff;
        background:     rgba(0, 0, 0, 0.7);
        border-color:   #fff;
        font-weight:        500;
    }
</style>
