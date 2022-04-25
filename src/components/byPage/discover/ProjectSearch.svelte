<!-- DISCOVER PAGE COMPONENT-->
<script>
	import { slide, fly }       from "svelte/transition";
	import MultiSelect          from '../../shared/forms/MultiSelect.svelte';
	import GenericMap           from '../../shared/map/GenericMap.svelte';
    import { ui }               from '../../../data/stores.js'
    import { database }         from '../../../data/dataStores.js'
    import { componentContent, infoModal } from '../../../data/content.js'
    import { keyValues, conditions, performanceObjectivesGroup, performanceObjectivesTheme, catchments, subcatchments, locations, leadOrg, leadOrgType, partnerOrg, projectType, projectStage, projectClass, projectSize, projectScale }  from '../../../data/selectorLists.js'

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
    };

    function handleSearch(){

        //////////// TO BE REPLACED ////////////
        // Random project selection: To be replaced with database search
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
        const projectDatabase = $database.projects
        const randProjNumber =  getRandomInt(0, 9)

        $ui.search.project = shuffleArray(projectDatabase.slice(0, randProjNumber))

        // Temporary info box for project search
        if($ui.infoModal.showNotes && componentContent.messageModal.projectSearch){
            $ui.infoModal.message = infoModal.projectSearch
            componentContent.messageModal.projectSearch = null
        }

        ///////////////////////////////////////////
        // Set UI based on curent page
        switch($ui.page){
            case 'discover':
                $ui.byPage.discover.main = 'list'
                $ui.byPage.discover.projectSearch.isMade = true
                break

            case 'share':
                $ui.byPage.share.main = 'list'
                $ui.byPage.share.projectSearch.isMade = true
                break
        };

        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    function handleClose(){
        $ui.byPage.discover.main = 'list'
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    function handleClearSearch(){
        console.log('Clearing the search')
        $ui.search.project = {}
        for (const key of Object.keys(paneVisbility)){ paneVisbility[key] = false}
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    // Keep count of search param number
    $: noSearchParams = typeof Object.values($ui.search.project) === 'undefined' ? 0 : Object.values($ui.search.project).flat().length

</script>


<!-- COMPONENT MARKUP-->
<section id = 'project-search' in:fly="{{duration: 800, x: -100}}" out:fly="{{duration: 200, x: -100}}">
    <!-- Close search option-->
    {#if $ui.page === 'discover'}
    <div class='close-container'>
        <div on:click={handleClose} class='close-button'>
            &#8592; Close search filter
        </div>
    </div>
    {/if}

    <!-- SEARCH THEMES-->
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
                    <option disabled selected value></option>
                    {#each keyValues.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container'  style="z-index:20">
                <h4>{@html conditions.label}</h4>
                <MultiSelect id={conditions.name} bind:value={$ui.search.project.conditions}   placeholder={conditions.placeholder} >
                    <option disabled selected value></option>
                    {#each conditions.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:19">
                <h4>{@html performanceObjectivesGroup.label}</h4>
                <MultiSelect id={performanceObjectivesGroup.name} bind:value={$ui.search.project.performanceObjectivesGroup}   placeholder={performanceObjectivesGroup.placeholder} >
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
            <h3>Location</h3>
            <div class="toggle-icon down">&#8595;</div>
        </div>
        {#if paneVisbility.byLocation}
        <div class = "collapse__body"  transition:slide>
            <div class = 'multi-select-container' style="z-index:17">
                <h4>{@html catchments.label}</h4>
                <MultiSelect id={catchments.name} bind:value={$ui.search.project.catchment} placeholder={catchments.placeholder} >
                    <option disabled selected value></option>
                    {#each catchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:16">
                <h4>{@html subcatchments.label}</h4>
                <MultiSelect id={subcatchments.name} bind:value={$ui.search.project.subcatchment} placeholder={subcatchments.placeholder} >
                    <option disabled selected value></option>
                    {#each subcatchments.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'multi-select-container' style="z-index:15">
                <h4>{@html locations.label}</h4>
                <MultiSelect id={locations.name} bind:value={$ui.search.project.locations} placeholder={locations.placeholder}>
                    <option disabled selected value></option>
                    {#each locations.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'note'>Location searches will be 'smarter' and linked to the map view</div>
            <GenericMap/>
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
                <h4>{@html projectStage.label}</h4>
                <MultiSelect id = {projectStage.name} bind:value={$ui.search.project.projectStage} placeholder={projectStage.placeholder} >
                    <option disabled selected value></option>
                    {#each projectStage.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>

            <div class = 'note'>More 'by date' search characters TBA</div>

            <div class = 'multi-select-container' style="z-index:15">
                <h4>{@html projectType.label}</h4>
                <MultiSelect id = {projectType.name} bind:value={$ui.search.project.projectType} placeholder={projectType.placeholder} >
                    <option disabled selected value></option>
                    {#each projectType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:12">
                <h4>{@html projectClass.label}</h4>
                <MultiSelect id = {projectClass.name} bind:value={$ui.search.project.projectClass} placeholder={projectClass.placeholder} >
                    <option disabled selected value></option>
                    {#each projectClass.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:11">
                <h4>{@html projectSize.label}</h4>
                <MultiSelect id = {projectSize.name} bind:value={$ui.search.project.projectSize} placeholder={projectSize.placeholder} >
                    <option disabled selected value></option>
                    {#each projectSize.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:10">
                <h4>{@html projectScale.label}</h4>
                <MultiSelect id = {projectScale.name} bind:value={$ui.search.project.projectScale} placeholder={projectScale.placeholder} >
                    <option disabled selected value></option>
                    {#each projectScale.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'note'>Characteristics criteria to be refined on review of real project data</div>

        </div>
        {/if}
    </div>

    <!-- by Stakeholders -->
    <div class = "container">
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
                    <option disabled selected value></option>
                    {#each leadOrg.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:8">
                <h4>{@html leadOrgType.label}</h4>
                <MultiSelect id = {leadOrgType.name} bind:value={$ui.search.project.leadOrgType} placeholder={leadOrgType.placeholder} >
                    <option disabled selected value></option>
                    {#each leadOrgType.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
            <div class = 'multi-select-container' style="z-index:7">
                <h4>{@html partnerOrg.label}</h4>
                <MultiSelect id = {partnerOrg.name} bind:value={$ui.search.project.partnerOrg} placeholder={partnerOrg.placeholder} >
                    <option disabled selected value></option>
                    {#each partnerOrg.list as name}
                    <option value={name}>{@html name}</option>
                    {/each}                
                </MultiSelect>
            </div>
        </div>
        {/if}
    </div>

    <div class = "button-container">
        <button on:click|preventDefault={handleSearch}>Search for projects</button>
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
        grid-template-columns:  1fr 3fr;
        padding:                1rem 0;
    }
    .container * {
        box-sizing:             border-box;
    }
    .close-container{
        display:                flex;        
        justify-content:        flex-end;
        margin-bottom:          1rem;
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
	    padding:                1rem 0rem;
        display:                grid;
	}
    .note{
        font-size:              0.8rem;
        font-style:             italic;
        text-align:             right;
    }
</style>