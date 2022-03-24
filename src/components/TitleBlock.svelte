<script>
    export let title
    export let instruction

</script>

<!-- COMPONENT MARKUP-->
<div class = "title">
    <div>
        <h1>{@html title}</h1>  
    </div>
    <div>
        <p>{@html instruction}</p>
    </div>
</div>


<!------ STYLE ------->
<style>
    .title{
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