<!-- PROJECT DETAIL COMPONENT-->
<script>
	import { onMount } from 'svelte';
	import { fade }          from 'svelte/transition'
    import TitleBlock       from './projectPage/TitleBlock.svelte'
    import InfoPane         from './projectPage/Infopane.svelte'
    import UserActions      from './projectPage/UserAction.svelte'
    import ProjectContent   from './projectPage/ProjectContent.svelte'
    import ProjectImage     from './projectPage/ProjectImage.svelte'
    import ProjectFeedback  from './projectPage/ProjectFeedback.svelte'
    import SimilarProjects  from './projectPage/SimilarProjects.svelte'
    import { ui }                   from '../../../data/stores'
</script>

<!-- COMPONENT HTML MARKUP-->
<section id = "project-overlay" class = {$ui.page} in:fade="{{x: 500, duration: 1000}}" out:fade="{{duration: 0}}" >
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
        grid-area:              1 / 1 / 8 / 3 ;
        display:                grid;
        grid-template-columns:  repeat(2, 1fr);
        grid-template-rows:     repeat(6, auto);
        column-gap:             10vw;
        row-gap:                2.5vw;
        z-index:                10;
        background:             #fff;
    }
    section.discover,
    section.connect{
        grid-area:              1 / 1 / 8 / 3 ;
    }
    section.manage{
        grid-area:              1 / 1 / 8 / 2 ;
    }
    section.share{
        grid-area:              1 / 1 / 8 / 4 ;
    }

</style>