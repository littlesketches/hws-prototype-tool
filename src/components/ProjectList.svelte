<!-- PROJECT LIST-->
<script>
    import ProjectCard from './ProjectCard.svelte'
    import { getRandomStockImgPath } from '../data/ui.js'

    const projects = [
        {
            id:         '001',
            name:       'Name here',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '002',
            name:       'Name #2 here',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '003',
            name:       'Name herde',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '004',
            name:       'Name #2 heare',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '005',
            name:       'Name hesre',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '006',
            name:       'Namde #2 here',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '007',
            name:       'Name #2 heare',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '008',
            name:       'Name hesre',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '009',
            name:       'Namde #2 here',
            shortDesc:  'This is a short description aboht the project',
            imgURL :    getRandomStockImgPath()
        }
    ]

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
        grid-template-areas:    projects;
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
        list-style-type: none;
        border: 0;
        margin: 0;
        margin-block-start: 0  ;
        margin-block-end: 0  ;
        padding-inline-start: 0;
    }

</style>