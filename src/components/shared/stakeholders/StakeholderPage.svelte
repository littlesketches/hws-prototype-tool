<!-- PROJECT DETAIL COMPONENT-->
<script>
	import { fade }             from 'svelte/transition';
    import TitleBlock           from './stakeholderPage/TitleBlock.svelte'
    import InfoPane             from './stakeholderPage/Infopane.svelte'
    import StakeholderContent   from './stakeholderPage/StakeholderContent.svelte'
    import StakeholderImage     from './stakeholderPage/StakeholderImage.svelte'
    import OtherProjects        from './stakeholderPage/OtherProjects.svelte'
    import { app }              from '../../../data/realm.js'
	import { ui }               from '../../../data/stores.js'	 

    let leadProjects, partnerProjects, leadCatchments
    async function getProjects(){
        leadProjects =  await app.data.collections.projects.find({"leadOrg":  $ui.state.focus.stakeholderData.name  })
        partnerProjects =  await app.data.collections.projects.find({"partnerOrgs":  $ui.state.focus.stakeholderData.name  })
        leadProjects = leadProjects.slice(0,3)
        leadCatchments  = [...new Set(leadProjects.map(d => d.location.catchments).flat())]
        console.log(leadProjects)
        return leadProjects
    };

    getProjects()
</script>


<!-- COMPONENT HTML MARKUP-->
<!-- {#await promise } -->
<section id = 'stakeholder-overlay' in:fade="{{x: 500, duration: 1000}}" out:fade="{{duration: 0}}">
    <TitleBlock/> 
    <InfoPane {leadProjects}  {leadCatchments} />
    <StakeholderContent {leadProjects} />
    <StakeholderImage/>
    <OtherProjects {leadProjects} {partnerProjects} />
</section>
<!-- {/await} -->

<!------ STYLE ------->
<style>
    section{
        grid-area:              1 / 1 / 3 / 3 ;
        display:                grid;
        grid-template-columns:  repeat(2, 1fr);
        grid-template-rows:     repeat(6, auto);
        column-gap:             10vw;
        row-gap:                2.5vw;
    }

</style>