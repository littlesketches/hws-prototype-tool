<!-- DISCOVER PAGE COMPONENT-->
<script>
	import MultiSelect    from '../../shared/MultiSelect.svelte';
    import { ui }         from '../../../data/stores.js'
    import { database }         from '../../../data/dataStores.js'
    import { hwsSchema, projectSchema, subCatchmentMap, locationMap, locationTree } from '../../../data/schema.js'
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
            if(this.id !== key){ paneVisbility[key] = false }
        })
        paneVisbility[this.id] = ! paneVisbility[this.id]
        console.log(`Toggling ${this.id} vis to `, paneVisbility[this.id])
    };

    function handleSubmit(){
        $ui.byPage.discover.main = 'list'
        $ui.byPage.discover.projectSearch.isMade = true
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log($ui.search)
    };

    function handleClose(){
        $ui.byPage.discover.main = 'list'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    // DATA FOR MULTI-SELECT COMPONENTS
    // Waterways outcomes 
    const keyValues = {
        label:      'by key values',
        name:       'keyValues',
        list:       Object.keys(hwsSchema.keyValues),
        placeholder:    'Use this field to select waterway key values'
    }

    const conditions = {
        label:      'by waterway conditions',
        name:       'conditions',
        list:       Object.keys(hwsSchema.conditions),
        placeholder:    'Use this field to select waterway conditions'
    }

    const performanceObjectivesGroup = {
        label:      'by performance objective group',
        name:       'performanceObjectiveGroup',
        list:       Object.keys(hwsSchema.performanceObjectives),
        placeholder:    'Use this field to select performance objectives groups'
    }

    const performanceObjectivesTheme = {
        label:      'by performance objective theme',
        name:       'performanceObjectiveTheme',
        list:       [... new Set(Object.values(hwsSchema.performanceObjectives).map(d => d.themes).flat().sort()) ],
        placeholder:    'Use this field to select performance objectives themes'
    }

    // Project location
    const catchments = {
        label:      'by catchments',
        name:       'catchment',
        list:       [...locationTree.entries()].map(d => d[0]),
        placeholder:    'Use this field to select catchments'
    }

    const subcatchments = {
        label:          'by subcatchments',
        name:           'subcatchment',
        list:           Object.keys(subCatchmentMap).sort(),
        placeholder:    'Use this field to select subcatchments'
    }

    const locations = {
        label:          'by location',
        name:           'location',
        list:           Object.keys(locationMap).sort(),
        placeholder:    'Use this field to select locations'
    }


// console.log('Key values', keyValues)
// console.log('Conditions', conditions)
// console.log('Performance objectives Group', performanceObjectivesGroup)
// console.log('Performance objectives Theme', performanceObjectivesTheme)

// console.log('Locations', locations)
// console.log('Conditions', subcatchments)
// console.log('Performance objectives', catchments)

    // Project characterships
    const initiativeType = {
        label:          'Type',
        name:           'initiativeType',
        list:           projectSchema.initiativeType,
        placeholder:    'Use this field to select initiative type(s)'
    }
    const projectStage = {
        label:          'Stage',
        name:           'projectStage',
        list:           projectSchema.stage,
        placeholder:    'Use this field to select initiative project(s)'
    }
    const projectClass = {
        label:          'Class',
        name:           'projectClass',
        list:           projectSchema.class,
        placeholder:    'Use this field to select project class(es)'
    }
    const projectSize = {
        label:          'Size',
        name:           'projectSize',
        list:           projectSchema.size,
        placeholder:    'Use this field to select project size to filter for'
    }
    const projectScale = {
        label:          'Scale',
        name:           'projectScale',
        list:           projectSchema.class,
        placeholder:    'Use this field to select project scale to filter for'
    }

    // Project stakeholders
    const leadOrg = {
        label:          'Lead organisation',
        name:           'leadOrg',
        list:           $database.organisations.map( d => d.name).sort(),
        placeholder:    'Use this field to select the name of lead organisation to filter for'
    }
    const leadOrgType = {
        label:          'Lead organisation type',
        name:           'leadOrgType',
        list:           projectSchema.orgType,
        placeholder:    'Use this field to select the type of lead organisation to filter for'
    }
    const partnerOrg = {
        label:          'Partner organisation(s)',
        name:           'partnerOrg',
        list:           $database.organisations.map( d => d.name),
        placeholder:    'Use this field to select the name of a partner organisation to filter for'
    }
</script>


<!-- COMPONENT MARKUP-->
<section>
    <div class='close-container'>
        <div on:click={handleClose} class='close-button'>
            &#8592; Close search filter
        </div>
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
            <div class = 'multi-select-container' style="z-index:21">
                <h4>{@html keyValues.label}</h4>
                <MultiSelect id={keyValues.name} bind:value={$ui.search.project.keyValues} placeholder={keyValues.placeholder} >
                    {#each keyValues.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container'  style="z-index:20">
                <h4>{@html conditions.label}</h4>
                <MultiSelect id={conditions.name} bind:value={$ui.search.project.conditions}   placeholder={conditions.placeholder} >
                    {#each conditions.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:19">
                <h4>{@html performanceObjectivesGroup.label}</h4>
                <MultiSelect id={performanceObjectivesGroup.name} bind:value={$ui.search.project.performanceObjectivesGroup}   placeholder={performanceObjectivesGroup.placeholder} >
                    {#each performanceObjectivesGroup.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:18">
                <h4>{@html performanceObjectivesTheme.label}</h4>
                <MultiSelect id={performanceObjectivesTheme.name} bind:value={$ui.search.project.performanceObjectivesTheme}   placeholder={performanceObjectivesTheme.placeholder} >
                    {#each performanceObjectivesTheme.list as name}
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
            <h3>Location</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byLocation}
        <div class = "collapse__body"  transition:slide>
            <div class = 'multi-select-container' style="z-index:17">
                <h4>{@html catchments.label}</h4>
                <MultiSelect id={catchments.name} bind:value={$ui.search.project.catchment} placeholder={catchments.placeholder} >
                    {#each catchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:16">
                <h4>{@html subcatchments.label}</h4>
                <MultiSelect id={subcatchments.name} bind:value={$ui.search.project.subcatchment} placeholder={subcatchments.placeholder} >
                    {#each subcatchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:15">
                <h4>{@html locations.label}</h4>
                <MultiSelect id={locations.name} bind:value={$ui.search.project.locations} placeholder={locations.placeholder}>
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
                <MultiSelect id = {initiativeType.name} bind:value={$ui.search.project.initiativeType} placeholder={initiativeType.placeholder} >
                    {#each initiativeType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:13">
                <h4>{@html projectStage.label}</h4>
                <MultiSelect id = {projectStage.name} bind:value={$ui.search.project.projectStage} placeholder={projectStage.placeholder} >
                    {#each projectStage.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:12">
                <h4>{@html projectClass.label}</h4>
                <MultiSelect id = {projectClass.name} bind:value={$ui.search.project.projectClass} placeholder={projectClass.placeholder} >
                    {#each projectClass.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:11">
                <h4>{@html projectSize.label}</h4>
                <MultiSelect id = {projectSize.name} bind:value={$ui.search.project.projectSize} placeholder={projectSize.placeholder} >
                    {#each projectSize.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:10">
                <h4>{@html projectScale.label}</h4>
                <MultiSelect id = {projectScale.name} bind:value={$ui.search.project.projectScale} placeholder={projectScale.placeholder} >
                    {#each projectScale.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <!-- by Stakeholders -->
    <div class = "contariner">
        <div id = "byStakeholders" class="collapse__header" type="button" 
            class:selected="{paneVisbility.byStakeholders}" on:click={togglePane}>
            <h3>Stakeholders</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byStakeholders}
        <div class = "collapse__body" transition:slide>
            <div class = 'multi-select-container' style="z-index:9">
                <h4>{@html leadOrg.label}</h4>
                <MultiSelect id = {leadOrg.name} bind:value={$ui.search.project.leadOrg} placeholder={leadOrg.placeholder} >
                    {#each leadOrg.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:8">
                <h4>{@html leadOrgType.label}</h4>
                <MultiSelect id = {leadOrgType.name} bind:value={$ui.search.project.leadOrgType} placeholder={leadOrgType.placeholder} >
                    {#each leadOrgType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:7">
                <h4>{@html partnerOrg.label}</h4>
                <MultiSelect id = {partnerOrg.name} bind:value={$ui.search.project.partnerOrg} placeholder={partnerOrg.placeholder} >
                    {#each partnerOrg.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <div class = "button-container">
        <button on:click|preventDefault={handleSubmit}>Search for projects</button>
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
    h4{
        font-size:      1rem;
        font-weight:    600
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
        justify-content: flex-end;
    }
    .close-button{
        font-weight: 600;
        font-size: 0.8rem;
        cursor: pointer;
    }
    .close-button:hover{
        text-decoration: underline;
    }
    .button-container{
        margin-top: 1rem;
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
        display: grid;
	}

</style>