<!-- COMPONENT FOR SIMILAR PROJECTS-->
<script>


</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <h3>HELLO FROM SIMILAR PROJECTS</h3>
    <div class = "similar-container">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>test</div>
    </div>
</section>



<!-- STYLE -->
<style>
    section{
        grid-area: 8 / 1 / 9 / 3;
        border-top: 1.5vh solid #000;
        margin-top: 2rem;
    }
    .similar-container{
        display:    grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2.5vw;
        row-gap: 2.5vw;
    }

    .similar-container div{
        background-color: lightgoldenrodyellow;
        width: 100%;
        height: 30vh;
        padding: 1rem;
    }
</style>