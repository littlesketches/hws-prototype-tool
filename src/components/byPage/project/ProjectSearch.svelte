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
        byOutcomes:         false,
        byProject:          false,
        byOrg:              false,
        byLocation:         false
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
        // $ui.byPage.discover.main = 'list'
        console.log($ui.search)

    };


    // DATA FOR MULTI-SELECT COMPONENTS
    // Waterways outcomes 
    const keyValues = {
        label:      'by key values',
        name:       'keyValues',
        list:       Object.keys(hwsSchema.keyValues),
        searchObj:  $ui.search,
        placeholder:    'Use this field to select waterway key values to filter for'
    }
    const conditions = {
        label:      'by waterway conditions',
        name:       'conditions',
        list:       Object.keys(hwsSchema.conditions),
        searchObj:  $ui.search,
        placeholder:    'Use this field to select waterway conditions to filter for'

    }
    const performanceObjectives = {
        label:      'by performance objectives',
        name:       'performanceObjectives',
        list:       Object.keys(hwsSchema.performanceObjectives),
        searchObj:  $ui.search,
        placeholder:    'Use this field to select performance objectives to filter for'

    }

    // Project location
    const catchments = {
        label:      'by catchments',
        name:       'catchment',
        list:       [...locationTree.entries()].map(d => d[0]),
        searchObj:  $ui.search,
        placeholder:    'Use this field to select catchments to filter for'

    }
    const subcatchments = {
        label:          'by subcatchments',
        name:           'subcatchment',
        list:           [].concat(...
                            [...locationTree.entries()]
                                .map(d => [...d[1]].map(d => d[0])) 
                        ),
        searchObj:      $ui.search.subcatchment,
        placeholder:    'Use this field to select subcatchments to filter for'

    }
    const locations = {
        label:          'by location',
        name:           'location',
        list:           [].concat(...
                            [...locationTree.entries()]
                                .map(d => [...d[1]].map(d => d[0])) 
                        ),
        searchObj:      $ui.search.location,
        placeholder:    'Use this field to select locations to filter for'
    }

    // Project characterships
    const initiativeType = {
        label:          'Initiatve type',
        name:           'initiativeType',
        list:           projectSchema.initiativeType,
        searchObj:      $ui.search.initiativeType,
        placeholder:    'Use this field to select initiative type(s) to filter for'
    }
    const projectStage = {
        label:          'Project/initiative stage',
        name:           'projectStage',
        list:           projectSchema.stage,
        searchObj:      $ui.search.projectStage,
        placeholder:    'Use this field to select initiative project(s) to filter for'
    }
    const projectClass = {
        label:          'Project/initiative class',
        name:           'projectClass',
        list:           projectSchema.class,
        searchObj:      $ui.search.projectClass,
        placeholder:    'Use this field to select project class(es) to filter for'
    }
    const projectSize = {
        label:          'Project size',
        name:           'projectSize',
        list:           projectSchema.size,
        searchObj:      $ui.search.projectSize,
        placeholder:    'Use this field to select project size to filter for'
    }
    const projectScale = {
        label:          'Project scale',
        name:           'projectClass',
        list:           projectSchema.class,
        searchObj:      $ui.search.projectScale,
        placeholder:    'Use this field to select project scale to filter for'
    }

    // Project stakeholders
    const leadOrg = {
        label:          'Lead organisation',
        name:           'leadOrg',
        list:           organisationData.map( d => d.name).sort(),
        searchObj:      $ui.search.leadOrg,
        placeholder:    'Use this field to select the name of lead organisation to filter for'
    }
    const leadOrgType = {
        label:          'Lead organisation type',
        name:           'leadOrgType',
        list:           projectSchema.orgType,
        searchObj:      $ui.search.leadOrgType,
        placeholder:    'Use this field to select the type of lead organisation to filter for'
    }
    const partnerOrg = {
        label:          'Partner organisation(s)',
        name:           'partnerOrg',
        list:           organisationData.map( d => d.name),
        searchObj:      $ui.search.partnerOrg,
        placeholder:    'Use this field to select the name of a partner organisation to filter for'
    }

</script>


