<!-- PROJECT PAGE INFO PANE-->
<script>
	import { fade }     from 'svelte/transition'
    import { ui }       from '../../../../data/stores.js'
    import { capitaliseFirst }       from '../../../../utils/helpers.js'

    // Reactive variables
    $: projectData = $ui.state.focus.projectData

</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <div class = 'info-pane-header'>
        <h3>key info</h3>
    </div>

    <div class = 'info-pane-content'>
        <!-- WHO: Lead  org(s) and partners-->
        <h4>&#8212;&#8212; Stakeholders</h4> 
        <div class='info-row'>
            <div class ='info-label'>Lead organisation:</div>
            <div class ='info-content'>
                {@html projectData.stakeholders.lead.org}
            </div>
        </div>
        {#if projectData.stakeholders.partners.length > 0}
        <div class='info-row'>
            {#if projectData.stakeholders.partners.length > 0}
            <div class ='info-label'>Partners:</div>
            {:else}
            <div class ='info-label'>Partner:</div>
            {/if}
            <div class ='info-content'>
                {#each projectData.stakeholders.partners as partner, index}
                    <span>{index === 0  ? partner :index == projectData.stakeholders.partners.length - 1 ? ` and ${partner}` : `${partner}, `} </span>
                {/each}
            </div>
        </div>
        {/if}

        <!-- PROJECT INFO: Lead  org(s) and partners-->
        <h4>&#8212;&#8212; Project info</h4> 
        <div class='info-row'>
            <div class ='info-label'>Project type</div>
            <div class ='info-content'>{capitaliseFirst(projectData.meta.type)}</div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Status</div>
            <div class ='info-content'>{capitaliseFirst(projectData.status.stage)}</div>
        </div>
        {#if projectData.status.stage === 'complete' || projectData.status.stage === 'ongoing'}
        <div class='info-row'>
            <div class ='info-label'>Completion date</div>
            <div class ='info-content'>{projectData.status.dates.completion}</div>
        </div>
        {:else}
        <div class='info-row'>
            <div class ='info-label'>Target date</div>
            <div class ='info-content'>{projectData.status.dates.target}</div>
        </div>
        {/if}

        <!-- PROJECT LOCATION DATA -->
        <h4>&#8212;&#8212; Location</h4> 
        <div class='info-row'>
            {#if projectData.location.locations.length > 1 }
            <div class ='info-label'>Locations:</div>
            {:else}
            <div class ='info-label'>Location:</div>
            {/if}
            <div class ='info-content'>
                {#each projectData.location.locations as location, index}
                <span>{index === 0 ? location :index == projectData.location.locations.length - 1 ? ` and ${location}` : `${location}, `}</span>
                {/each}
            </div>
        </div>

        <div class='info-row'>
            {#if $ui.state.focus.projectData.location.subCatchments.length > 1 }
            <div class ='info-label'>Subcatchments:</div>
            {:else}
            <div class ='info-label'>Subcatchment:</div>
            {/if}
            <div class ='info-content'>
                {#each projectData.location.subCatchments as subcatchment, index}
                    <span>{index === 0 ? subcatchment :index == projectData.location.subCatchments.length - 1 ? ` and ${subcatchment}` : `${subcatchment}, `} </span>
                {/each}
            </div>
        </div>

        <div class='info-row'>
            {#if projectData.location.catchments.length > 1 }
            <div class ='info-label'>Catchments:</div>
            {:else}
            <div class ='info-label'>Catchment:</div>
            {/if}
            <div class ='info-content'>
                {#each projectData.location.catchments as catchment, index}
                    <span>{index === 0 ? catchment :index == projectData.location.catchments.length - 1 ? ` and ${catchment}` : `${catchment}, `}</span>
                {/each}
            </div>
        </div>

        <div class='info-row'>
            {#if projectData.location.locations.length > 1 }
            <div class ='info-label'>Local Governments:</div>
            {:else}
            <div class ='info-label'>Local Government:</div>
            {/if}
            <div class ='info-content'>
                {#each projectData.location.locations as location, index}
                <span>{index === 0 ? "TBA City Council" : index == projectData.location.locations.length - 1 ? ` and "TBA City Council"` : `"TBA City Council", `}</span>
                {/each}
            </div>
        </div>
    </div>

</section>

<!-- STYLES-->
<style>
   section{
        grid-area:      2 / 2 / 3 / 3;       
        display:        grid;
        grid-template-columns: 10% 90%;
        min-height:     30vh;
    }
    h3{
        font-family: sans-serif;
    }
    h4:first-of-type{
        margin-block-start: 0rem;
    }
    h4{
        margin-block-start: 1.5rem;
        margin-block-end:   0.75rem;
        font-size:          1rem;
    }
    p{
        line-height:        1.25;
    }
    .info-pane-header{
        display:            flex;
        justify-items:      end;
    }
    .info-pane-header h3{
       text-stroke:         0.75px black;
       -webkit-text-stroke: 0.75px black;
        color:              white;
        font-size:          3rem;
        margin-block-start: 0;
        margin-block-end:   0;
        text-align:         end;
        transform:          rotate(180deg);
        writing-mode:       vertical-rl
    }
    .info-pane-content{
        background-color: #fff;
        opacity:            0.8;
        background-size:    10px 10px;
        background-image: repeating-linear-gradient(45deg, #ddd 0, #ddd 1px, #fff 0, #fff 50%);
        padding:        1rem;
        z-index:        3;
    }
    .info-row{
        font-size:  1rem;
        display:    grid;
        grid-template-columns: 1fr 2fr;
        padding-bottom: 0.5rem;
        font-size:  0.8rem;
    }
    .info-label{
        font-weight: 400;
        color: rgb( 100, 100, 100);
    }
    .info-content{
        font-weight: 600;
        line-height: 1.5;
    }

</style>