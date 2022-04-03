import { writable } from 'svelte/store';


export const user = writable({
    isLoggedIn:     true,
    isRegistered:   false,
})

export const ui = writable({
    toolName:           null,
    page:               'home',
    showNav:            false,
    showMenuModal:      false,
    showModal:          false,
    items: {
        pages:      []
    },
    search: {

    },
    state: {
        location:   {
            catchment:      false,
            subCatchment:   false,
            location:       false
        }
    },
    byPage:{ 
        discover: {
            main:               'list',            // Project "list" or "search"
            projectPage:        false,            // Whether the project details page is showing    
            projectID:          null,
            projectView:        'cards',       // Project "cards" or "map"
            projectSearch: {
                isMade:         false,
                type:           null,
            }
        },
        connect: {
            main:               'list',         // Connection by "list" or "search"
            stakeholderPage:    false,            // Whether the project details page is showing    
            stakeholderID:      null,
            stakeholderView:     'cards',
            stakeholderSearch: {
                isMade:         false,
                type:           null,
            }
        }
    }
})


export const content =  writable({
    project:   {
        likes:          [],
        favs:           []
    }
})
