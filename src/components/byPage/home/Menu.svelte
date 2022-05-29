<script>
    import MenuCard                 from './MenuCard.svelte'
	import { fade }                 from 'svelte/transition';
    import { app }                  from '../../../data/realm.js';
    import { user, ui }             from '../../../data/stores.js'
    import { slugify }              from '../../../utils/helpers.js'
    import { getMenuOptions, componentContent }       from '../../../data/content.js'

    $ui.items.pages = getMenuOptions($user)
</script>

<!------ COMPONENT MARKUP ------->
<section>
    {#if $user.isRegistered}
        <h3 in:fade="{{duration: 1500, delay: 1500}}">Hello {$user.details.firstName} {$user.details.lastName}! </h3>
    {:else}
        <h3 class = 'tagline' in:fade="{{duration: 1500, delay: 1500}}">{@html componentContent.title.tagline} </h3>
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
        grid-area:          5 / 1 / 10 / 11 ;      
        z-index:            7;
    }
    h3{
        font-size:          2vw;
        text-transform:     lowercase;
        color:              rgb(0, 53, 49);
        text-shadow:        #fff 0.125vw 0.125vw 0.25vw,
                            #fff -0.125vw -0.125vw 0.25vw;
        font-weight:        700;
    }
    .tagline{
        padding:            0 30vw;
    }
    .menu-container{
        width:              100%;
        display:            flex;
        justify-content:    center;
    }
</style>