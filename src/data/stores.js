// User interface store objects
import { writable } from 'svelte/store';

export const user = writable({
    isLoggedIn:         true,
    isRegistered:       true,
    data: {
        sharedProjects:        null,
        draftProjects:         null,
        watchListProjects:     null,
        interactions:          []
    },
    details: {
        firstName:      'Happy',
        lastName:       'User',
        organisation:   'Tyrell Corporation',
        userID:         'user',
        username:       'username',
    }
})

export const ui = writable({
    toolName:           null,
    page:               'home',
    state: {
        showNav:                false,
        showMenuModal:          false,
        showHelpModal:          false,
        focus: {
            projectData:            null,
            stakeholderData:        null,
            projectComments:        null
        },
    },
    byPage:{ 
        discover: {
            main:                   'list',         // Project "list" or "search"
            overlay:                 false,         // Whether the project details overlay page is showing    
            projectView:            'cards',        // Project "cards" or "map"
            projectSearch: {
                isMade:             false,
            }
        },
        connect: {
            main:                   'list',         // Connection by "list" or "search"
            overlay:                false,          // Whether the stakeholder/project overlay page is showing    
            stakeholderView:        'cards',        // Project "cards" or "network"
            stakeholderSearch: {
                isMade:             false,
            }
        },
        share: {
            main:                   'search',      // Project "list" or "search"
            overlay:                false,         // "newProject", "projectSearch", or "project"
            projectView:            'cards',       // Project "cards" or "map"
            projectSearch: {
                isMade:             false,
            }
        },
        join: {
            form:                   'newUser'       // 'newUser' or  'login'
        },
        manage: {
            overlay:                false,         // "newProject", "editProject" or "project"
        }

    },
    infoModal: {
        show:           true,      
        showNotes:      true,       // Flag for showing development user notes
        message:        {           // Default is the intro to the tool message
            buttons: [
                {
                    text:       'Explore the prototype',
                    function:   'close',
                },
            ],      
            header:         '&#9888; THIS IS A PROTOTYPE &#9888; ',
            content:        `<p>This 'prototype collaborative tool' is made to explore the concept of an online tool for all waterways stakeholders to share what they're doing or planning to do (that we simply term as 'projects'), as well their thoughts and knowledge about what else is happening.                             
                            This early prototype focuses on establishing core features for project and stakeholder "search", and for "sharing" new projects or feedback.
                            We think of these as building blocks for more sophisticated collaborative features that might be later co-designed with users of the Tool.</p>
                            <p>The prototype is <strong>not a complete tool</strong> but is intended to be a more concrete and cohesive proof of concept suitable for: explaining the basic purpose of the tool itself, exploring design and development directions, and for testing and/or further co-design with real users. 
                                The prototype is however developed as a custom application and will (hopefully) soon feature real (but not yet'real time') project data. 
                            </p>
                            <p>This prototype is a starting point for surfacing ideas from users about the merits of an online tool, and <strong>'what else'</strong> might be needed to turn into a useful platform to foster collaboration between waterways stakeholders to take action to protect and improve the health of our waterways.
                            </p>
                            <hr>
                            <div style="display:flex; justify-content:center; text-align: center; color: #fff">
                                <div class="contact" style="width: 20%; padding:0.5rem; font-size: 0.8rem; margin:auto 0">
                                    Feedback and further info: &rarr;
                                </div>
                                <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                    <a style = "color: #fff" href="mailto:Gail.Hall@melbournewater.com.au?subject=MW Collaborative Tool Prototype&cc=brendan@littlesketch.es">
                                        <div style="font-size: 3rem">&#9993;</div>
                                        <div style="font-size: 0.8rem">Email the prototype team directly</div>
                                    </a>
                                </div>
                                <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                    <a style = "color: #fff" >
                                       <div style="font-size: 3rem">&quest;</div>
                                        <div style="font-size: 0.8rem">Issues and suggestions (Airtable)</div>
                                    </a>
                                </div>
                                <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                    <a style = "color: #fff" >
                                        <div style="font-size: 3rem">&#x2692;</div>
                                        <div style="font-size: 0.8rem">UI/UX wireframes + feedback (Figma)</div>
                                    </a>
                                </div>
                                <div style="width: 20%; padding:0.5rem; cursor:pointer">
                                    <a style = "color: #fff"  href="https://github.com/littlesketches/mw-collab-tool-proto" target="_blank">
                                        <div style="font-size: 3rem">< /></div>
                                        <div style="font-size: 0.8rem">Code repository + documentation (Github)</div>
                                    </a>
                                </div>
                            </div>
                            <hr>
                            `                        
        },
        // message:        null
    },
    map:{
        style:          'tonerBG',
        attribution:    false,
        data:           {}
    },
    items: {
        pages:              []
    },
    search: {
        project:            [],
        organisation:       []
    },
    newProject:             null,
    editProject: {
        id:                     null,
        data:                   null
    }
})
