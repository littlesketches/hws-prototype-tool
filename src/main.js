import App from './App.svelte';
import 'leaflet/dist/leaflet.css';
import airtable from 'airtable'

export {app} 
let app

const queryParams = new URLSearchParams(window.location.search)


// Airtable CMS
const base = new airtable({apiKey:'key3EFjfpM7LqvZGK'}).base('app33PA35zad9gevY');
const airtableData = []

base('content').select({
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(record => airtableData.push(record.fields) )
    fetchNextPage()
}, async function done(err) {
    app = new App({
        target: document.body,
        props: {airtableData, queryParams}, 
    });

    if (err) { console.error(err); return; }
})





