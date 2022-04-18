<!-- PROJECT ENTRY FORM-->
<script>
	import MultiLinkInput       from './MultiLinkInput.svelte';
	import MultiSelect          from '../MultiSelect.svelte';
	import MultiInput           from '..//MultiInput.svelte';
    import DividerZagged20px    from "../../shared/misc/DividerZagged20px.svelte"

	import { fly, slide }       from 'svelte/transition'
    import { user, ui }         from '../../../data/stores.js'
    import { componentContent } from '../../../data/content.js'
    import { keyValues, conditions, performanceObjectivesGroup, performanceObjectivesTheme, catchments, subcatchments, locations, leadOrg, leadOrgType, partnerOrg, initiativeType, projectStage, projectClass, projectSize, projectScale }  from '../../../data/multiSelect.js'

    const iconClearPath = 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';

    $ui.newProject = {
        name:           null,
        about:          {},
        contact:        {},
        hws:            {},
        learnings:        {
            general:    ['', '', ''],
            worked:     ['', '', ''],
            failed:     ['', '', ''],
        },
        links:          [
            {name: '', url: '', description: ''}
        ],
        location:       {},
        meta:           {},
        stakeholders:   {},
        status:         {},
    }

    ////// COLLAPSIBLE SEARCH PANES ////
	const paneVisbility= {
        description:            false,
        location:               true,
        characteristics:        true,
        hwsOutcomes:            true,
        stakeholders:           true,
        status:                 true,
        learnings:              true,
        links:                  true,
    }

    function togglePane(){
        Object.keys(paneVisbility).map( key => {
            if(this.id !== key){ paneVisbility[key] = false }
        })
        paneVisbility[this.id] = ! paneVisbility[this.id]
        console.log(`Toggling ${this.id} vis to `, paneVisbility[this.id])
    };

    // Save and submit form
    function handleSave(){
        console.log('Saving a project...')
        console.log($ui.newProject)
    };

    function handleSubmit(){
        console.log('Submitting a project...')
        console.log($ui.newProject)
    };

    // Add and remove items for array inputs; and link/resources
    function deleteItem(type, index, learning){
        console.log('Delete an item:', learning, index)
        $ui.newProject.learnings[type] = $ui.newProject.learnings[type].filter((d, i) => i !== index)
    };

    function addLearning(type){
        $ui.newProject.learnings[type] = [...$ui.newProject.learnings[type], '']
    };

    function addLinkResource(){
        console.log('Adding a new blank one...')
         $ui.newProject.links = [...$ui.newProject.links, {name: '', url: '', description: ''}]
    };

</script>


