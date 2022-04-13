<!-- PROJECT PAGE INFO PANE-->
<script>
	import { fade }         from 'svelte/transition'
    import { ui }           from '../../../../data/stores.js'
    import { database }     from '../../../../data/dataStores.js'
    import { capitaliseFirst }   from '../../../../utils/helpers.js'

    // Reactive variables
    $: stakeholderData = $ui.state.focus.stakeholderData 
    $: leadProjects    = $database.projects.filter( d => d.stakeholders.lead.org === stakeholderData.name)
    $: leadCatchments  = [...new Set(leadProjects.map(d => d.location.catchments).flat())]

</script>


<!-- COMPONENT HTML MARKUP-->
<section>
    <div class = 'info-pane-header'>
        <h3>key info</h3>
    </div>
    <div class = 'info-pane-content'>
        <h4>&mdash;&mdash; Organisation type</h4> 
        <div class='info-row'>
            <div class ='info-label'>Category:</div>
            <div class ='info-content'>
                {@html stakeholderData.meta.type}
            </div>
        </div>
        {#if stakeholderData.meta.subtype1}
        <div class='info-row'>
            <div class ='info-label'>Type:</div>
            <div class ='info-content'>
                {@html stakeholderData.meta.subtype1} 
                {#if stakeholderData.meta.subtype2}
                    ({@html stakeholderData.meta.subtype2})
                {/if}
            </div>
        </div>
        {/if}

        <h4>&mdash;&mdash; Waterways projects</h4> 
        <div class='info-row'>
            <div class ='info-label'>No. projects:</div>
            <div class ='info-content'>
                {@html leadProjects.length}
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Catchments:</div>
            <div class ='info-content'>
                {#each leadCatchments as catchment, index}
                <span>{(leadCatchments.length === 1 || index === leadCatchments.length - 2)? catchment : index === leadCatchments.length - 1 ? ` and ${catchment}` : `${catchment}, `} </span>
                {/each}
            </div>
        </div>

        <h4>&mdash;&mdash; Contact details</h4> 
        <div class='info-row'>
            <div class ='info-label'>Address:</div>
            <div class ='info-content'>
                {@html stakeholderData.contact.address}<br>
                {@html stakeholderData.contact.city}, {@html stakeholderData.contact.postcode}<br>
                {@html stakeholderData.contact.state}
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Contact:</div>
            <div class ='info-content'>
                {@html stakeholderData.contact.name.first} {@html stakeholderData.contact.name.last}
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Email:</div>
            <div class ='info-content'>
                <a href="mailto:{stakeholderData.contact.email}">{@html stakeholderData.contact.email} </a>
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Website:</div>
            <div class ='info-content'>
                <a href={'http://www.'+stakeholderData.contact.website} target="_blank">www.{@html stakeholderData.contact.website}</a>
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