<!-- STAKEHOLDER SEARCH OPTIONSCOMPONENT-->
<script>
	import MultiSelect    from '../../shared/MultiSelect.svelte';
	import { slide, fly }      from "svelte/transition";
    import { ui }         from '../../../data/stores.js'
    import { database }         from '../../../data/dataStores.js'
	import { slugify, capitaliseFirst } from '../../../utils/helpers.js'
    import { keyValues, conditions, performanceObjectivesGroup, performanceObjectivesTheme, catchments, subcatchments, locations, leadOrg, leadOrgType, partnerOrg, initiativeType, projectStage, projectClass, projectSize, projectScale }  from '../../../data/multiSelect.js'

    import { hwsSchema, projectSchema, locationMap, locationTree } from '../../../data/schema.js'


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
        window.scrollTo({top: 0, behavior: 'smooth'});
        console.log($ui.search)
    };

    function handleClose(){
        $ui.byPage.connect.main = 'list'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    function handleClearSearch(){
        console.log('Clearing the search')
        $ui.search.organisation = {}
        for (const key of Object.keys(paneVisbility)){ paneVisbility[key] = false}
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    // Keep count of search param number
    $: noSearchParams = typeof Object.values($ui.search.organisation) === 'undefined' ? 0 : Object.values($ui.search.organisation).flat().length
   
</script>


<!-- COMPONENT MARKUP-->
<section in:fly="{{duration: 800, x: -100}}" out:fly="{{duration: 200, x: -100}}">
    <!-- Close search option-->
    <div class='close-container'>
        <div on:click={handleClose} class='close-button'>
            &#8592; Close search filter
        </div>
    </div>

    <!-- SEARCH THEMES-->
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
                <h4>{@html partnerOrg.label}</h4>
                <MultiSelect id = {partnerOrg.name} bind:value={$ui.search.organisation.partnerOrg} placeholder={partnerOrg.placeholder} >
                    <option disabled selected value></option>
                    {#each partnerOrg.list as name}
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
            <div class = 'multi-select-container' style="z-index:21">
                <h4>{@html keyValues.label}</h4>
                <MultiSelect id={keyValues.name} bind:value={$ui.search.organisation.keyValues} placeholder={keyValues.placeholder} >
                    <option disabled selected value></option>
                    {#each keyValues.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container'  style="z-index:20">
                <h4>{@html conditions.label}</h4>
                <MultiSelect id={conditions.name} bind:value={$ui.search.organisation.conditions}   placeholder={conditions.placeholder} >
                    <option disabled selected value></option>
                    {#each conditions.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:19">
                <h4>{@html performanceObjectivesGroup.label}</h4>
                <MultiSelect id={performanceObjectivesGroup.name} bind:value={$ui.search.organisation.performanceObjectivesGroup}   placeholder={performanceObjectivesGroup.placeholder} >
                    <option disabled selected value></option>
                    {#each performanceObjectivesGroup.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:18">
                <h4>{@html performanceObjectivesTheme.label}</h4>
                <MultiSelect id={performanceObjectivesTheme.name} bind:value={$ui.search.project.performanceObjectivesTheme}   placeholder={performanceObjectivesTheme.placeholder} >
                    <option disabled selected value></option>
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
            <h3>Location of work</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byLocation}
        <div class = "collapse__body"  transition:slide>
            <div class = 'multi-select-container' style="z-index:17">
                <h4>{@html catchments.label}</h4>
                <MultiSelect id={catchments.name} bind:value={$ui.search.organisation.catchment} placeholder={catchments.placeholder} >
                    <option disabled selected value></option>
                    {#each catchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:16">
                <h4>{@html subcatchments.label}</h4>
                <MultiSelect id={subcatchments.name} bind:value={$ui.search.organisation.subcatchment} placeholder={subcatchments.placeholder} >
                    <option disabled selected value></option>
                    {#each subcatchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:15">
                <h4>{@html locations.label}</h4>
                <MultiSelect id={locations.name} bind:value={$ui.search.organisation.locations} placeholder={locations.placeholder}>
                    <option disabled selected value></option>
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
                    <option disabled selected value></option>
                    {#each initiativeType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:13">
                <h4>{@html projectStage.label}</h4>
                <MultiSelect id = {projectStage.name} bind:value={$ui.search.organisation.projectStage} placeholder={projectStage.placeholder} >
                    <option disabled selected value></option>
                    {#each projectStage.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:12">
                <h4>{@html projectClass.label}</h4>
                <MultiSelect id = {projectClass.name} bind:value={$ui.search.organisation.projectClass} placeholder={projectClass.placeholder} >
                    <option disabled selected value></option>
                    {#each projectClass.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:11">
                <h4>{@html projectSize.label}</h4>
                <MultiSelect id = {projectSize.name} bind:value={$ui.search.organisation.projectSize} placeholder={projectSize.placeholder} >
                    <option disabled selected value></option>
                    {#each projectSize.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:10">
                <h4>{@html projectScale.label}</h4>
                <MultiSelect id = {projectScale.name} bind:value={$ui.search.organisation.projectScale} placeholder={projectScale.placeholder} >
                    <option disabled selected value></option>
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
    {#if noSearchParams > 0}
        <div class = "clear-search-container" on:click={handleClearSearch}>
            Clear the search parameters
        </div>
    {/if}
</section>


<!------ STYLE ------->
<style> 
    section{
        grid-area:              main;
    }
    h3, h4{ 
        margin-block-start:     0;
        margin-block-end:       0;
        padding:                0 1rem 0 0.5rem;
        line-height:            1.25;
    }
    h4{
        margin-block-start:     0.75rem;        
        font-size:              1rem;
        font-weight:            600;
    }
    .multi-select-container{
        display:                grid;
        padding:                1rem 0;
        grid-template-columns:  1fr 3fr;
    }
    .container * {
        box-sizing:             border-box;
    }
    .close-container{
        margin-bottom:          1rem;
        display:                flex;      
        justify-content:        flex-end;  
    }
    .close-button, 
    .clear-search-container{
        font-weight:            600;
        font-size:              0.8rem;
        cursor:                 pointer;
    }
    .close-button:hover, 
    .clear-search-container:hover{
        text-decoration:        underline;
    }
    .button-container, 
    .clear-search-container{
        margin-top:             1rem;
    }
    .clear-search-container{
        text-align:             right;
    }

    /* COLLAPSIBLE PANE STYLING */
	.collapse__header {
        pointer-events:         bounding-box;
        cursor:                 pointer;
        display:                flex;
        justify-content:        space-between;
	    padding:                1rem 0rem;
	    border-top:             2px dotted var(--darkGrey);
	    transition:             background 200ms ease-in-out;
	}
    .collapse__header .toggle-icon{
        margin-right:           1rem;
	    transition:             all 200ms ease-in-out;
    }
    .selected .toggle-icon{
        transform:              rotate(180deg);
    }
	.collapse__header.selected,
	.collapse__header:hover {
	    background:             var(--darkGrey);
        color:                  #fff;
	}
	.collapse__body {
	    padding:                1rem 0;
        display:                grid;
	}
</style>