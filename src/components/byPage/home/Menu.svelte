<script>
    import MenuCard                 from './MenuCard.svelte'
	import { fade }                 from 'svelte/transition';
    import { app, deleteAllUsers }  from '../../../data/realm.js';
    import { getMenuOptions }       from '../../../data/content.js'
    import { user, ui }             from '../../../data/stores.js'
    import { slugify }              from '../../../utils/helpers.js'

    $ui.items.pages = getMenuOptions($user)
</script>

<!------ COMPONENT MARKUP ------->
<section>
    {#if $user.isRegistered}
        <h3 class = 'user-label' in:fade="{{duration: 1500, delay: 1500}}">Hello {$user.details.firstName} {$user.details.lastName}! </h3>
    {/if}
    <div class ='menu-container'>
        {#each $ui.items.pages as pageData, index (slugify(pageData.name))}
        <MenuCard {pageData} {index}/>
        {/each}
    </div>

</section>


<!------ STYLE ------->
<style>

    section{
        grid-area:          6 / 1 / 10 / 11 ;      
        z-index:            7;
    }
    h3{
        font-size:          2vw;
        color:              #fff;
        text-transform:     lowercase;
    }
    h3.user-label{
        color:              rgb(0, 53, 49);
        font-weight:        700;
        font-size:          1.5rem;
        margin-top:         -3rem;
    }
    .menu-container{
        width:              100%;
        display:            flex;
        justify-content:    center;
    }

</style>