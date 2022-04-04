<!-- DISCOVER PAGE COMPONENT-->
<script>
    // import MultiSelector  from '../../shared/MultiSelector.svelte'
	import MultiSelect    from '../../shared/MultiSelect.svelte';
    import { ui }         from '../../../data/stores.js'
	import { slugify, capitaliseFirst } from '../../../utils/helpers.js'
    import { hwsSchema, projectSchema, locationMap, locationTree } from '../../../data/schema.js'
    import { organisationData } from '../../../data/content.js'
	import { slide }      from "svelte/transition";

    ////// COLLAPSIBLE SEARCH PANES ////
	const paneVisbility= {
        byOutcomes:             false,
        byLocation:             false,
        byCharacteristics:      false,
        byStakeholders:         false
    }

    function togglePane(){
        Object.keys(paneVisbility).map( key => {
            if(this.id !== key){
                paneVisbility[key] = false
            }
        })
        paneVisbility[this.id] = ! paneVisbility[this.id]
        console.log(`Toggling ${this.id} vis to `, paneVisbility[this.id])
    };

    function handleSubmit(){
        $ui.byPage.connect.main = 'list'
        $ui.byPage.connect.stakeholderSearch.isMade = true
        console.log($ui.search)
    };

    function handleClose(){
        $ui.byPage.connect.main = 'list'
    };


    // DATA FOR MULTI-SELECT COMPONENTS
    // Waterways outcomes 
    const keyValues = {
        label:      'by key values',
        name:       'keyValues',
        list:       Object.keys(hwsSchema.keyValues),
        searchObj:  $ui.search.organisation.keyValues,
        placeholder:    'Use this field to select waterway key values'
    }
    const conditions = {
        label:      'by waterway conditions',
        name:       'conditions',
        list:       Object.keys(hwsSchema.conditions),
        searchObj:  $ui.search.organisation.conditions,
        placeholder:    'Use this field to select waterway conditions'

    }
    const performanceObjectives = {
        label:      'by performance objectives',
        name:       'performanceObjectives',
        list:       Object.keys(hwsSchema.performanceObjectives),
        searchObj:  $ui.search.organisation.pos,
        placeholder:    'Use this field to select performance objectives'

    }

    // Project location
    const catchments = {
        label:      'by catchments',
        name:       'catchment',
        list:       [...locationTree.entries()].map(d => d[0]),
        searchObj:  $ui.search.organisation.cathments,
        placeholder:    'Use this field to select catchments'

    }
    const subcatchments = {
        label:          'by subcatchments',
        name:           'subcatchment',
        list:           [].concat(...
                            [...locationTree.entries()]
                                .map(d => [...d[1]].map(d => d[0])) 
                        ),
        searchObj:      $ui.search.organisation.subcatchments,
        placeholder:    'Use this field to select subcatchments'

    }
    const locations = {
        label:          'by location',
        name:           'location',
        list:           [].concat(...
                            [...locationTree.entries()]
                                .map(d => [...d[1]].map(d => d[0])) 
                        ),
        searchObj:      $ui.search.organisation.location,
        placeholder:    'Use this field to select locations'
    }

    // Project characterships
    const initiativeType = {
        label:          'Type',
        name:           'initiativeType',
        list:           projectSchema.initiativeType,
        searchObj:      $ui.search.organisation.initiativeType,
        placeholder:    'Use this field to select initiative type(s)'
    }
    const projectStage = {
        label:          'Stage',
        name:           'projectStage',
        list:           projectSchema.stage,
        searchObj:      $ui.search.organisation.projectStage,
        placeholder:    'Use this field to select initiative project(s)'
    }
    const projectClass = {
        label:          'Class',
        name:           'projectClass',
        list:           projectSchema.class,
        searchObj:      $ui.search.organisation.projectClass,
        placeholder:    'Use this field to select project class(es)'
    }
    const projectSize = {
        label:          'Size',
        name:           'projectSize',
        list:           projectSchema.size,
        searchObj:      $ui.search.organisation.projectSize,
        placeholder:    'Use this field to select project size to filter for'
    }
    const projectScale = {
        label:          'Scale',
        name:           'projectScale',
        list:           projectSchema.class,
        placeholder:    'Use this field to select project scale to filter for'
    }

    // Project stakeholders
    const organisation = {
        label:          'Organisation name',
        name:           'organisation',
        list:           organisationData.map( d => d.name).sort(),
        placeholder:    'Use this field to select the name of organisation'
    }
</script>


