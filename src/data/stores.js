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
            main:           'list',
            projectPage:     false,
            projectID:       null
        }
    }
})


export const content =  writable({
    project:   {
        likes:          [],
        favs:           []
    }
})
