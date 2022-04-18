<!-- PROJECT DETAIL COMPONENT-->
<script>
	import { fly, fade }          from 'svelte/transition'
    import TitleBlock       from './projectPage/TitleBlock.svelte'
    import InfoPane         from './projectPage/Infopane.svelte'
    import UserActions      from './projectPage/UserAction.svelte'
    import ProjectContent   from './projectPage/ProjectContent.svelte'
    import ProjectImage     from './projectPage/ProjectImage.svelte'
    import ProjectFeedback  from './projectPage/ProjectFeedback.svelte'
    import SimilarProjects  from './projectPage/SimilarProjects.svelte'

</script>

<!-- COMPONENT HTML MARKUP-->
<section id = "project-overlay" in:fly="{{x: 500, duration: 1000}}" out:fade="{{duration: 200}}" >
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
        grid-area: 1 / 1 / 3 / 4 ;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, auto);
        column-gap: 10vw;
        row-gap: 2.5vw;
        z-index: 10;
        background: #fff;
    }
</style>