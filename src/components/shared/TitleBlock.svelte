<!-- MAIN TITLE BLOCK COMPONENT-->
<script>
    import { fly }  from    'svelte/transition'
    export let titleData
</script>

<!-- COMPONENT HTML MARKUP-->
<section  in:fly="{{y: -500, duration: 1000}}" out:fly="{{y: -500, duration: 500}}">
    <div in:fly="{{x: -100, duration: 1500}}" out:fly="{{x: -100, duration: 750}}" >
        &mdash;&mdash;&mdash; <span>{@html titleData.instruction}</span>
    </div>
    <h1><span>:</span>{@html titleData.title}</h1>  

</section>


<!------ STYLE ------->
<style>
    section{
        grid-area:          title;  
        height:             fit-content;
        margin-bottom:      2rem;
    }
    h1{
        font-size:          7rem;
        margin-block-start: 0;
        margin-block-end:   0;
        letter-spacing:     0.125rem;
        font-weight:        700;
        text-transform:     lowercase;
    }
    div{
        color:              var(--grey);
        font-weight:        200;
        font-size:          0.8rem;
    }
    span{
        letter-spacing:     0.0625rem;
        padding-right:       1rem;
    }
</style>