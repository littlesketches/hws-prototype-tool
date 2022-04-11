<!-- PROJECT PAGE CONTENT PANE-->
<script>
    import { ui }       from '../../../../data/stores.js'
	import { slide }    from 'svelte/transition'
    import HWS_tags     from './HWS_tags.svelte'
    import HWS_boxes    from './HWS_boxes.svelte'
    import Sources      from './Sources.svelte'

    const projectData = $ui.state.focus.projectData

    // HWS Key Values and conditions data
    const themesData = {
        name:           "&#8212; Themes",
        array:          projectData.hws.poTheme
    }
    const keyValuesData = {
        name:           "&#8212; Values",
        schemaName:     "keyValues",
        array:          projectData.hws.values
    }
    const conditionsData = {
        name:           "&#8212; Conditions",
        schemaName:     "conditions",
        array:          projectData.hws.conditions
    }


    const visibility = {
        hwsDetails:         false,
        aboutDetails:       false,
        sourcesDetails:     false
    }

    $: aboutLabel = !visibility.aboutDetails ? 'Show more project details' : 'Hide project details' 
    $: hwsLabel = !visibility.hwsDetails ? 'Show more impact details' : 'Hide impact details' 
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
        <p>{@html projectData.description.long}</p>   
    </div>
    {#if visibility.aboutDetails }
        <div transition:slide>
            <h3>&#8212;&#8212; Project details</h3>
            <p>{@html $ui.state.focus.projectData.description.long}</p> 
            <p>{@html $ui.state.focus.projectData.description.long}</p> 
            <p>{@html $ui.state.focus.projectData.description.long}</p> 

            <h3>&#8212;&#8212; Project history</h3>
            <p>{@html $ui.state.focus.projectData.description.long}</p> 
            <p>{@html $ui.state.focus.projectData.description.long}</p> 
            <p>{@html $ui.state.focus.projectData.description.long}</p> 
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
    <h3>&#8212;&#8212;&#8212; Waterways impact</h3>
    <p>Every waterways project can be catergorised by the waterways themes, key values an conditions which they impact.</p>
    <HWS_tags/>
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

    <!-- MORE INFO AND SOURCES-->
    <h3>&#8212;&#8212;&#8212; Where to find more information</h3>
    <p>Project information was provided from [Data provider/org] in [month-date].</p>
    {#if visibility.sourcesDetails }
    <Sources/>
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
    h3{

    }
    p{
        line-height: 1.5;
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