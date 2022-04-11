<!-- PROJECT DETAIL COMPONENT-->
<script>
	import { fade }         from 'svelte/transition'

    import TitleBlock       from './projectPage/TitleBlock.svelte'
    import InfoPane         from './projectPage/Infopane.svelte'
    import UserActions      from './projectPage/UserActIon.svelte'
    import ProjectContent   from './projectPage/ProjectContent.svelte'
    import ProjectImage     from './projectPage/ProjectImage.svelte'
    import ProjectFeedback     from './projectPage/ProjectFeedback.svelte'
    import SimilarProjects     from './projectPage/SimilarProjects.svelte'

</script>

<!-- COMPONENT HTML MARKUP-->
<section transition:fade>
    <TitleBlock/>
    <InfoPane/>
    <UserActions/>
    <ProjectContent/>
    <ProjectImage/>
    <ProjectFeedback/>
    <SimilarProjects/>
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