<!-- COMPONENT MARKUP-->
<section>
    <div class='close-container'>
        <div on:click={handleClose} class='close-button'>
            &#8592; Close search filter
        </div>
    </div>

    <!-- by Stakeholders -->
    <div class = "container">
        <div id = "byStakeholders" class="collapse__header" type="button" 
            class:selected="{paneVisbility.byStakeholders}" on:click={togglePane}>
            <h3>Stakeholder name</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byStakeholders}
        <div class = "collapse__body" transition:slide>
            <div class = 'multi-select-container' style="z-index:9">
                <h4>{@html organisation.label}</h4>
                <MultiSelect id = {organisation.name} bind:value={$ui.search.organisation.organisation} placeholder={organisation.placeholder} >
                    {#each organisation.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <!-- by Waterways impact -->
    <div class = "container">
        <div id = "byOutcomes" class="collapse__header" type="button" 
            class:selected="{paneVisbility.byOutcomes}" on:click={togglePane}>
            <h3>Waterway outcomes</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>

        {#if paneVisbility.byOutcomes}
        <div class = "collapse__body"  transition:slide>
            <div class = 'multi-select-container' style="z-index:20">
                <h4>{@html keyValues.label}</h4>
                <MultiSelect id={keyValues.name} bind:value={$ui.search.organisation.keyValues} placeholder={keyValues.placeholder} >
                    {#each keyValues.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container'  style="z-index:19">
                <h4>{@html conditions.label}</h4>
                <MultiSelect id={conditions.name} bind:value={$ui.search.organisation.conditions}   placeholder={conditions.placeholder} >
                    {#each conditions.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:18">
                <h4>{@html performanceObjectives.label}</h4>
                <MultiSelect id={performanceObjectives.name} bind:value={$ui.search.organisation.performanceObjectives}   placeholder={performanceObjectives.placeholder} >
                    {#each performanceObjectives.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <!-- by Project location -->
    <div class = "container">
        <div id = "byLocation" class="collapse__header" type="button" 
            class:selected="{paneVisbility.byLocation}" on:click={togglePane}>
            <h3>Location of work</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byLocation}
        <div class = "collapse__body"  transition:slide>
            <div class = 'multi-select-container' style="z-index:17">
                <h4>{@html catchments.label}</h4>
                <MultiSelect id={catchments.name} bind:value={$ui.search.organisation.catchment} placeholder={catchments.placeholder} >
                    {#each catchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:16">
                <h4>{@html subcatchments.label}</h4>
                <MultiSelect id={subcatchments.name} bind:value={$ui.search.organisation.subcatchment} placeholder={subcatchments.placeholder} >
                    {#each subcatchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:15">
                <h4>{@html locations.label}</h4>
                <MultiSelect id={locations.name} bind:value={$ui.search.organisation.locations} placeholder={locations.placeholder}>
                    {#each locations.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <!-- by Project characeristics -->
    <div class = "container">
        <div id = "byCharacteristics" class="collapse__header" type="button" 
            class:selected="{paneVisbility.byCharacteristics}" on:click={togglePane}>
            <h3>Project characteristics</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byCharacteristics}
        <div class = "collapse__body"  transition:slide>
            <div class = 'multi-select-container' style="z-index:14">
                <h4>{@html initiativeType.label}</h4>
                <MultiSelect id = {initiativeType.name} bind:value={$ui.search.organisation.initiativeType} placeholder={initiativeType.placeholder} >
                    {#each initiativeType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:13">
                <h4>{@html projectStage.label}</h4>
                <MultiSelect id = {projectStage.name} bind:value={$ui.search.organisation.projectStage} placeholder={projectStage.placeholder} >
                    {#each projectStage.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:12">
                <h4>{@html projectClass.label}</h4>
                <MultiSelect id = {projectClass.name} bind:value={$ui.search.organisation.projectClass} placeholder={projectClass.placeholder} >
                    {#each projectClass.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:11">
                <h4>{@html projectSize.label}</h4>
                <MultiSelect id = {projectSize.name} bind:value={$ui.search.organisation.projectSize} placeholder={projectSize.placeholder} >
                    {#each projectSize.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:10">
                <h4>{@html projectScale.label}</h4>
                <MultiSelect id = {projectScale.name} bind:value={$ui.search.organisation.projectScale} placeholder={projectScale.placeholder} >
                    {#each projectScale.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <div class = "button-container">
        <button on:click|preventDefault={handleSubmit}>Search for stakeholders</button>
    </div>

</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area: main;
    }
    h3, h4{ 
        margin-block-start: 0;
        margin-block-end: 0;
        padding: 0 1rem 0 0.5rem;
        line-height: 1.25;
    }
    .multi-select-container{
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: 1rem 0;
    }
    .container * {
        box-sizing: border-box;
    }
    .close-container{
        margin-bottom: 1rem;
        display: flex;        
    }
    .close-button{
        font-weight: 600;
        font-size: 0.75rem;
        cursor: pointer;
    }
    .close-button:hover{
        text-decoration: underline;
    }
    .button-container{
	    border-top: 0.75px solid grey;
        margin-top: 2rem;
    }
    button {
        margin-left: auto;
        padding: 8px 16px;
        border: none;
        background: #333;
        color: #f2f2f2;
        text-transform: uppercase;
        letter-spacing: .09em;
        border-radius: 2px;
        cursor: pointer;
        width: 100%;
    }
    button:hover{
        font-weight: 600;
    }

    /* COLLAPSIBLE PANE STYLING */
	.collapse__header {
        display: flex;
        justify-content: space-between;
	    padding: 1rem 0rem;
	    border-top: 0.75px solid grey;
	    transition: background 200ms ease-in-out;
	}
    .collapse__header .toggle-icon{
        margin-right: 1rem;
	    transition: all 200ms ease-in-out;
    }
    .selected .toggle-icon{
        transform: rotate(180deg);
    }


	.collapse__header.selected,
	.collapse__header:hover {
	    background: #333;
        color:      #fff;
	}
	.collapse__body {
	    padding: 1rem 0;
	    /* background: #f0f0f0; */
        display: grid;
	}

</style>