<!-- PROJECT LIST-->
<script>
	import { fade, fly } 	        from 'svelte/transition';
    import StakeholderListHeader    from './StakeholderListHeader.svelte'
    import StakeholderCard          from './StakeholderCard.svelte'
    import StakeholderNetwork       from './StakeholderNetwork.svelte'
    import { ui }                   from '../../../data/stores.js'
    import { app }                  from '../../../data/realm.js'

    // Random stakeholder selection if no search 
    let stakeholders

    async function getStakeholderData(){
        if($ui.search.criteria.organisation){
            stakeholders = $ui.search.results.organisation
            // stakeholders = $ui.search.results.organisation.slice(0, 9) 
        } else {
            stakeholders =  await app.data.collections.organisations.aggregate([
                { $sample : { size: 9 }  },
            ])
        }
    };

    const promise = getStakeholderData()
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
        {#if $ui.search.results.organisation.length > 9}
        <div class = "page-selector-container">Page selector for more results TBA</div>
        {/if}
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
    .page-selector-container{
        display:                flex;
        justify-content:        flex-end;
        padding:                0.5rem 0;
        font-weight:            600;
        font-size:              0.8rem;
    }
</style>