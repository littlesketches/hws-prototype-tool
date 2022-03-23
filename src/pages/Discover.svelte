<!-- EXPLORE PAGE COMPONENT-->
<script>
    import TitleBlock from '../components/TitleBlock.svelte'
    import ProjectSearch from '../components/ProjectSearch.svelte'
    import ProjectList from '../components/ProjectList.svelte'

	export let transition
</script>

<!-- COMPONENT MARKUP-->
<section {transition}>
    <TitleBlock/>
    <ProjectSearch/>
    <ProjectList/>
</section>

<!------ STYLE ------->
<style>
    section{
        display:                grid;
        grid-template-columns:  1fr 2fr;
        column-gap:             2.5vw;
        row-gap:                2.5vw;
        grid-template-areas: 
            "title title"
            "search projects"
        ;
        min-height:             100vh;
        padding:                5vw;
    }
</style>