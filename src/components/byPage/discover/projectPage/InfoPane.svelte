<!-- PROJECT PAGE INFO PANE-->
<script>
    import { ui }       from '../../../../data/stores.js'
	import { fade }     from 'svelte/transition'

    const projectData = $ui.state.focus.projectData
</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <div class = 'info-pane-header'>
        <h3>key info</h3>
    </div>

    <div class = 'info-pane-content'>
        <!-- WHO: Lead  org(s) and partners-->
        <div>
            <h4>&#8212;&#8212; Stakeholders</h4> 
        </div>
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

        <!-- HO: Lead  org(s) and partners-->
        <div class='border-top'>
            <h4>&#8212;&#8212; Project info</h4> 
        </div>
        <div class='info-row'>
            <div class ='info-label'>Project type</div>
            <div class ='info-content'>TBA</div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Status</div>
            <div class ='info-content'>TBA</div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Completion date</div>
        </div>

        <!-- PROJECT LOCATION DATA -->
        <div class='border-top'>
            <h4>&#8212;&#8212; Location</h4> 
        </div>

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
    h4{
        margin-block-start: 0;
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
        font-size:          4rem;
        margin-block-start: 0;
        margin-block-end:   0;
        text-align:         end;
        transform:          rotate(180deg);
        writing-mode:       vertical-rl
    }
    .info-pane-content{
        background:     rgb(245, 245, 245);   
        padding:        1rem;
        z-index:        3;
    }
    .info-row{
        font-size:  1rem;
        display:    grid;
        grid-template-columns: 1fr 2fr;
        padding-bottom: 0.5rem;
    }
    .border-top{
        margin-top: 1rem;
        padding-top: 1rem;
        /* border-top: solid 0.5px #333; */
    }
    .info-label{
        font-weight: 300;
        color: rgb( 100, 100, 100);
    }
    .info-content{
        font-weight: 300;
        line-height: 1.5;
    }

</style>