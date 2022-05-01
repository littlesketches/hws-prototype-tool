// Data store objects: temporarily loaded
import { writable } from 'svelte/store';

export const database = writable({
    // projects:               null,
    users:                  null,
    organisations:          null,
    interactions:           null
})