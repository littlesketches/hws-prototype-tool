<!-- MAIN TITLE BLOCK COMPONENT-->
<script>
    import { fly }  from    'svelte/transition'
    export let title
    export let instruction
</script>

<!-- COMPONENT HTML MARKUP-->
<section class = "title" in:fly="{{y: -500, duration: 1000}}">
    <h1 > {@html title}</h1>  
    <p in:fly="{{x: -100, duration: 1500} }">
        &#8212;&#8212;&#8212; <span>{@html instruction}</span>
    </p>
</section>


<!------ STYLE ------->
<style>
    section{
        grid-area:          title;  
        height:             fit-content;
        margin-bottom:      2rem;
    }
    h1{
        font-size:          5rem;
        margin-block-start: 0;
        margin-block-end:   0;
        letter-spacing:     0.125rem;
        font-weight:        700;
    }
    p{
        font-weight:        100;
        color:            #555;
    }
    span{
        letter-spacing:     0.0625rem;
    }
</style>