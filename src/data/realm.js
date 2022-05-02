import * as Realm from "realm-web";
import { getRandomStockImgPath, getRandomAbstractImgPath }  from './content.js'
import {leadOrg, partnerOrg}      from './selectorLists.js'

export { 
    app, 
    initRealm, 
    loginAnonymous, 
    connectToMongoAtlas, 
    connectToCollections,
    updateSelectionLists
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
//// TOOL UI SETUP FUNCTIONS
/////////////////////////////////////////////////////////////////

async function updateSelectionLists(app){
    console.log("Updating the selector lists based on database entries...")


    // Organisation lists
    const orgData = await app.data.collections.organisations.aggregate([
        { 
            $project: { name: 1 }
        }
    ])

    leadOrg.list = orgData.map( d => d.name).sort()
    partnerOrg.list =  orgData.map( d => d.name).sort()

    // Organsation type



};





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




async function deleteAnonUser(app){
    console.log('Removing user from database: ', app.user)
    app.realm.removeUser(app.user)
};

async function deleteAllUsers(app){
    const userArray = [...app.realm.users]
    for( const user of userArray){
        app.realm.removeUser(user)
    }
};

/////////////////////////////////////////////////////////////////
///// Query the database collections
/////////////////////////////////////////////////////////////////

async function searchProjects(query = {}, projection = {} ){

    console.log(app.data.collections.projects)
    console.log(query)
    console.log(projection)

    return await app.data.collections.projects
        .find(query, projection)

};

async function setupLocalStore(app, store){
    console.log("Storing database as store...")
    for (const name of Object.keys(store)){
        store[name] = await app.data.collections[name].find({})
            .then(result => {
                if(result) {
                    console.log(`- ${name} stored`);     
                    return result;
                } else {
                console.log("No documents found");
                }
            })
            .catch(err => console.error(`Failed to find documents: ${err}`));
    }
};




////////////////////////////////////////


async function testConnection(app){
  await initRealm(app)
  await loginAnonymous(app)
  await connectToMongoAtlas(app)
  await connectToCollections(app)
  await findRecord(app)
};

async function findRecord(app, collectionName){
  console.log('Trying to find record...')

  const findResult = app.data.collections.projects.findOne({ 
      "name": "Project #1" 
    })
    .then(result => {
      if(result) {
        console.log(`Successfully found document:`, result);
      } else {
        console.log("No document matches the provided query.");
      }
      return result;
    })
    .catch(err => console.error(`Failed to find document: ${err}`));


};

