<!-- PROJECT LIST-->
<script>
    import ListViewSwitch       from './ListViewSwitch.svelte'
    import StakeholderCard      from './StakeholderCard.svelte'
    import StakeholderNetwork   from './StakeholderNetwork.svelte'
    import { ui }               from '../../../data/stores.js'
    import { organisationData } from '../../../data/content.js'

    // Random stakeholder selection
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

    const randStakeholderNumber =  getRandomInt(4, 9)  
    const stakeholders = shuffleArray(organisationData.slice(0, randStakeholderNumber))

</script>

<!-- COMPONENT HTML MARKUP-->
<section>   
    <ListViewSwitch/> 
    {#if $ui.byPage.connect.stakeholderView === 'cards'}
    <ul>
        {#each stakeholders as stakeholder}
        <StakeholderCard {...stakeholder} />
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