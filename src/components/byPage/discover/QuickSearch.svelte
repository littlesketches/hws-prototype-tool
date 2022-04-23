<!-- COMPONENT TO HANDLE QUICK SEARCH BOX -->
<script>
    import QuickSearch from './QuickSearch.svelte'
    import { ui }       from '../../../data/stores.js'
    import Magnify      from "svelte-material-icons/Magnify.svelte";

    /* Search by project name */
    let searchInput = ''
    function handleSearch(){
        console.log('Submit search: ', searchInput)
        window.scrollTo({top: 0, behavior: 'smooth'});

        if($ui.infoModal.showNotes && componentContent.messageModal.projectSearch){
            $ui.infoModal.message = {
                buttons:        [{ text: 'Ok, got it!', function:  'close', }],
                header:         `&#9888; Project search is not yet wired up..`,
                content:         componentContent.messageModal.projectSearch
            }
            componentContent.messageModal.projectSearch = null
        }
    };
</script>


<!-- COMPONENT HTML MARKUP-->
<input id="search-term" bind:value={searchInput} type="text" 
    placeholder="Search project name">
<div id="search-button" class="input-icon" on:click={handleSearch}>
    <Magnify width="2em" height="2em"/>
</div>


<!------ STYLE ------->
<style> 
    input{
	border: 1px solid #000;
    }
    #search-term{
        width:          100%;
        padding:        1rem 3rem 1rem 0.5rem;
        font-weight:    300;
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