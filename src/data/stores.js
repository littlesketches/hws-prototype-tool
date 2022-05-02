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
        showNotes:      false,       // Flag for showing development user notes
        message:        null
    },
    map:{
        context:        null,
        style:          'tonerBG',
        attribution:    false,
        data:           {
            focus: {
                catchments:         null,
                subCatchments:      null,
                locations:          null,
                polygon:            null,
                points:             null
            }
        }
    },
    items: {
        pages:              []
    },
    search: {
        criteria: {
            project:                null,
            organisation:           null,
        },
        results: {
            project:            [],
            organisation:       []
        }

    },
    newProject:             null,
    editProject: {
        id:                     null,
        data:                   null
    }
})
