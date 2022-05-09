import { tsv } from 'd3'
import { compute_rest_props } from 'svelte/internal'
import { ui } from './stores.js'	 

export { 
    componentContent,
    getMenuOptions, 
    getPageInfo, 
    extractContent,
    getRandomStockImgPath, 
    getRandomAbstractImgPath,
    getRandomStockSplashImgPath,
    infoModal
}

let infoModal


//////////////////////////////////////////////////////////////////////
////////////////////      EXPORTED METHODS        ////////////////////
//////////////////////////////////////////////////////////////////////

function getMenuOptions(user){
    if(user.isRegistered){
        return pages.manage.concat(pages.core)     // "MyAccount" option would be first
    } else {
        return pages.core.concat(pages.join)           // "Join" goes last (includes login)
    }
};

function getPageInfo(name){ 
    return pages.core
        .concat(pages.join)
        .concat(pages.manage)
        .filter(d => d.name.toLowerCase() === name.toLowerCase())
}; 

function getRandomStockImgPath(index){
    if(index){
        return `./static/img/stock/${stockWaterwaysImgNames[index]}`
    } else {
        return `./static/img/stock/${stockWaterwaysImgNames[Math.floor(Math.random()*stockWaterwaysImgNames.length)]}`
    }
};

function getRandomAbstractImgPath(index){
    if(index){
        return `./static/img/abstract/${abstractImgNames[index]}`
    } else {
        return `./static/img/abstract/${abstractImgNames[Math.floor(Math.random()*abstractImgNames.length)]}`
    }
};

function getRandomStockSplashImgPath(index){
    if(index){
        return `./static/img/stock/splash/${stockSplashNames[index]}`
    } else {
        return `./static/img/stock/splash/${stockSplashNames[Math.floor(Math.random()*stockSplashNames.length)]}`
    }
};


//////////////////////////////////////////////////////////////////////
////////// TOOL CONTENT: MANAGE TEXT & HTML FROM MICRO CMS  //////////
//////////////////////////////////////////////////////////////////////

let toolName = 'Implementation hub'
let pages = {}
const componentContent = {
        title:          {},
        about:          {},
        discover: {
            info:       {}
        },
        connect: {
            info:       {}
        },
        share: {
            new:        {},
            existing:   {}
        },
        join: {
            info:       {}
        },
        manage: {
            info:       {},
            projects:   {}
        },
        misc:           {},
        info: {
            home:       {},
            manage:     {},
            discover:   {},
            connect:    {},
            share:      {},
            join:       {},
        },
        messageModal:   {}
}

