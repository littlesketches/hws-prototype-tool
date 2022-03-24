<!-- PROJECT LIST-->
<script>
    import ProjectCard from './ProjectCard.svelte'
    import { getRandomStockImgPath } from '../../data/ui.js'

    const projects = [
        {
            id:         '001',
            name:       'Reprehenderit in voluptat',
            shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.t',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '002',
            name:       'Resse cillum dolore eu fugiat nulla pariatur',
            shortDesc:  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '003',
            name:       'Quis autem vel eum iure reprehenderit qui',
            shortDesc:  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '004',
            name:       'Name #2 heare',
            shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '005',
            name:       'Nodio dignissimos ducimus qui blanditiis',
            shortDesc:  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '006',
            name:       'Dolor in reprehenderit in voluptate ve',
            shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '007',
            name:       'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
            shortDesc:  'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '008',
            name:       'Omnis voluptas assumenda est, omnis dolor repellendus.',
            shortDesc:  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            imgURL :    getRandomStockImgPath()
        },
        {
            id:         '009',
            name:       'Et harum quidem rerum facilis',
            shortDesc:  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
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