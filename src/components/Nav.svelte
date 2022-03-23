<!-- NAVIGATION COMPONET: ICONS AND MODAL MENU-->
<!-- SCRIPT -->
<script>
	import { fade } from 'svelte/transition';
	import { user, ui } from '../data/stores.js'

	/* Interaction functions */
	function toggleMenu() {
    $ui.showMenuModal = !$ui.showMenuModal
	};

  function switchPage(){
    $ui.page = this.getAttribute('name').toLowerCase()
    $ui.showMenuModal = false
    $ui.showNav = $ui.page !== 'home' ? true : false
    console.log('Now showing ', $ui.page)
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
    <section class ='modal-menu' transition:fade>
      <div class = 'modal-menu-container'>
        <div class = 'modal-menu-title'>navigate: jump to different sections</div>
        <ul >
          <li name = 'home' on:click={switchPage}>
            <div class = 'menu-title'>Home</div>
            <div class = 'menu-shortDesc'>Return the tool's home page</div>
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



/* FULL SCREEN MENU UI: Options */
section.modal-menu{
  position:   fixed;
  top:        0;
  left:       0;
  z-index:    20;
  display:    grid;
  width:      100vw;
  height:     100vh;
  background: rgba(0, 0, 0, 0.9)
}
.modal-menu-title,
.modal-menu-container{
  color:    #fff;
  margin:     1rem 7.5vh;
}
.modal-menu-title{
  font-size:    2rem;
  font-weight:  100;
  margin:       7.5vh 0 0;
  border-bottom: none;
}
.modal-menu-container ul{
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
.modal-menu-container li{
  list-style-type: none;
  cursor:   pointer;
  padding:  2rem 0;
  display:  block;
  width: 100%;
}
.modal-menu-container li:not(:first-child){
  border-top: 1px #fff solid;
}
.modal-menu-container li:hover{
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