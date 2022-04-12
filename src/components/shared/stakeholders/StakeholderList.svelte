<!-- PROJECT LIST-->
<script>
    import StakeholderListHeader    from './StakeholderListHeader.svelte'
    import StakeholderCard          from './StakeholderCard.svelte'
    import StakeholderNetwork       from './StakeholderNetwork.svelte'
    import { ui }                   from '../../../data/stores.js'
    import { database }             from '../../../data/dataStores.js'
    import { organisationData }     from '../../../data/content.js'

    // Random stakeholder selection
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
    const orgDatabase = $database.organisations
    const randStakeholderNumber =  6
    const stakeholders = shuffleArray(orgDatabase.slice(0, randStakeholderNumber))

</script>

<!-- COMPONENT HTML MARKUP-->
<section>   
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

<!------ STYLE ------->
<style>
    section{
        grid-template-areas:    main;
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
    h3{
        margin-block-start: 0;
    }
</style>