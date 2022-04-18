import * as Realm from "realm-web";
import { getRandomStockImgPath }  from './content.js'
import {leadOrg, partnerOrg}      from './multiSelect.js'

export { 
  app, 
  initRealm, 
  loginAnonymous, 
  connectToMongoAtlas, 
  connectToCollections,
  deleteAnonUser,
  deleteAllUsers,
  findRecord,
  setupLocalStore,
  updateMultiSelect
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
      collections:    ['projects', 'users', 'organisations']
    }
  }            
}

// Functions to connect to MongoDB Realm backend and Atlas databases
async function initRealm(app){
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

////////////////////////////////////////

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

async function updateMultiSelect(store){
  console.log(store)
  console.log("Updating the multiselect objects...")
  leadOrg.list = store.organisations.map( d => d.name).sort()
  partnerOrg.list =  store.organisations.map( d => d.name).sort()
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

