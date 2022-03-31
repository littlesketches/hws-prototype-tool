<!-- PROJECT LIST-->
<script>
    import ProjectCard from './ProjectCard.svelte'
    import { getRandomStockImgPath, projectData } from '../../../data/content.js'


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randProjNumber =  getRandomInt(4, 9)  
    const projects = projectData.slice(0, randProjNumber)
</script>

<!-- COMPONENT MARKUP-->
<section>
    <ul>
        {#each projects as project}
            <ProjectCard {...project} />
        {/each}
    </ul>
</section>

<!------ STYLE ------->
<style>
    section{
        grid-template-areas:    main;
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
        list-style-type:        none;
        border:                 0;
        margin:                 0;
        margin-block-start:     0;
        margin-block-end:       0;
        padding-inline-start:   0;
    }

</style>