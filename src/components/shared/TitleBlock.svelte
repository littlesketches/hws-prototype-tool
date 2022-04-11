<script>
    import { fly }  from    'svelte/transition'
    export let title
    export let instruction
</script>

<!-- COMPONENT MARKUP-->
<section class = "title" in:fly="{{y: -500, duration: 1000}}">
    <h1 > {@html title}</h1>  
    <p in:fly="{{x: -100, duration: 1500} }">
        &#8212;&#8212;&#8212; {@html instruction}
    </p>
</section>


<!------ STYLE ------->
<style>
    section{
        grid-area: title;  
        height: fit-content;
    }
    h1{
        margin-block-start: 0;
        margin-block-end: 0;
    }
    p{
        color:          #333;
        font-weight:    300;
    }
</style>