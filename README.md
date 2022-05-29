# Healthy Waterways "Implementation Hub" Prototype

Current status: in early Prototype design and development

<br>

## About this prototype
This repository holds code base and technical documentation for Melbourne Water's prototype "Implementation Hub" application. The prototype was developed in the first half of 2022 and aims to provide Melbourne Water with a concrete example of concept that was originally codenamed the (Healthy waterways) "Collaborative Tool". Some key aims of the prototype are to have:
    - a fully navigable application with a neutral design template: suitable for demonstration and gathering stakeholder and user feedback 
    - functional 'core' features of the application with the framework for user authentification and database/data storage available, but not (yet) implemented
    - a basic 'content management system' to allow rapid drafting and editing of the application itself.

## Technical documentation

More documentation will be added soon:




## Useful links
- [Airtable as a micro CMS](https://airtable.com/app33PA35zad9gevY/tblcb8rqqPah2cQKy/viwVLNEIctGKr3Zot?blocks=hide) (Public): an Airtable base has been connected to the prototype app to allow for ongoing content drafting (note: Airtable is used as a workaround for GSheet being blocked internally at MW). The content (Airtable) is parsed and assigned to objects (see ./data/content.js) that are imported to each Svelte component, as required.

Note: the Airtable apiKey is exposed in this codebase is fore a free account. Content is ultimately expected to be hardcoded and this micro CMS feature removed.

- [Figma wireframe board](https://www.figma.com/file/Kp2lrQynVAIS5tAlMy8whO/Prototype-wireframe-design?node-id=0%3A1) (Public): A shared online whiteboard showing all prototype features with design notes/rationale. This board is intended to be used in both presentation and to assist in gathering feedback and suggestions from users. Because the wirferame is a 'snapshot' of th prototype, it may not be fully up to date with the latest version.

- [MongoDB Realm serverless application](https://realm.mongodb.com/groups/622800b8c76f194c1b61df66/apps/62280e8a1d344975325a266d/dashboard) (Private): the [Realm service / app](https://www.mongodb.com/realm) that has been setup to connect a [MongoDB (Atlas)](https://www.mongodb.com/atlas) database to the prototype.


<br>
## About the technology used
The  prototype is built using Svelte for initial UI/UX and data flow design and testing. This can easily be upgraded to (the more sophisticated) SvelteKit framework in later iterations. Other libraries for data visualisation (D3.js) and mapping (LeafletJS) are included as required

A MongoDB database hosted with MongoDB's Atlas (cloud) service is used for data storage. And the boilerplate backend functions (e.g. authorisation and external API functions), are handled with a MongoDB Realm serverless backend. 

So for the prototype... 
=> Svelte is the main frontend technology, and the 
=> MongoDB suite of tools are used to handle the tools backend functionality.




## Notes

Initial prototype deployment and testing is through a static hosting services (Github). This is likely to be later changed to Vercel or Heroku (e.g. if deployed for a pilot for public testing) 


### Github pages deployment notes

Git Command to push a gh-pages subtree for publishing the build version via Github Pages

    git subtree push --prefix public/ origin gh-pages


### Realm app CLI command to remove anonymous users

    realm-cli users delete -a mw-collab-prototype-yxtgd


