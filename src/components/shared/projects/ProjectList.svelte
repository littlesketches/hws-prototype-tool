<!-- PROJECT LIST-->
<script>
    import ProjectListHeader    from './ProjectListHeader.svelte'
    import ProjectCard          from './ProjectCard.svelte'
    import Map                  from '../map/Map.svelte'
    import { ui }               from '../../../data/stores.js'
    import { app }              from '../../../data/realm.js'

    // Random project selection if no search 
    let projects
    let noSearchResults = $ui.search.results.project.length
    let totalSearchPages = Math.ceil(noSearchResults / 9)
    let pageNo = 1
    let firstProjectIndex = 0

    async function getProjectData(){
        if($ui.search.criteria.project){    // Show search results (limited to 9 per page)
            projects = $ui.search.results.project.slice(firstProjectIndex, firstProjectIndex + 9) 
        } else {  // Or Random sample if no search is made
            projects =  await app.data.collections.projects.aggregate([
                { $sample : { size: 9 }  },
            ])
        }
    };

    const promise = getProjectData()

    // Page foward and back
    async function nextPage(){
        if((firstProjectIndex) + 9 < (noSearchResults - 9)){
            firstProjectIndex += 9
            pageNo++
            await getProjectData()
        }
    };

    async function prevPage(){
        if((firstProjectIndex) - 9 >= 0 ){
            firstProjectIndex -= 9
            pageNo--
            await getProjectData()
        }
    };

</script>

<!-- COMPONENT HTML MARKUP-->
{#await promise then value}
<section id ="project-list">   
    <ProjectListHeader/> 
    {#if $ui.byPage.discover.projectView === 'cards'}
        <ul class = 'unformatted'>
            {#each  projects as projectData, index}
            <ProjectCard {projectData} {index} />
            {/each}
        </ul>
        {#if $ui.search.results.project.length > 9}
            <div class = "page-selector-container">
                <div on:click="{prevPage}"> &larr; Previous page </div>
                <div class = "page-count"> {pageNo} / {totalSearchPages}</div>
                <div on:click="{nextPage}" > Next page &rarr; </div>
            </div>
        {/if}
    {:else}
        <Map/> 
    {/if}    
</section>
{/await}


<!------ STYLE ------->
<style>
    section{
        grid-area:              main;
        z-index:                10;
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
    }
    .page-selector-container{
        display:                flex;
        justify-content:        flex-end;
        padding:                0.5rem 0;
        font-weight:            400;
        font-size:              0.8rem;
    }
    .page-selector-container div{
        cursor:                 pointer;
    }
    .page-count{
        margin:                 0 1rem;
    }
    .page-selector-container div:hover{
        font-weight:            700;
        text-decoration:        underline;

    }

</style>