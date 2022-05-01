import App from './App.svelte';
import 'leaflet/dist/leaflet.css';
import airtable from 'airtable'

export {app} 
let app

initWithAirtableContent(initSvelteApp)

// Instantiate Svelte App
function initSvelteApp(contentData){
    const queryParams = new URLSearchParams(window.location.search)

    app = new App({
        target: document.body,
        props: {contentData, queryParams}, 
    });
}

// Get Airtable content before instantiating Svelte app
function initWithAirtableContent(initApp){
    const base = new airtable({apiKey:'key3EFjfpM7LqvZGK'}).base('app33PA35zad9gevY');
    const airtableData = []

    base('content').select({
        maxRecords: 200
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(record => airtableData.push(record.fields) )
        fetchNextPage()
    }, async function done(err) {
        if (err) { console.error(err); return; }
        initApp(airtableData)
    })
};

