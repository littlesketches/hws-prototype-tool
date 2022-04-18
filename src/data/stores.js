// User interface store objects
import { writable } from 'svelte/store';

export const user = writable({
    isLoggedIn:         true,
    isRegistered:       true,
    data: {
        projects:               null,
        bookmarkedProjects:     null,
        interactions:           []

    }
})

export const ui = writable({
    toolName:           null,
    page:               'home',
    showNav:            false,
    showMenuModal:      false,
    showHelpModal:      false,
    items: {
        pages:              []
    },
    search: {
        project:            {},
        organisation:       {}
    },
    newProject:             null,
    editProject: {
        id:                 null,
        data:               null
    },
    state: {
        focus: {
            projectData:            null,
            stakeholderData:        null,
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
                type:               null,
            }
        },
        connect: {
            main:                   'list',         // Connection by "list" or "search"
            overlay:                false,          // Whether the stakeholder/project overlay page is showing    
            stakeholderView:        'cards',        // Project "cards" or "network"
            stakeholderSearch: {
                isMade:             false,
                type:               null,
            }
        },
        share: {
            main:                   'search',      // Project "list" or "search"
            overlay:                false,         // "newProject", "projectSearch", or "project"
            projectView:            'cards',       // Project "cards" or "map"
            projectSearch: {
                isMade:             false,
                type:               null,
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

export const content =  writable({
    project:   {
        likes:          [],
        favs:           []
    }
})

