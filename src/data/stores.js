import { writable } from 'svelte/store';


export const user = writable({
    isLoggedIn:     true,
    isRegistered:   false,
})

export const ui = writable({
    page:           'discover',
    showNav:        false,
    showMenuModal:  false,
    showModal:      false,
    items: {
        pages:      []
    },
    state: {
        location:   {
            catchment:      false,
            subCatchment:   false,
            location:       false
        }
    }
})
