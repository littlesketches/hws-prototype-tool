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

    showNav:            false,
    showMenuModal:      false,
    showHelpModal:      false,

    infoModal: {
        show:           true,      
        showNotes:      false,       // Flag for showing development user notes
        message:        {           // Default is the intro to the tool message
            buttons: [
                {
                    text:       'Explore the prototype',
                    function:   'close',
                },
            ],      
            header:         '&#9888; THIS IS A PROTOTYPE &#9888; ',
            content:        `<p>This prototype 'collaborative tool' is made to explore the concept of an online tool for waterways stakeholders to share what they're doing (or planning) in our catchments, as well their thoughts, ideas and knowledge about what's happening. 
                            With this in mind, this early  prototype focuses on establishing core project and stakeholder "search", and project or feedback "share" features that are building blocks for more sophisticated collaborative features.</p>
                            <p>The prototype is <strong>not a complete tool</strong> but is intended to be a more concrete and cohesive proof of concept suitable for: explaining the basic purpose of the tool itself, exploring design and development directions, and for testing and/or further co-design with real users. 
                                The prototype is however developed as a custom application and will (hopefully) soon feature real (but not yet'real time') project data. 
                            </p>
                            <p>This prototype is a starting point for surfacing ideas from users about the merits of an online tool, and <strong>'what else'</strong> might be needed to turn into a useful platform to foster collaboration between waterways stakeholders to take action to protect and improve the health of our waterways.
                            </p>
                            <hr>
                            <div style="display:flex; justify-content:center; text-align: center;">
                                <div class="contact" style="width: 20%; padding:0.5rem; font-size: 0.8rem; margin:auto 0">
                                    Feedback and further info: &rarr;
                                </div>
                                <div class="contact" style="width: 20%; padding:0.5rem">
                                    <div>EMAIL</div>
                                    <div style="font-size: 0.8rem">Get in touch directly</div>
                                </div>
                                <div style="width: 20%; padding:0.5rem">
                                    <div>AIRTABLE</div>
                                    <div style="font-size: 0.8rem">Issues and suggestions</div>
                                </div>
                                <div style="width: 20%; padding:0.5rem">
                                    <div>FIGMA</div>
                                    <div style="font-size: 0.8rem">UI/UX design</div>
                                </div>
                                <div style="width: 20%; padding:0.5rem">
                                    <div>GITHUB</div>
                                    <div style="font-size: 0.8rem">Code repository</div>
                                </div>
                            </div>
                            <hr>
                            `                        
        }
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
    },
    state: {
        showNav:                false,
        showMenuModal:          false,
        showHelpModal:          false,
        focus: {
            projectData:            null,
            stakeholderData:        null,
            projectComments:        null
        },
        location:{
            catchment:              false,
            subCatchment:           false,
            location:               false
        }
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

    }
})
