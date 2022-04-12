<!-- PROJECT DETAIL COMPONENT-->
<script>
	import { fade }             from 'svelte/transition';
    import TitleBlock           from './stakeholderPage/TitleBlock.svelte'
    import InfoPane             from './stakeholderPage/Infopane.svelte'
    import UserActions          from './stakeholderPage/UserAction.svelte'
    import StakeholderContent   from './stakeholderPage/StakeholderContent.svelte'
    import StakeholderImage     from './stakeholderPage/StakeholderImage.svelte'
    import ProjectFeedback      from './stakeholderPage/ProjectFeedback.svelte'
    import OtherProjects        from './stakeholderPage/OtherProjects.svelte'
</script>


<!-- COMPONENT HTML MARKUP-->
<section in:fade>
    <TitleBlock/>
    <InfoPane/>
    <StakeholderContent/>
    <StakeholderImage/>
    <OtherProjects/>
</section>

<!------ STYLE ------->
<style>
    section{
        grid-area: 1 / 1 / 3 / 3 ;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, auto);
        column-gap: 10vw;
        row-gap: 2.5vw;
    }
</style>