<!-- MASTER NAVIGATION COMPONENT: ICONS AND MODAL MENU-->
<script>
	import ModalMenu      from './ModalMenu.svelte';
	import { fade, fly }  from 'svelte/transition';
	import { user, ui }   from '../../data/stores.js'

	/* Interaction functions */
	function toggleMenu() {
    $ui.showMenuModal = !$ui.showMenuModal
	};

	function closeModalPage() {
    $ui.byPage.discover.overlay = false
    $ui.byPage.connect.overlay = false
    $ui.byPage.share.overlay = false
    $ui.byPage.manage.overlay = false

    // Hack to remove components that dont' destroy when changing page state the store
    if(document.getElementById('new-project')) document.getElementById('new-project').remove()
    if(document.getElementById('project-page')) document.getElementById('project-page').remove()

	};

  function showHelpOption(){
    console.log('Show help')
    document.getElementById('helpButton').classList.add('inactive')
  };
  function hideHelpOption(){
    document.getElementById('helpButton').classList.remove('inactive')
  };

  function openHelpModal(){


  };

</script>


<!---- COMPONENT MARKUP HTML ---->
<!-- 1. Navigation menu -->
{#if $ui.showNav}
  <nav transition:fade>
    <div class = "helpButton-container" >
      <div id="helpButton" on:mouseover={showHelpOption} on:focus={showHelpOption}>

      </div>
    </div>

    <div class = "menuButton-container">
      {#if !$ui.byPage.discover.overlay && !$ui.byPage.connect.overlay && !$ui.byPage.share.overlay  }     
        <svg id = "menu-icon" class ="nav-icon" width = "100%" viewbox = "0 0 50 50"
          on:click={toggleMenu} class:invert={$ui.showMenuModal} >
          <a href="#">
            <circle cx = 25 cy = 25 r = 22.5></circle>         
              {#if !$ui.showMenuModal}
              <text x= 25 y= 30>Menu</text>
              {:else}
              <text x= 25 y= 30>Close</text>
              {/if}
          </a>
        </svg>
      {:else}
        <svg id = "menu-icon" class ="nav-icon" width = "100%" viewbox = "0 0 50 50"
          on:click={closeModalPage} >
          <a href="#">
            <circle cx = 25 cy = 25 r = 22.5></circle>         
            <text x= 25 y= 30>Close</text>
          </a>
        </svg>
      {/if}
    </div>
  </nav>
{/if}

<!-- 2. Modal menu or help -->
{#if $ui.showMenuModal}
  <ModalMenu/>
{/if}




<!---- CSS STYLING ---->
<style>
  /* "BORDER" UI navigation options */
  nav{
    display: grid;
    grid-template-columns: 7.5vh 1fr 7.5vh;
    grid-template-rows: 7.5vh 1fr 7.5vh;
    position:     fixed;
    top:          0;
    left:         0;
    width:        100vw;
    height:       100vh;
    z-index:      500;
    pointer-events: none;
  }
  .menuButton-container {
      grid-area:      1 / 3 / 2 / 4;
      padding:        8px;
  }
  .helpButton-container {
      grid-area:      1 / 1 / 2 / 1;
      pointer-events: all;
  }
  /* Navigation icon styling */
  .nav-icon {
    cursor:           pointer;
    pointer-events:   bounding-box;
  }
  .nav-icon circle{
    fill:             none;
    stroke:           var(--darkGrey);
    stroke-width:     1px;
  }
  .nav-icon text{
    font-family:      'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    fill:             var(--darkGrey);
    font-size:        13.5px;
    text-anchor:      middle;
    text-transform:   uppercase;
  }
  .nav-icon.invert circle{
    stroke:       #fff;
  }
  .nav-icon.invert text{
    fill:         #fff;
  }

  /* Help button */
  #helpButton{
    position:     relative;
    top:          0;
    left:         0;
    opacity:      0;
    height:       12.5vw;
    width:        12.5vw; 
    clip-path:    polygon(0 0, 100% 0, 0 100%);
    background-color: rgb(0, 255, 183);
    cursor:       pointer;
    transition:   200ms all;
    transform:    translate(-2.5vw, -2.5vw)
  }
  #helpButton:hover{
    opacity:      1;
    transform:    translate(0, 0)
  }


</style>