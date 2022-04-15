<!-- PROJECT PAGE CONTENT PANE-->
<script>
    import { ui }       from '../../../../data/stores.js'
	import { slide }    from 'svelte/transition'
    import HWS_tags     from '../../misc/HWS_tags.svelte'
    import HWS_boxes    from '../../misc/HWS_boxes.svelte'
    import ProjectSources     from './ProjectSources.svelte'
    import ProjectLearnings  from './ProjectLearnings.svelte'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData

    // HWS Key Values and conditions data
    $: themesData = {
        name:           "&#8212; Themes",
        array:          projectData.hws.poTheme
    }
    $: keyValuesData = {
        name:           "&#8212; Values",
        schemaName:     "keyValues",
        array:          projectData.hws.values
    }
    $: conditionsData = {
        name:           "&#8212; Conditions",
        schemaName:     "conditions",
        array:          projectData.hws.conditions
    }

    // Slideable pane visibility
    const visibility = {
        hwsDetails:         false,
        aboutDetails:       false,
        learningsDetails:  false,
        sourcesDetails:     false
    }
    // Pane toggle labels
    $: aboutLabel = !visibility.aboutDetails ? 'Show more project details' : 'Hide project details' 
    $: hwsLabel = !visibility.hwsDetails ? 'Show more impact details' : 'Hide impact details' 
    $: learningsLabel = !visibility.learnings ? 'Show learnings' : 'Hide learnings details' 
    $: sourcesLabel = !visibility.sourcesDetails ? 'Show more sources details' : 'Hide sources details' 

    function togglePane(){
        visibility[this.id] = !visibility[this.id]
        console.log(`Toggling ${this.id}  to `, visibility[this.id])
    };
</script>

<!-- COMPONENT HTML MARKUP-->
<section class = 'content-pane'>
    <!-- HWS IMPACT SECTION-->
    <div class = 'short-desc'>
        {@html projectData.about.shortDescription}  
    </div>
    {#if visibility.aboutDetails }
        <div transition:slide="{{duration: 1200}}">
            <h3>&#8212;&#8212; Project details</h3>
            {@html projectData.about.longDescription}

            {#if projectData.about.history}
                <h3 class ='margin-top'>&#8212;&#8212; Project history</h3>
                {@html projectData.about.history}
            {/if}
        </div>
    {/if}
    <div class = "collapse__body"  transition:slide>
        <div id = "aboutDetails" class="collapse__header" type="button" 
            class:selected="{visibility.aboutDetails}" on:click={togglePane}>
            <div class="toggle-label">{@html aboutLabel}</div>
            <div class="toggle-icon down">&#8595;</div>
        </div>
    </div>

    <hr>

    <!-- HWS IMPACT SECTION-->
    <h3>&mdash;&mdash;&mdash; Waterways impact</h3>
    <p>Every waterways project can be categorised by the waterways themes, key values an conditions which they impact.</p>
    <HWS_tags data={themesData}/>
    <HWS_boxes data={keyValuesData}/>
    {#if visibility.hwsDetails }
        <HWS_boxes data={conditionsData}/>
    {/if}
    <div class = "collapse__body"  transition:slide>
        <div id = "hwsDetails" class="collapse__header" type="button" 
            class:selected="{visibility.hwsDetails}" on:click={togglePane}>
            <div class="toggle-label">{@html hwsLabel}</div>
            <div class="toggle-icon down">&#8595;</div>
        </div>
    </div>
    <hr>

    <!-- PROJECT LEARNINGS -->
    {#if (Object.values(projectData.lessons).flat().length > 0)}
        <h3>&mdash;&mdash;&mdash; Project learnings</h3>
        <p>The follow project notes are provided by {@html projectData.stakeholders.lead.org} to help document key lessons from this project.</p>
        {#if visibility.learningsDetails }
        <ProjectLearnings/>
        {/if}
        <div class = "collapse__body"  transition:slide>
            <div id = "learningsDetails" class="collapse__header" type="button" 
                class:selected="{visibility.learnings}" on:click={togglePane}>
                <div class="toggle-label">{@html learningsLabel}</div>
                <div class="toggle-icon down">&#8595;</div>
            </div>
        </div>
        <hr>
    {/if}

    <!-- MORE INFO AND SOURCES-->
    <h3>&mdash;&mdash;&mdash; Where to find more information</h3>
    <p>Project information was provided from {@html projectData.stakeholders.lead.org} in {@html projectData.status.dates.lastUpdate} .</p>
    {#if visibility.sourcesDetails }
    <ProjectSources/>
    {/if}
    <div class = "collapse__body"  transition:slide>
        <div id = "sourcesDetails" class="collapse__header" type="button" 
            class:selected="{visibility.sourcesDetails}" on:click={togglePane}>
            <div class="toggle-label">{@html sourcesLabel}</div>
            <div class="toggle-icon down">&#8595;</div>
        </div>
    </div>
    <hr>

</section>


<!------ STYLE ------->
<style>
    section{
        grid-area:  2 / 1 / 6 / 2; 
        padding: 0 1rem;
    }
    h3.margin-top{
        margin-top: 3rem;
    }
    .short-desc{
        padding-bottom:     0.5rem;
    }
    .short-desc p{
        margin-block-start: 0;
    }
    /* COLLAPSIBLE PANE STYLING */
	.collapse__header {
        display:            flex;
        justify-content:    right;
	    transition:         background 200ms ease-in-out;
        cursor:             pointer;
	}
    .collapse__header p{
        line-height: 1;
    }
    .collapse__header .toggle-icon{
	    transition: all 200ms ease-in-out;
    }
    .toggle-label{
        margin-right: 1rem;
        font-size: 0.75rem;
        font-weight: 300;
    }
    .selected .toggle-icon{
        transform: rotate(180deg);
    }

	.collapse__header:hover {
        font-weight: 600;
	}
	.collapse__body {
	    padding: 0rem 0;
        display: grid;
	}


</style>