async function extractContent(data){
    // console.log("Loaded content data: ", data)

    const getHTML = (ref) => data.filter(d => d.reference === ref).length > 0 ? data.filter(d => d.reference === ref)[0].content : ''

    toolName = getHTML('toolName')

    // 1. Extract and shape the "Pages section" content
    pages = {
        core:  [
            {
                name:               getHTML('page.core.Discover.name'),
                shortDesc:          getHTML('page.core.Discover.shortDesc'),
                TitleBlock: {
                    title:          getHTML('page.core.Discover.TitleBlock.title'),
                    instruction:    getHTML('page.core.Discover.TitleBlock.instruction')
                }
            },
            {
                name:               getHTML('page.core.Connect.name'),
                shortDesc:          getHTML('page.core.Connect.shortDesc'),
                TitleBlock: {
                    title:          getHTML('page.core.Connect.TitleBlock.title'),
                    instruction:    getHTML('page.core.Connect.TitleBlock.instruction')
                }
            },
            {
                name:               getHTML('page.core.Share.name'),
                shortDesc:          getHTML('page.core.Share.shortDesc'),
                TitleBlock: {
                    title:          getHTML('page.core.Share.TitleBlock.title'),
                    instruction:    getHTML('page.core.Share.TitleBlock.instruction')
                }   
            }
        ],

        join: [
            {
                name:               getHTML('page.join.name'),
                shortDesc:          getHTML('page.join.shortDesc'),
                TitleBlock: {
                    title:          getHTML('page.join.TitleBlock.title'),
                    instruction:    getHTML('page.join.TitleBlock.instruction')
                }   
            }
        ],

        manage: [
            {
                name:               getHTML('page.manage.name'),
                shortDesc:          getHTML('page.manage.shortDesc'),
                TitleBlock: {
                    title:          getHTML('page.manage.TitleBlock.title'),
                    instruction:    getHTML('page.manage.TitleBlock.instruction')
                }   
            }
        ]
    }

    // 2. Extract and shape "Component" content 
    componentContent.title = {
        subHeading:      getHTML('toolSubHeader'),
        mainHeading:     `${toolName}`,
        tagline:         getHTML('toolTagline')
    }

    for (const d of data.filter( d => d.reference.startsWith('component.about')) ){
        componentContent.about[d.reference.slice('component.about'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.discover.info')) ){
        componentContent.discover.info[d.reference.slice('component.discover.info'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.connect.info')) ){
        componentContent.connect.info[d.reference.slice('component.connect.info'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.connect.info')) ){
        componentContent.connect.info[d.reference.slice('component.connect.info'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.share.new')) ){
        componentContent.share.new[d.reference.slice('component.share.new'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.share.existing')) ){
        componentContent.share.existing[d.reference.slice('component.share.existing'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.join.info')) ){
        componentContent.join.info[d.reference.slice('component.join.info'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.manage.info')) ){
        componentContent.manage.info[d.reference.slice('component.manage.info'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('component.manage.projects')) ){
        componentContent.manage.projects[d.reference.slice('component.manage.projects'.length + 1)] = getHTML(d.reference)
    }

    for (const d of data.filter( d => d.reference.startsWith('info.home')) ){
        componentContent.info.home[d.reference.slice('info.home'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('info.manage')) ){
        componentContent.info.manage[d.reference.slice('info.manage'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('info.discover')) ){
        componentContent.info.discover[d.reference.slice('info.discover'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('info.connect')) ){
        componentContent.info.connect[d.reference.slice('info.connect'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('info.share')) ){
        componentContent.info.share[d.reference.slice('info.share'.length + 1)] = getHTML(d.reference)
    }
    for (const d of data.filter( d => d.reference.startsWith('info.join')) ){
        componentContent.info.join[d.reference.slice('info.join'.length + 1)] = getHTML(d.reference)
    }

    for (const d of data.filter( d => d.reference.startsWith('messageModal')) ){
        componentContent.messageModal[d.reference.slice('messageModal'.length + 1)] = getHTML(d.reference)
    }

    for (const d of data.filter( d => d.reference.startsWith('component.misc')) ){
        componentContent.misc[d.reference.slice('component.misc'.length + 1)] = getHTML(d.reference)
    }

    // 3. Create info modal content
    infoModal = {
        toolGovernance: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `About the development and governance of the Tool.`,
            content:         componentContent.messageModal.aboutToolGovernance
        },
        otherResources: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `Other resources`,
            content:         componentContent.messageModal.aboutOtherResources
        },
        toolGuidance: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `About help and guidance in the Tool.`,
            content:         componentContent.messageModal.aboutToolGovernance
        },
        projectSearch: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Project search is not fully functional`,
            content:         componentContent.messageModal.projectSearch
        },
        projectMap: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Map features are yet to be added`,
            content:         componentContent.messageModal.projectMap
        },
        stakeholderSearch: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Stakeholder search is not fully functional`,
            content:         componentContent.messageModal.stakeholderSearch
        },
        stakeholderNetwork: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Stakeholder network visualisation is not functional`,
            content:         componentContent.messageModal.stakeholderNetwork
        },
        createAccount: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Create and account is not fully functional`,
            content:         componentContent.messageModal.createAccount
        },
        login: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Login is "faked"`,
            content:         componentContent.messageModal.login
        },
        newProjectPage: {
            buttons:        [{ text: 'Ok, got it!', function:  'close', }],
            header:         `&#9888; Adding/editing a project is not fully functional"`,
            content:         componentContent.messageModal.newProjectPage
        }

    }
};

/////////////////////////////////////////////////////
/* Stock image filenames */

const stockWaterwaysImgNames = [
    "pexels-our-life-in-pixels-7044614.jpg",
    "oak-g0c3060d01_640.jpg",
    "river-g0b82092e4_640.jpg",
    "pexels-pat-whelen-5614640.jpg",
    "landscape-g706ac6ac3_640.jpg",
    "outdoor-g24f1bfea3_640.jpg",
    "nature-g119345a8e_640.jpg",
    "trees-g0fb2b2a74_640.jpg",
    "pexels-pat-whelen-5614637.jpg",
    "river-g75c5ffce1_640.jpg",
    "pexels-matthew-montrone-1179225.jpg",
    "australia-g55a9e9ecb_640.jpg",
    "river-gc963f2535_640.jpg",
    "park-g003d6711b_640.jpg",
    "bridge-g3ecf6639e_640.jpg",
    "creek-gbd505defb_640.jpg",
    "rainforest-gf95400197_640.jpg",
    "pexels-pat-whelen-6742507.jpg",
    "creek-gec33c0f5c_640.jpg",
    "river-gdc7bcb49d_640.jpg",
    "river-g69c8544f8_640.jpg",
    "tasmania-gdbcd44d51_640.jpg",
    "creek-g95689ee28_640.jpg",
    "australia-g0781e5f38_640.jpg",
    "creek-gd490b2825_640.jpg",
    "australia-g3624534c8_640.jpg",
    "boat-ge5ac2be28_640.jpg",
    "waterfall-g7b3cf82fe_640.jpg",
    "melbourne-g556942c08_640.jpg",
    "australia-g27ff2d0a1_640.jpg",
    "sunset-g64f757897_1280.jpg",
    "serene-g69ad65269_640.jpg",
    "flood-g39b39d85d_640.jpg",
    "canyon-gae9ea23d1_640.jpg",
    "yarra-river-g017aabba4_640.jpg",
    "murray-river-gd83bb57da_640.jpg",
    "pexels-pat-whelen-5766206.jpg",
    "pexels-tiff-ng-2097616.jpg",
    "australia-gbaf853e1e_640.jpg",
    "pexels-nicole-avagliano-2152399.jpg",
    "pelicans-gd2c26f9ac_640.jpg",
    "beach-gf2913d919_640.jpg",
    "pexels-oskar-smethurst-6113322.jpg",
    "yellow-water-g3b7f38740_640.jpg",
    "australia-gf97c60c79_640.jpg",
    "melbourne-g08df392d5_640.jpg",
    "pexels-pat-whelen-5579773.jpg",
    "orange-g6c9ba3f45_640.jpg",
    "nature-ga71b3b818_640.jpg",
    "pexels-finn-whelen-5994251.jpg",
    "paddle-boat-g7b00ba9f7_640.jpg",
    "pexels-finn-whelen-6209254.jpg",
    "river-g9a121dedd_640.jpg",
    "pexels-pat-whelen-7328648.jpg",
    "kookaburra-g17426e67a_640.jpg",
    "melbourne-g0404fbfda_640.jpg",
    "australia-g2df671d35_640.jpg",
    "pexels-felix-haumann-3626248.jpg",
    "pexels-pat-whelen-7328644.jpg",
    "pexels-julia-foroni-4664660.jpg",
    "lake-ga55a46fb8_640.jpg",
    "pexels-robert-stokoe-11088585.jpg",
    "pexels-lukas-kloeppel-7777639.jpg",
    "mist-g550405cfa_640.jpg",
    "pexels-finn-whelen-6122285.jpg",
    "pexels-kat-smith-551616.jpg",
    "australian-coot-g529803747_640.jpg",
    "pexels-finn-whelen-5994252.jpg",
    "pexels-pat-whelen-5614720.jpg",
    "pexels-lukas-kloeppel-7777638.jpg",
    "pexels-brittany-87812.jpg",
    "pexels-finn-whelen-6122286.jpg",
    "river-gba83e3dd1_640.jpg",
    "pexels-damon-hall-3041589.jpg",
    "pexels-damon-hall-2336600.jpg",
    "lake-g16baf4910_640.jpg",
    "fishing-g8232b4022_640.jpg",
    "pexels-quang-nguyen-vinh-2172499.jpg",
    "pexels-monique-laats-733090.jpg",
    "pexels-jan-kopřiva-3811727.jpg",
    "pexels-jan-prokes-670237.jpg",
    "pexels-sam-lion-5733177.jpg",
    "pexels-josh-hild-2662182.jpg",
    "pexels-rachel-claire-4857752.jpg",
    "pexels-tobias-bjørkli-2230444.jpg",
    "pexels-artur-roman-534579.jpg",
    "pexels-2170198.jpg",
    "pexels-thierry-fillieul-1046494.jpg",
    "pexels-pixabay-45863.jpg"
]

const abstractImgNames = [
    "elemental_flows_air.png",
    "elemental_flows_detail_1.png",
    "elemental_flows_detail_2.png",
    "elemental_flows_digital.png",
    "elemental_flows_earth.png",
    "elemental_flows_sun.png",
    "elemental_flows_water.png"
]

const stockSplashNames = [
    "jimmy-chang-NP8gd2KUnfw-unsplash.jpg",
    "david-clode-lmLgrnxIALI-unsplash.jpg",
    "izzy-gibson-sFrkWv4ACJg-unsplash.jpg",
    "rohit-morwani-eJQ9VZi-axI-unsplash.jpg",
    "aung-soe-min-WjULnaVRwxU-unsplash.jpg",
    "justin-owens-vh2mgjZ_tXw-unsplash.jpg",
    "aaron-burden-y0h45Oemrx4-unsplash.jpg",
    "jake-charles-dwVToFjYJOo-unsplash.jpg",
    "ian-keefe-NBQhCKtg_9Y-unsplash.jpg",
    "sergio-silva-AFrv2t6jgw4-unsplash.jpg",
    "samara-doole-peaTniZsUQs-unsplash.jpg",
    "samara-doole-mKOKC0dWG5Y-unsplash.jpg"
]
