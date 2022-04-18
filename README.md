# Healthy Waterways Collaboration Tool Prototype

Current status: in early Prototype design and development



<br>

## About this prototype
This repository is 





<br>
## About the technology used
The initial prototype is built using Svelte for initial UI/UX and data flow design and testing, and will likely be upgraded to SvelteKit in later iterations. Other libraries for data visualisation (D3.js) and mapping (ESRI Javascript SDK? )

A MongoDB database hosted with MongoDB's Atlas (cloud) service is used for data storage. And the boilerplate backend functions (e.g. authorisation and external API functions), are handled with a MongoDB Realm serverless backend. 

So for the prototype... 
=> Svelte is the main frontend technology, and the 
=> MongoDB suite of tools are used to handle the tools backend functionality.




## Notes

Initial prototype deployment and testing is through a static hosting services (Github). This is likely to be later changed to Vercel or Heroku (e.g. if deployed for a pilot for public testing) 

Git Command to push a gh-pages subtree for publishing the build version via Github Pages

    git subtree push --prefix public/ origin gh-pages


Remove anon uses from Realm CLI
`realm-cli users delete -a mw-collab-prototype-yxtgd`


