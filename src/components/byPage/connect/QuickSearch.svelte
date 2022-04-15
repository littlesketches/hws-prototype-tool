<!-- COMPONENT TO HANDLE QUICK SEARCH BOX -->
<script>
    import QuickSearch  from './QuickSearch.svelte'
    import { ui }       from '../../../data/stores.js'
    import Magnify      from "svelte-material-icons/Magnify.svelte";

    /* Search by project name */
    let searchInput = ''
    function handleSearch(){
        console.log('Submit search: ', searchInput)
        $ui.byPage.discover.connectSearch.isMade = true
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<input id="search-term" bind:value={searchInput} type="text" 
    placeholder="Search project name by keyword">
<div id="search-button" class="input-icon" on:click={handleSearch}>
    <Magnify width="2em" height="2em"/>
</div>



<!------ STYLE ------->
<style> 
    #search-term{
        width:          100%;
        padding:        1rem 3rem 1rem 0.25rem;
        font-size:      0.75rem;
    }
    input{
        width: 100%

    }
    .input-icon{
        display:        flex;
        position:       absolute;
        right:          2.5%;
        height:         100%;
        cursor:         pointer;
        align-items:    center;

    }
    .input-icon:hover{
        color: rgb(181, 15, 181);
    }
</style>