<!-- COMPONENT MARKUP-->
<section>
    <div class = "container">
        <div id = "byOutcomes" class="collapse__header" on:click={togglePane}>
            <h3>Waterway outcomes</h3>
            <!-- <div class="toggle-icon">v</div> -->
        </div>
        {#if paneVisbility.byOutcomes}
        <div class = "collapse__body"  transition:slide>
            <div style="z-index:20">
                <h4>{@html keyValues.label}</h4>
                <MultiSelect id={keyValues.name} bind:value={$ui.search.keyValues} placeholder={keyValues.placeholder} >
                    {#each keyValues.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div style="z-index:19">
                <h4>{@html conditions.label}</h4>
                <MultiSelect id={conditions.name} bind:value={$ui.search.conditions}   placeholder={conditions.placeholder} >
                    {#each conditions.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div style="z-index:18">
                <h4>{@html performanceObjectives.label}</h4>
                <MultiSelect id={performanceObjectives.name} bind:value={$ui.search.performanceObjectives}   placeholder={performanceObjectives.placeholder} >
                    {#each performanceObjectives.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <div class = "container">
        <div id = "byLocation" class="collapse__header" on:click={togglePane}>
            <h3>Location</h3>
            <!-- <div class="toggle-icon">v</div> -->
        </div>
        {#if paneVisbility.byLocation}
        <div class = "collapse__body"  transition:slide>
            <div style="z-index:17">
                <h4>{@html catchments.label}</h4>
                <MultiSelect id={catchments.name} bind:value={$ui.search.catchment} placeholder={catchments.placeholder} >
                    {#each catchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div style="z-index:16">
                <h4>{@html subcatchments.label}</h4>
                <MultiSelect id={subcatchments.name} bind:value={$ui.search.subcatchment} placeholder={subcatchments.placeholder} >
                    {#each subcatchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div style="z-index:15">
                <h4>{@html locations.label}</h4>
                <MultiSelect id={locations.name} bind:value={$ui.search.locations} placeholder={locations.placeholder}>
                    {#each locations.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <div class = "container">
        <div id = "byProject" class="collapse__header" on:click={togglePane}>
            <h3>Characteristics</h3>
        </div>
        {#if paneVisbility.byProject}
        <div class = "collapse__body"  transition:slide>
            <div style="z-index:14">
                <h4>{@html initiativeType.label}</h4>
                <MultiSelect id = {initiativeType.name} bind:value={$ui.search.initiativeType} placeholder={initiativeType.placeholder} >
                    {#each initiativeType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div style="z-index:13">
                <h4>{@html projectStage.label}</h4>
                <MultiSelect id = {projectStage.name} bind:value={$ui.search.projectStage} placeholder={projectStage.placeholder} >
                    {#each projectStage.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div style="z-index:12">
                <h4>{@html projectClass.label}</h4>
                <MultiSelect id = {projectClass.name} bind:value={$ui.search.projectClass} placeholder={projectClass.placeholder} >
                    {#each projectClass.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div style="z-index:11">
                <h4>{@html projectSize.label}</h4>
                <MultiSelect id = {projectSize.name} bind:value={$ui.search.projectSize} placeholder={projectSize.placeholder} >
                    {#each projectSize.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div style="z-index:10">
                <h4>{@html projectScale.label}</h4>
                <MultiSelect id = {projectScale.name} bind:value={$ui.search.projectScale} placeholder={projectScale.placeholder} >
                    {#each projectScale.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <div class = "container">
        <div id = "byOrg" class="collapse__header" on:click={togglePane}>
            <h3>Stakeholders</h3>
        </div>
        {#if paneVisbility.byOrg}
        <div class = "collapse__body" transition:slide>
            <div style="z-index:9">
                <h4>{@html leadOrg.label}</h4>
                <MultiSelect id = {leadOrg.name} bind:value={$ui.search.leadOrg} placeholder={leadOrg.placeholder} >
                    {#each leadOrg.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div style="z-index:8">
                <h4>{@html leadOrgType.label}</h4>
                <MultiSelect id = {leadOrgType.name} bind:value={$ui.search.leadOrgType} placeholder={leadOrgType.placeholder} >
                    {#each leadOrgType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div style="z-index:0">
                <h4>{@html partnerOrg.label}</h4>
                <MultiSelect id = {partnerOrg.name} bind:value={$ui.search.partnerOrg} placeholder={partnerOrg.placeholder} >
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
    h3{ 
        margin-block-start: 0;
        margin-block-end: 0;
        padding-left: 0.5rem;
    }

    .container * {
        box-sizing: border-box;
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
	    padding: 1rem 0rem;
	    border-top: 0.75px solid grey;
	    transition: background 200ms ease-in-out;
	}
	.collapse__header.selected,
	.collapse__header:hover {
	    background: #333;
        color:      #fff;
	}
	.collapse__body {
	    padding: 1rem;
	    /* background: #f0f0f0; */
        display: grid;
	}

</style>