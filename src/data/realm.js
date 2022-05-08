import * as Realm from "realm-web";
import { getRandomStockImgPath, getRandomAbstractImgPath }  from './content.js'
import {leadOrg, partnerOrg}      from './selectorLists.js'

export { 
    app, 
    initRealm, 
    loginAnonymous, 
    connectToMongoAtlas, 
    connectToCollections,
    updateSelectionLists, 
    getSimilarProjects
} 

////////////////////////////////////////////////////////////////////
//// SERVERLESS MONGODB REALM APPLICATION : LITTLE BOILERPLATE  ////
////////////////////////////////////////////////////////////////////

// Initialise the application with app state and config objects
const app = { // This object is created
    realm:              new Realm.App({ id: 'mw-collab-prototype-yxtgd'}),
    user:               null,     // User instance
    data: {
        mongo:            null,     // MongoDB Atlas handle
        collections:      {}        // MongoDB Atlas collections
    },           
    state: {
        isloggedIn:       false,
        isAnonUser:       false
    },
    config: {
        realmID:          'mw-collab-prototype-yxtgd',
        cluster:          'mongodb-atlas',
        db: {
            name:           'application',
            collections:    ['projects', 'users', 'organisations', 'interactions']
        }
    }            
}


/////////////////////////////////////////////////////////////////
/////  CONNECT TO MONGODB REALM BACKEND AND ATLAS DATABASE  /////
/////////////////////////////////////////////////////////////////

async function initRealm(app ){
    console.log('Initialising the Realm app...')
    app.realm = new Realm.App({ id: app.config.realmID})
};

async function loginAnonymous(app){
    const credentials = Realm.Credentials.anonymous();
    try {
        app.user = await app.realm.logIn(credentials);
        console.log('Anonymous user logged in...')
        return app.user        // Return authenticate the user
    } catch(err) {
        console.error("Failed to log in", err);
    }
}; 

async function connectToMongoAtlas(app) {
    app.data.mongo = app.realm.currentUser.mongoClient(app.config.cluster);
    console.log('MongoDB Atlas instance connected', app.data.mongo )
};

async function connectToCollections(app){
    for (const name of app.config.db.collections){
        app.data.collections[name] = app.data.mongo.db(app.config.db.name).collection(name)
    }
    console.log('Data collections connected', app.data.collections )
};


/////////////////////////////////////////////////////////////////
////////////////     TOOL UI SETUP FUNCTIONS     ////////////////
/////////////////////////////////////////////////////////////////

async function updateSelectionLists(app){
    console.log("Updating the selector lists based on database entries...")

    // Organisation lists
    const orgData = await app.data.collections.organisations.aggregate([
        { 
            $project: { name: 1,    _id: 0 }
        }
    ])

    leadOrg.list = orgData.map( d => d.name).sort()
    partnerOrg.list =  orgData.map( d => d.name).sort()

};


async function getSimilarProjects(projectData, simProjectStore){
    simProjectStore.byTheme = []
    simProjectStore.byProjectType = []
    simProjectStore.byProjectLead = []
    simProjectStore.byLocation = []

    // Similar by HWS theme
    if(projectData.hws.themes.length > 0){
        simProjectStore.byTheme = await app.data.collections.projects.aggregate([
            { 
                $match:  { 
                    "hws.themes" :    {$in: projectData.hws.themes},   
                    "_id" :           {$ne: projectData._id}   
                }  
            },
            { $sort:   { name: 1,  leadOrg: 1 } }
        ]) 
    }

    // Similar by project type
    if(projectData.meta.type.length > 0){
        simProjectStore.byProjectType = await app.data.collections.projects.aggregate([
            { 
                $match:  { 
                    "meta.type" :   {$in: [projectData.meta.type]},  
                    "_id" :         {$ne: projectData._id}   
                }  
                },
            { $sort:   { name: 1,  leadOrg: 1 } }
        ]) 
    }

    // Led by same project lead type
    if(projectData.leadOrg){
        simProjectStore.byProjectLead = await app.data.collections.projects.aggregate([
            { 
                $match:  { 
                    "leadOrg" :   {$in: [projectData.leadOrg]},  
                    "_id" :         {$ne: projectData._id}   
                }  
                },
            { $sort:   { name: 1,  leadOrg: 1 } }
        ]) 
    }

    // Similar by location: by location scale 
    switch(projectData.meta.scale){
        case 'regional':
            simProjectStore.byLocation = await app.data.collections.projects.aggregate([
                { 
                    $match:  { 
                        "location.catchments" : {$eg: [projectData.location.catchments]}  ,
                        "_id" :         {$ne: projectData._id}   
                    }  
                },
                { $sort:   { name: 1,  leadOrg: 1 } }
            ]) 
            break

        case 'Single catchment':
        case 'Across multiple catchments':
            simProjectStore.byLocation = await app.data.collections.projects.aggregate([
                { 
                    $match:  { 
                        "location.catchments" : {$in: [projectData.location.catchments]} ,
                        "_id" :         {$ne: projectData._id}    
                    } 
                },
                { $sort:   { name: 1,  leadOrg: 1 } }
            ]) 
            break

        case 'Single location':
        case 'Across multiple locations':
        case 'Single subcatchment':
        case 'Across multiple subcatchments':
            simProjectStore.byLocation = await app.data.collections.projects.aggregate([
                { 
                    $match:  { 
                        "location.subCatchments" : {$in: [projectData.location.subCatchments]},
                        "_id" :         {$ne: projectData._id}     
                    }  
                },
                { $sort:   { name: 1,  leadOrg: 1 } }
            ]) 
            break
    }

    console.log(simProjectStore)
};




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