<!-- COMPONENT HTML MARKUP-->
<section id = "new-project" in:fly="{{y: -200, duration: 800}}" out:fly="{{y: -200, duration: 100}}">
    <div class = 'info-pane'>
        <DividerZagged20px/>
        <h2>&mdash; {@html componentContent.share.new.instructionHeader}</h2>
        {@html componentContent.share.new.instructionDesc}
        <div class = 'float-bottom'>
            <DividerZagged20px/>
        </div>
    </div>


    <form class = 'newProject'>
        <!-- Project details  -->
        <div class="collapse__header" >
            <h4>&mdash; About your project</h4>
        </div>
        <div class = 'container'>
            <ul>
                <li>
                    <label class = "centre_v" for="projectName">Project name</label>
                    <input name ="projectName" bind:value={$ui.newProject.name} />
                </li>
                <li>
                    <label  for="shortDescription">Brief description</label>
                    <textarea name ="shortDescription" rows = "5" bind:value={$ui.newProject.about.shortDescription}></textarea>
                </li>
            </ul>

            <!--- DETAILED DESCRIPTION SECTION: COLLAPSABLE -->
            <div id="description" class="collapse__header float-right" type="button" 
                class:selected="{paneVisbility.description}" on:click={togglePane}>
                <div class ='toggle-label-minor'>Tell us more about your project (optional)</div>
                <div class="toggle-icon down">&#8595;</div>
            </div>
            {#if paneVisbility.description}
            <ul class = "collapse__body"  transition:slide="{{duration: 800}}">
                <li>
                    <label  for="shortDescription">Detailed description</label>
                    <textarea name ="shortDescription" rows = "20" bind:value={$ui.newProject.about.longDescription}></textarea>
                </li>
                <li>
                    <label  for="projectHistory">Project history</label>
                    <textarea name ="projectHistory" rows = "20"  bind:value={$ui.newProject.about.history}></textarea>
                </li>
            </ul>
            {/if}
        </div>

        <!-- Waterways impact -->
        <div class = "container">
            <div id = "hwsOutcomes" class="collapse__header top-border" type="button" 
                class:selected="{paneVisbility.hwsOutcomes}" on:click={togglePane}>
                <h4>&mdash; Project waterway outcomes</h4>
                <div class="toggle-icon down">&#8595;</div>
            </div>

            {#if paneVisbility.hwsOutcomes}
            <div class = "collapse__body"  transition:slide>
                <div class = 'multi-select-container' style="z-index:21">
                    <div class = "label centre_v" >{@html keyValues.label}</div>
                    <MultiSelect id={keyValues.name}  bind:value={$ui.newProject.hws.values} placeholder={keyValues.placeholder} >
                        {#each keyValues.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}
                    </MultiSelect>
                </div>

                <div class = 'multi-select-container'  style="z-index:20">
                    <div class = "label centre_v" >{@html conditions.label}</div>
                    <MultiSelect id={conditions.name} bind:value={$ui.newProject.hws.conditions} placeholder={conditions.placeholder} >
                        {#each conditions.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}
                    </MultiSelect>
                </div>

                <div class = 'multi-select-container' style="z-index:19">
                    <div class = "label centre_v" >{@html performanceObjectivesGroup.label}</div>
                    <MultiSelect id={performanceObjectivesGroup.name} bind:value={$ui.newProject.hws.poGroup}  placeholder={performanceObjectivesGroup.placeholder} >
                        {#each performanceObjectivesGroup.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}
                    </MultiSelect>
                </div>

                <div class = 'multi-select-container' style="z-index:18">
                    <div class = "label centre_v" >{@html performanceObjectivesTheme.label}</div>
                    <MultiSelect id={performanceObjectivesTheme.name} bind:value={$ui.newProject.hws.poTheme}  placeholder={performanceObjectivesTheme.placeholder} >
                        {#each performanceObjectivesTheme.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}
                    </MultiSelect>
                </div>
            </div>
            {/if}
        </div>

        <!-- Project location -->
        <div class = "container">
            <div id = "location" class="collapse__header top-border" type="button" 
                class:selected="{paneVisbility.location}" on:click={togglePane}>
                <h4>&mdash; Project location</h4>
                <div class="toggle-icon down">&#8595;</div>
            </div>
            {#if paneVisbility.location}
            <div class = "collapse__body"  transition:slide>
                <div class = 'multi-select-container' style="z-index:17">
                    <div class = "label centre_v">{@html catchments.label}</div>
                    <MultiSelect id={catchments.name} bind:value={$ui.newProject.location.catchments} placeholder={catchments.placeholder} >
                        {#each catchments.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>

                <div class = 'multi-select-container' style="z-index:16">
                    <div class = "label centre_v">{@html subcatchments.label}</div>
                    <MultiSelect id={subcatchments.name} bind:value={$ui.newProject.location.subCatchments} placeholder={subcatchments.placeholder} >
                        {#each subcatchments.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>

                <div class = 'multi-select-container' style="z-index:15">
                    <div class = "label centre_v">{@html locations.label}</div>
                    <MultiSelect id={locations.name}  bind:value={$ui.newProject.location.locations} placeholder={locations.placeholder}>
                        {#each locations.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
            </div>
            {/if}
        </div>

        <!-- Project classification -->
        <div class = "container">
            <div id = "characteristics" class="collapse__header top-border" type="button" 
                class:selected="{paneVisbility.characteristics}" on:click={togglePane}>
                <h4>&mdash; Project characteristics</h4>
                <div class="toggle-icon down">&#8595;</div>
            </div>
            {#if paneVisbility.characteristics}
            <div class = "collapse__body"  transition:slide>
                <div class = 'multi-select-container' style="z-index:14">
                    <div class = "label">{@html initiativeType.label}</div>
                    <MultiSelect id = {initiativeType.name} bind:value={$ui.newProject.meta.type} placeholder={initiativeType.placeholder} >
                        {#each initiativeType.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
                <div class = 'multi-select-container' style="z-index:13">
                    <div class = "label">{@html projectStage.label}</div>
                    <MultiSelect id = {projectStage.name} bind:value={$ui.newProject.status.stage} placeholder={projectStage.placeholder} >
                        {#each projectStage.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
                <div class = 'multi-select-container' style="z-index:12">
                    <div class = "label">{@html projectClass.label}</div>
                    <MultiSelect id = {projectClass.name} bind:value={$ui.search.project.projectClass} placeholder={projectClass.placeholder} >
                        {#each projectClass.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
                <div class = 'multi-select-container' style="z-index:11">
                    <div class = "label">{@html projectSize.label}</div>
                    <MultiSelect id = {projectSize.name} bind:value={$ui.search.project.projectSize} placeholder={projectSize.placeholder} >
                        {#each projectSize.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
                <div class = 'multi-select-container' style="z-index:10">
                    <div class = "label">{@html projectScale.label}</div>
                    <MultiSelect id = {projectScale.name} bind:value={$ui.search.project.projectScale} placeholder={projectScale.placeholder} >
                        {#each projectScale.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
            </div>
            {/if}
        </div>

        <!-- Stakeholders -->
        <div class = "container">
            <div id = "stakeholders" class="collapse__header top-border" type="button" 
                class:selected="{paneVisbility.stakeholders}" on:click={togglePane}>
                <h4>&mdash; Project stakeholders</h4>
                <div class="toggle-icon down">&#8595;</div>
            </div>
            {#if paneVisbility.stakeholders}
            <div class = "collapse__body" transition:slide>
                <div class = 'multi-select-container' style="z-index:9">
                    <div class = "label">{@html leadOrg.label}</div>
                    <MultiSelect id = {leadOrg.name} bind:value={$ui.search.project.leadOrg} placeholder={leadOrg.placeholder} >
                        {#each leadOrg.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
                <div class = 'multi-select-container' style="z-index:8">
                    <div class = "label">{@html leadOrgType.label}</div>
                    <MultiSelect id = {leadOrgType.name} bind:value={$ui.search.project.leadOrgType} placeholder={leadOrgType.placeholder} >
                        {#each leadOrgType.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
                <div class = 'multi-select-container' style="z-index:7">
                    <div class = "label">{@html partnerOrg.label}</div>
                    <MultiSelect id = {partnerOrg.name} bind:value={$ui.search.project.partnerOrg} placeholder={partnerOrg.placeholder} >
                        {#each partnerOrg.list as name}
                        <option value={name}>{@html name}</option>
                        {/each}                
                    </MultiSelect>
                </div>
            </div>
            {/if}
        </div>

        <!-- Project lessons  -->
        <div class = "container">
            <div id = "learnings" class="collapse__header top-border" type="button" 
                class:selected="{paneVisbility.learnings}" on:click={togglePane}>
                <h4>&mdash; Project learnings</h4>
                <div class="toggle-icon down">&#8595;</div>
            </div>

            {#if paneVisbility.learnings}
                <div class = 'label'>General</div>
                <MultiInput store={$ui.newProject.learnings.general} type = 'general' label='Add another learning'/>
                <div class = 'label'>What worked</div>
                <MultiInput store={$ui.newProject.learnings.worked} type = 'worked'  label='Add another learning'/>
                <div class = 'label'>What didn't worked</div>
                <MultiInput store={$ui.newProject.learnings.failed} type = 'failed'  label='Add another learning'/>
            {/if}
        </div>


        <!-- Project links  -->
        <div class = "container">
            <div id = "links" class="collapse__header top-border" type="button" 
                class:selected="{paneVisbility.links}" on:click={togglePane}>
                <h4>&mdash; Links to other project resources</h4>
                <div class="toggle-icon down">&#8595;</div>
            </div>

            {#if paneVisbility.links}
                <ul>
                    {#each $ui.newProject.links as item, index}
                    <MultiLinkInput {item} {index}/>
                    {/each}
                </ul>
                <div class ='add-container'>
                    <div on:click={addLinkResource}>&oplus; add another resource</div>
                </div>
            {/if}
        </div>

        <!--- Save and post buttons-->
        <div class = "button-container">
            <button class = 'draft' on:click|preventDefault={handleSave}>Save as draft</button>
            <button on:click|preventDefault={handleSubmit}>Post your project</button>
        </div>

    </form>

</section>


<!-- STYLES-->
<style>
    section {
        grid-area:              2 / 1 / 3 / 4;  
        display:                grid;
        grid-template-columns:  1fr 2fr;
        column-gap:             5vw;
    }
    .info-pane{
        display:        flex;
        flex-direction: column;
    }
    .float-bottom{
        margin-top: auto;
    }
    h2{ 
        margin-block-start: 1.5rem;
        margin-block-end:   0rem;
    }
    h4{
        margin-block-start: 0;
        line-height:        1.25;
        font-size:          1rem;
        font-weight:        600;
        margin-block-end:   1rem;
    }
    label, .label{
        color:              var(--darkGrey);
        padding:            0;
        font-size:          0.8rem;
        display:            flex;
        font-weight:        700;
        padding-left:       1rem;
    }
    .centre_v{
        align-self:         center;
    }
    .align-right{
        justify-content:    flex-end;
    }
    label span{
        font-size:          0.8rem;       
        padding-top:        0.5rem;
        font-weight:        300;
    }

    .button-container{
        padding-top:        1rem;
    }

    .add-container{
        font-size:          0.8rem;   
        text-align:         right;
        cursor:             pointer;
    }
    .add-container:hover{
        font-weight:        700;   
        text-decoration:    underline;   
    }

    /* Multi select layout*/
    .multi-select-container{
        display:                grid;
        grid-template-columns:  1fr 3fr;
        column-gap:             2.5vw;
    }   

    /* COLLAPSIBLE PANE STYLING */
	.collapse__header {
        display:            flex;
        justify-content:    space-between;
	    padding-top:        1rem;
	    transition:         background 200ms ease-in-out;
	}
	.collapse__header.top-border {
	    border-top:         0.75px solid grey;
    }
	.collapse__header.float-right {
        justify-content:    flex-end;
        padding-top:        0rem;
        padding-bottom:     1rem;
    }
    .collapse__header .toggle-icon{
	    transition:         all 200ms ease-in-out;
    }
	.collapse__body {
        display:            grid;
	    padding:            1rem 0;
	}
    .toggle-label-minor{
        font-size:          0.8rem;
        padding-right:      1.5rem;
    }
    .selected .toggle-icon{
        transform:          rotate(180deg);
    }

</style>



