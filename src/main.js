import App from './App.svelte';
import 'leaflet/dist/leaflet.css';
import airtable from 'airtable'
import { schema } from './data/schema.js'
import { createSelectorLists } from './data/selectorLists'

export {app} 
let app

initWithAirtableContent(initSvelteApp)

// Instantiate Svelte App with content and queryParams as props
function initSvelteApp(contentData, schemaData){

    const queryParams = new URLSearchParams(window.location.search)
    app = new App({
        target: document.body,
        props: {contentData, queryParams, schemaData}
    });
}

// Get Airtable content before instantiating Svelte app
function initWithAirtableContent(initApp){
    const apiKey = 'key3EFjfpM7LqvZGK'
    const contentBase = new airtable({apiKey}).base('app33PA35zad9gevY');
    const schemaBase = new airtable({apiKey}).base('app8dc1a7gBmIOnLG');
    const airtableData = []

    // Schema data
    for (const tableName of Object.keys(schema) ){
        schemaBase(`s_${tableName}`).select({
            maxRecords: 30
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(record => {
                const cleanRecord = {} 
                for( const field of schema[tableName].fields){
                    cleanRecord[field] = record.fields[field]
                }

                schema[tableName].data.push(cleanRecord) 
            })
            fetchNextPage()
        })
    }
    // Content database

    contentBase('content').select({
        maxRecords: 200
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(record => airtableData.push(record.fields) )
        fetchNextPage()

    }).then( async() => {
        // Get the Schema data

    }).then( async (result) => {
        initApp(airtableData, schema)
    })
};
