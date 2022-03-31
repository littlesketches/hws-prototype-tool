<!-- DISCOVER PAGE INFO PANE COMPONENT-->
<script>
    import { ui }   from '../../../data/stores.js'
    import { projectSchema, locationMap, locationTree } from '../../../data/schema.js'
	import { slide } from "svelte/transition";
    import Magnify from "svelte-material-icons/Magnify.svelte";

    function showSearch(){
        $ui.byPage.discover.main = 'search'
    };
    function showMap(){
        $ui.byPage.discover.main = 'map'
    };
    function showMoreRandom(){
        $ui.byPage.discover.main = 'list'
    };

    // Serach box input
    let searchInput = ''
    function handleSearch(){
        console.log('Submit search: ', searchInput)
    };

</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    {#if $ui.byPage.discover.main === 'list'}
        <div class = 'info-container'>
            <h2>Waterways projects</h2>
            <div id="search-summary-container">
                <p>There are hundreds of projects, initiatives and programs that impact and protect waterways across our catchment. 
                    A small, random selection are shown here and more details about each can be seen by simply hovering over and tapping on each card.
                </p>
            </div>    
        </div>
        <hr>
        <div class = 'search-options-container'>
            <h2>Tools for finding projects</h2>
            <p> To help you find particular projects and initiatives you might be intersted in, you can use these tools:</p>

            <ul>
                <li>
                    <div class = "button-container input">
                        <input bind:value={searchInput} type="text" id="search-term" placeholder="Try a keyword search">
                        <div id="search-button" class="input-icon" on:click={handleSearch}>
                            <Magnify width="2em" height="2em"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div class = "button-container">
                        <button on:click={showSearch}>User search filters</button>
                    </div>
                </li>
                <li>
                    <div class = "button-container">
                        <button on:click={showMap}>View projects on a map</button>
                    </div>
                </li>
                <li>
                    <div class = "button-container">
                        <button on:click={showMoreRandom}>Show me more projects</button>
                    </div>
                </li>
            </ul>
        </div>
    {:else if  $ui.byPage.discover.main === 'search'}
        <div class = 'info-container'>
            <h2>Filter projects</h2>
            <div>
                <p>These filters can you find projects and initiaves that you're most interested in. 
                    More guidance TBA as the UI is developed
                </p>
            </div>
        </div>
    {:else if  $ui.byPage.discover.main === 'map'}
        <div class = 'info-container'>
            <h2>Mapping projects</h2>
            <div>
                <p>This map helps to view where certain projects are occuring. More guidance TBA as the UI is developed.                     
                </p>
                <p>A separate interface or view to show projects not bound to a specific location is also required.
                    A 'map' interface may end up not being particularly useful (and argubly overlaps with other tools), but might still be a very useful platform for visualisations
                </p>
            </div>
        </div>
    {/if}
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area: info;    
        background: rgb(238, 238, 238);
        padding: 1rem;
        max-width: 100%;
        min-height: 85vh;
    }
    h3{ 
        margin-block-start: 0;
        margin-block-end: 0;
    }
    ul{
        list-style-type: none;
        border: 0;
        margin: 0;
        margin-block-start: 0  ;
        margin-block-end: 0  ;
        padding-inline-start: 0;
    }
    #search-term{
        margin-bottom: 0.75rem;
    }

    #search-term,
    .button-container button{
        cursor:         pointer;
        width:          100%;
        padding:        0.75rem 0.5rem;
        margin-bottom:  0.75rem;
        text-align:     left;
    }

    .button-container.input{
        width: 100%;
        position: relative;
        display: flex;
    }


    hr{
        margin: 2.5rem 0;
    }
    button{
        color: #333;
    }
    button:hover{
        background-color:#fff;
        font-weight: 500;
    }

    .input-icon{
        display:    flex;
        position:   absolute;
        right:      2.5%;
        top:        12.5%;
        cursor:     pointer;
    }
    .input-icon:hover{
        color: rgb(181, 15, 181);
    }
</style>