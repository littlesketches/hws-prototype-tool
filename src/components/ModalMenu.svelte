<!-- FULL SCREEN MODAL NAVIGATION MENU COMPONENT -->
<!-- SCRIPT -->
<script>
	import { fade } from 'svelte/transition';
	import { ui } from '../data/stores.js'

    function switchPage(){
        $ui.page = this.getAttribute('name').toLowerCase()
        $ui.showMenuModal = false
        $ui.showNav = $ui.page !== 'home' ? true : false
        console.log('Now showing ', $ui.page)
    };

</script>

<!---- COMPONENT MARKUP HTML ---->
<section class ='modal-menu' transition:fade>
     <div class = 'title-container'>
        <h1>navigate</h1>
        <!-- <p>jump to different sections</p> -->
    </div>    
     <div class = 'page-nav-container'>
        <ul >
          <li name = 'home' on:click={switchPage}>
            <div class = 'menu-title'>Home</div>
            <div class = 'menu-shortDesc'>Go back to where it all began...</div>
          </li>
          {#each $ui.items.pages as page (page.id) }
            <li name = {page.name} on:click={switchPage}>
                <div class = 'menu-title'>
                  {@html page.name} 
                </div>
                <div class = 'menu-shortDesc'>
                  {@html page.shortDesc} 
                </div> 
            </li>
          {/each}
        </ul>
    </div>
</section>



<!---- CSS STYLING ---->
<style>

    section.modal-menu{
        position:   fixed;
        top:        0;
        left:       0;
        z-index:    20;
        display:    grid;
        grid-template-columns: 1fr 2fr;
        /* column-gap: 5vw; */
        width:      100vw;
        height:     100vh;
        background: rgba(0, 0, 0, 0.9);
        color:    #fff;
    }
    .modal-menu-title,
    .page-nav-container{
        color:    #fff;
        margin:     1rem 7.5vh;
    }
    h1{
        font-weight:    700;
        font-size:      6vw;
        margin-block-start: 0;
    }
    .title-container{
        grid-area:     1 / 1 / 2 / 2;
        padding:       7.5vh;
    }
    .page-nav-container{
        grid-area: 1 / 2 / 2 / 3;
        padding:       7.5vh 0;    
    }
    .modal-menu-title{
        font-size:    2rem;
        font-weight:  100;
        margin:       7.5vh 0 0;
        border-bottom: none;
    }
    ul{
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        }
    li{
        list-style-type: none;
        cursor:   pointer;
        padding:  2rem 0;
        display:  block;
        width: 100%;
    }
    li:not(:first-child){
        border-top: 1px #fff solid;
    }
    li:first-child{
        padding-top: 0;
    }
    li:hover{
        color: aquamarine;
    }
    .menu-title{
        font-size: 2rem;
    }

    .menu-shortDesc{
        padding-top: 0.5rem;
        font-size: 1rem;
        font-weight: 100;
    }

</style>