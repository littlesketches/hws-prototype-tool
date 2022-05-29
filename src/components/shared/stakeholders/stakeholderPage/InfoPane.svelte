<!-- STAKEHOLDER PAGE INFO PANE-->
<script>
	import { fade }         from 'svelte/transition'
    import { ui }           from '../../../../data/stores.js'
    import { app }          from '../../../../data/realm.js'

    export let leadProjects = []
    export let leadCatchments = []

    // Reactive variables
    $: stakeholderData = $ui.state.focus.stakeholderData 
</script>


<!-- COMPONENT HTML MARKUP-->
<section id = "info-pane">
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
                {#if stakeholderData.meta.subtype}
                    {@html stakeholderData.meta.subtype} 
                {/if}
                {#if stakeholderData.meta["Focus areas"]}
                    ({@html stakeholderData.meta["Focus areas"].join(" | ") })
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

        {#if leadCatchments.length > 0}
        <div class='info-row'>
            <div class ='info-label'>Catchments:</div>
            <div class ='info-content'>
                {#each leadCatchments as catchment, index}
                <span>{(leadCatchments.length === 1 || index === leadCatchments.length - 2)? catchment : index === leadCatchments.length - 1 ? ` and ${catchment}` : `${catchment}, `} </span>
                {/each}
            </div>
        </div>
        {/if}

        <h4>&mdash;&mdash; Contact details</h4> 
        <div class='info-row'>
            <div class ='info-label'>Address:</div>
            <div class ='info-content'>
                {#if stakeholderData.contact.addressStreet}
                    {@html stakeholderData.contact.addressStreet}<br>
                {/if}         
                {#if stakeholderData.contact.addressSuburb}       
                    {@html stakeholderData.contact.addressSuburb}, 
                {/if}    
                {#if stakeholderData.contact.addressPostcode}  
                    {@html stakeholderData.contact.addressPostcode}
                {/if}    
                {#if stakeholderData.contact.addressSuburb || stakeholderData.contact.addressPostcode}
                    <br>
                {/if}   
                {#if stakeholderData.contact.addressState}  
                    {@html stakeholderData.contact.addressState}
                {/if}  
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Contact:</div>
            <div class ='info-content'> 
                {#if stakeholderData.contact.contactName}
                    {@html stakeholderData.contact.contactName}
                {:else}
                    Not provided
                {/if}  
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Email:</div>
            <div class ='info-content'>
                {#if stakeholderData.contact.contactEmail}
                    <a href="mailto:{stakeholderData.contact.contactEmail}">{@html stakeholderData.contact.contactEmail} </a>
                {:else}
                    Not provided
                {/if}  
            </div>
        </div>
        <div class='info-row'>
            <div class ='info-label'>Website:</div>
            <div class ='info-content'>
                {#if stakeholderData.contact.websiteURL}
                    <a href={stakeholderData.contact.websiteURL} target="_blank">{@html stakeholderData.contact.websiteURL}</a>
                {:else}
                    Not provided
                {/if}  
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