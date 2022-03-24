<!-- MASTER NAVIGATION COMPONENT: ICONS AND MODAL MENU-->
<!-- SCRIPT -->
<script>
	import ModalMenu from './ModalMenu.svelte';
	import { fade } from 'svelte/transition';
	import { user, ui } from '../data/stores.js'

	/* Interaction functions */
	function toggleMenu() {
    $ui.showMenuModal = !$ui.showMenuModal
	};

</script>


<!---- COMPONENT MARKUP HTML ---->
  <!-- 1. Navigation menu -->
  {#if $ui.showNav}
    <nav class ='nav-menu' transition:fade>
      <div class = "menuButton-container">
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
      </div>
    </nav>
  {/if}

  <!-- 2. Modal menu -->
  {#if $ui.showMenuModal}
    <ModalMenu/>
  {/if}


<!---- CSS STYLING ---->
<style>
  /* "BORDER" UI navigation options */
  nav.nav-menu {
    display: grid;
    grid-template-columns: 7.5vh repeat(5, 1fr) 7.5vh;
    grid-template-rows: 7.5vh 1fr 7.5vh;
    position: fixed;
    top:    0;
    left:   0;
    width:  100vw;
    height: 100vh;
    z-index: 100;
    pointer-events: none;
  }
  .home-container,
  .menuButton-container {
      display:        flex;
      justify-items:  center;
      align-items:    center;
      text-align:     center;
  }
  .menuButton-container {
      grid-area:      1 / 7 / 2 / 8;
      padding:        1rem 1rem 0rem 0rem;
  }
  .home-container{
      grid-area:      1 / 1 / 2 / 1;
      padding:        1rem 0rem 0rem 1rem;
  }

  /* Navigation icon styling */
  .nav-icon {
    cursor:     pointer;
    pointer-events: bounding-box;
  }
  .nav-icon circle{
    fill:         none;
    stroke:     #333;
    stroke-width: 1px;
  }
  .nav-icon text{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    fill:        #333;
    font-size:    13.5px;
    text-anchor:  middle;
    text-transform: uppercase;
  }
  .nav-icon.invert circle{
    stroke:     #fff;
  }
  .nav-icon.invert text{
    fill:     #fff;
  }

</style>