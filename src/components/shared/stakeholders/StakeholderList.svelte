<!-- PROJECT LIST-->
<script>
	import { fade, fly } 	        from 'svelte/transition';
    import StakeholderListHeader    from './StakeholderListHeader.svelte'
    import StakeholderCard          from './StakeholderCard.svelte'
    import StakeholderNetwork       from './StakeholderNetwork.svelte'
    import { ui }                   from '../../../data/stores.js'
    import { app }                  from '../../../data/realm.js'


    // Random project selection if no search  ****TO BE UPDGRADED
    let stakeholders
    async function getStakeholderData(){
        const orgDatabase  = await app.data.collections.organisations.find({})
        const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)        
        stakeholders =  $ui.search.results.organisation.length > 0 ? $ui.search.results.organisation :  shuffleArray(orgDatabase.slice(0, 6))
    };

    let promise = getStakeholderData()
</script>

<!-- COMPONENT HTML MARKUP-->
{#await promise then value}
<section  in:fly="{{x: 500, duration: 1000, delay: 500}}">   
    <StakeholderListHeader/> 
    {#if $ui.byPage.connect.stakeholderView === 'cards'}
    <ul>
        {#each stakeholders as stakeholderData, index}
        <StakeholderCard  {stakeholderData} {index}/>
        {/each}
    </ul>
    {:else}
        <StakeholderNetwork/> 
    {/if}    
</section>
{/await}

<!------ STYLE ------->
<style>
    section{
        grid-area:              main;
    }
    ul{
        display:                grid;
        grid-template-columns:  repeat(3, 1fr);
        width:                  100%;
        column-gap:             2.5vw;        
        row-gap:                2.5vw;   
        list-style-type:        none;
        border:                 0;
        margin:                 0;
        margin-block-start:     0;
        margin-block-end:       0;
        padding-inline-start:   0;
    }
</style>