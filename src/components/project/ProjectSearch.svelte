<!-- DISCOVER PAGE COMPONENT-->
<script>
    import { ui } from '../../data/stores.js'
    import { projectSchema, locationMap, locationTree } from '../../data/schema.js'
	import { slide } from "svelte/transition";

    ////// COLLAPSIBLE SEARCH PANES ////
	const paneVisbility= {
        byOutcomes:      false,
        byProject:      false,
        byOrg:          false,
        byLocation:     false
    }

    function togglePane(){
        paneVisbility[this.id] = ! paneVisbility[this.id]
        console.log(`Toggling ${this.id} vis to `, paneVisbility[this.id])
    }

    ////// SEARCH FORMS ///////
    const catchmentEntries = [...locationTree.entries()]
    const capitaliseFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    function handleSubmit(){
        $ui.byPage.discover.main = 'list'
        console.log('Handling submit')
    };
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
            <form id = "search-form" >
                <ul class="flex-outer">
                    <li>
                        <label for = "catchment">by catchment</label>
                        <select id="catchment" name = "catchment">
                        {#each catchmentEntries as entry}
                            <option name = {entry[0]}>{@html entry[0]}</option>
                        {/each}
                        </select>
                    </li>
                </ul>
            </form>
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
            <form id = "search-form" >
                <ul class="flex-outer">
                    <li>
                        <label for = "catchment">by catchment</label>
                        <select id="catchment" name = "catchment">
                        {#each catchmentEntries as entry}
                            <option name = {entry[0]}>{@html entry[0]}</option>
                        {/each}
                        </select>
                    </li>
                </ul>
            </form>
        </div>
        {/if}
    </div>

    <div class = "container">
        <div id = "byProject" class="collapse__header" on:click={togglePane}>
            <h3>Characteristics</h3>
        </div>
        {#if paneVisbility.byProject}
        <div class = "collapse__body"  transition:slide>
            <form id = "search-form" >
                <ul class="flex-outer">
                    <li>
                        <label for = "projectLeadOrg">Lead organisation type</label>
                        <select id="projectLeadOrg"  name = "projectLeadOrg">
                            {#each projectSchema.group as group}
                            <option name = {group} >{@html capitaliseFirst(group)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectGroup">Group</label>
                        <select id="projectGroup" name = "projectGroup">
                            {#each projectSchema.group as group}
                            <option name = {group} >{@html capitaliseFirst(group)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectStage">Project stage</label>
                        <select id="projectStage" name = "projectStage">
                            {#each projectSchema.stage as stage}
                            <option name = {stage} >{@html capitaliseFirst(stage)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectClass">Project class</label>
                        <select id="projectClass" name = "projectStage">
                            {#each projectSchema.class as projecClass}
                            <option name = {projecClass} >{@html capitaliseFirst(projecClass)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectScale">Scale</label>
                        <select id="projectScale" name = "projectScale">
                            {#each projectSchema.scale as scale}
                            <option name = {scale} >{@html capitaliseFirst(scale)}</option>
                            {/each}
                        </select>
                    </li>

                    <!-- <li>
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Enter your last name here">
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email here">
                    </li>
                    <li>
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" placeholder="Enter your phone here">
                    </li>
                    <li>
                        <label for="message">Message</label>
                        <textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
                    </li> -->
                    <!-- <li>
                        <p>Age</p>
                        <ul class="flex-inner">
                            <li>
                                <input type="checkbox" id="twenty-to-twentynine">
                                <label for="twenty-to-twentynine">20-29</label>
                            </li>
                            <li>
                                <input type="checkbox" id="thirty-to-thirtynine">
                                <label for="thirty-to-thirtynine">30-39</label>
                            </li>
                            <li>
                                <input type="checkbox" id="fourty-to-fourtynine">
                                <label for="fourty-to-fourtynine">40-49</label>
                            </li>
                            <li>
                                <input type="checkbox" id="fifty-to-fiftynine">
                                <label for="fifty-to-fiftynine">50-59</label>
                            </li>
                            <li>
                                <input type="checkbox" id="sixty-to-sixtynine">
                                <label for="sixty-to-sixtynine">60-69</label>
                            </li>
                            <li>
                                <input type="checkbox" id="other">
                                <label for="other">Other</label>
                            </li>
                        </ul>
                    </li> -->
                    <li>
                        <button on:click|preventDefault={handleSubmit}>Search</button>
                    </li>
                </ul>
            </form>
        </div>
        {/if}
    </div>

    <div class = "container">
        <div id = "byOrg" class="collapse__header" on:click={togglePane}>
            <h3>Stakeholders</h3>
        </div>
        {#if paneVisbility.byOrg}
        <div class = "collapse__body" transition:slide>
            <form id = "search-form" >
                <ul class="flex-outer">
                    <li>
                        <label for = "projectLeadOrg">Lead organisation type</label>
                        <select id="projectLeadOrg"  name = "projectLeadOrg">
                            {#each projectSchema.group as group}
                            <option name = {group} >{@html capitaliseFirst(group)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectGroup">Group</label>
                        <select id="projectGroup" name = "projectGroup">
                            {#each projectSchema.group as group}
                            <option name = {group} >{@html capitaliseFirst(group)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectStage">Project stage</label>
                        <select id="projectStage" name = "projectStage">
                            {#each projectSchema.stage as stage}
                            <option name = {stage} >{@html capitaliseFirst(stage)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectClass">Project class</label>
                        <select id="projectClass" name = "projectStage">
                            {#each projectSchema.class as projecClass}
                            <option name = {projecClass} >{@html capitaliseFirst(projecClass)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <label for = "projectScale">Scale</label>
                        <select id="projectScale" name = "projectScale">
                            {#each projectSchema.scale as scale}
                            <option name = {scale} >{@html capitaliseFirst(scale)}</option>
                            {/each}
                        </select>
                    </li>
                    <li>
                        <button on:click|preventDefault={handleSubmit}>Submit</button>
                    </li>
                </ul>
            </form>
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
    }
    ul{
        list-style-type: none;
        border: 0;
        margin: 0;
        margin-block-start: 0  ;
        margin-block-end: 0  ;
        padding-inline-start: 0;
    }

    .search{
        grid-area: search;    
        background: rgb(238, 238, 238);
        padding: 1rem;
        max-width: 100%;
    }
    .container * {
        box-sizing: border-box;
    }
    #search-term{
        padding: 0.75rem 0.5rem;
        margin-bottom: 0.75rem;
    }

    #search-term,
    .button-container button{
        cursor: pointer;
        width: 100%;
    }

    /* COLLAPSIBLE PANE STYLING */
	.collapse__header {
        display: flex;
	    padding: 1rem 0rem;
	    border-top: 0.75px solid grey;
	    transition: background 200ms ease-in-out;
	}
	.collapse__header:hover {
	  background: #f7f7f7;
	}
	.collapse__body {
	  padding: 1rem;
	  background: #f0f0f0;
	}



    /* FORM STYLING */
    .flex-outer,
    .flex-inner {
        list-style-type: none;
        padding: 1rem;
    }

    .flex-outer {
        max-width: 800px;
        margin: 0 auto;
    }

    .flex-outer li,
    .flex-inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .flex-inner {
        padding: 0 8px;
        justify-content: space-between;  
    }

    .flex-outer > li:not(:last-child) {
        margin-bottom: 20px;
    }

    .flex-outer li label,
    .flex-outer li p {
        padding: 8px;
        font-weight: 300;
        text-transform: lowercase;
    }

    .flex-outer > li > label,
    .flex-outer li p {
        flex: 1 0 120px;
        max-width: 220px;
    }

    .flex-outer > li > label + *,
    .flex-inner {
        flex: 1 0 220px;
    }

    .flex-outer li p {
        margin: 0;
    }

    .flex-outer li input:not([type='checkbox']),
    .flex-outer li select,
    .flex-outer li textarea {
        padding: 15px;
        border: none;
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
    }
    button:hover{
        font-weight: 600;
    }
    .flex-inner li {
        width: 100px;
    }

</style>