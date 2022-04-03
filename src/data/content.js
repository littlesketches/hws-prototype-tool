import * as d3 from 'd3'
import { csvParse } from 'd3'
import { compute_rest_props } from 'svelte/internal'
import { ui } from './stores.js'	 

export { 
    getMenuOptions, 
    getPageInfo, 
    getContent,
    getRandomStockImgPath, 
    getRandomAbstractImgPath,
    componentContent,
    projectData, 
    organisationData
}


///// EXPORTED METHODS /////
function getMenuOptions(user){
    if(user.isRegistered){
        return pages.myAccount.concat(pages.core)     // "MyAccount" option would be first
    } else {
        return pages.core.concat(pages.join)           // "Join" goes last (includes login)
    }
};

function getPageInfo(name){ 
    return pages.core
        .concat(pages.join)
        .concat(pages.myAccount)
        .filter(d => d.name.toLowerCase() === name.toLowerCase())
}; 

function getRandomStockImgPath(index){
    if(index){
        return `./static/img/stock/${stockImgNames[index]}`
    } else {
        return `./static/img/stock/${stockImgNames[Math.floor(Math.random()*stockImgNames.length)]}`
    }
};

function getRandomAbstractImgPath(index){
    if(index){
        return `./static/img/abstract/${abstractImgNames[index]}`
    } else {
        return `./static/img/abstract/${abstractImgNames[Math.floor(Math.random()*abstractImgNames.length)]}`
    }
};


////////// CONTENT //////////
let toolName = 'Collaborative tool'
let pages = {} , componentContent = {}

async function getContent(){

	const data = await d3.tsv('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ36HUgHmF_LDKH5Nfn6jLPyo56ygQu5vIgCqHa1md8cQCPvvSXhOGmudo_8zWftxu-Sx3lrU14Pwy4/pub?gid=0&single=true&output=tsv')
    const getHTML = (ref) => data.filter(d => d.reference === ref)[0].content
    console.log(data)
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

        myAccount: [
            {
                name:               getHTML('page.myAccount.name'),
                shortDesc:          getHTML('page.myAccount.shortDesc'),
                TitleBlock: {
                    title:          getHTML('page.myAccount.TitleBlock.title'),
                    instruction:    getHTML('page.myAccount.TitleBlock.instruction')
                }   
            }
        ]
    }


    // 2. Extract and shape "Component" content 
    componentContent = {
        title: {
            subHeading:      getHTML('toolSubHeader'),
            mainHeading:     `${toolName}`
        },

        about: {
            title:                      `${getHTML('component.about.title')} ${toolName}`,
            intro:                      getHTML('component.about.intro'),
            section_01_title:           getHTML('component.about.section_01_title'),   
            section_01_description:     getHTML('component.about.section_01_description'),   
            section_02_title:           getHTML('component.about.section_02_title'),  
            section_02_description:     getHTML('component.about.section_02_description'),  
            section_03_title:           getHTML('component.about.section_03_title'),   
            section_03_description:     getHTML('component.about.section_03_description'),  
            section_04_title:           getHTML('component.about.section_04_title'),    
            section_04_description:     getHTML('component.about.section_04_description')
        },

        discover: {
            instruction:            getHTML('component.projectInfo.selectionHeader')
        },

        projectInfo: {
            selectionHeader:        getHTML('component.projectInfo.selectionHeader'),
            selectionDefault:       getHTML('component.projectInfo.selectionDefault'),
            searchToolHeader:       getHTML('component.projectInfo.searchToolHeader'),
            searchToolDesc:         getHTML('component.projectInfo.searchToolDesc'),
            filterHeader:           getHTML('component.projectInfo.filterHeader'),
            filterDesc:             getHTML('component.projectInfo.filterDesc'),
            mapHeader:              getHTML('component.projectInfo.mapHeader'),
            mapDesc:                getHTML('component.projectInfo.mapDesc'),
            searchResultsHeader:    getHTML('component.projectInfo.searchResultsHeader'),
            searchResultsDesc:      getHTML('component.projectInfo.searchResultsDesc'),
            searchResultsOptions:   getHTML('component.projectInfo.searchResultsOptions'),
        },

        connectInfo: {
            selectionHeader:        getHTML('component.connectInfo.selectionHeader'),
            selectionDefault:       getHTML('component.connectInfo.selectionDefault'),
            searchToolHeader:       getHTML('component.connectInfo.searchToolHeader'),
            searchToolDesc:         getHTML('component.connectInfo.searchToolDesc'),
            filterHeader:           getHTML('component.connectInfo.filterHeader'),
            filterDesc:             getHTML('component.connectInfo.filterDesc'),
            networkHeader:          getHTML('component.connectInfo.networkHeader'),
            networkDesc:            getHTML('component.connectInfo.networkDesc'),
            searchResultsHeader:    getHTML('component.connectInfo.searchResultsHeader'),
            searchResultsDesc:      getHTML('component.connectInfo.searchResultsDesc'),
            searchResultsOptions:   getHTML('component.connectInfo.searchResultsOptions'),
        }

    }
};


/* Stock image filenames */
const stockImgNames = [
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


/******** SAMPLE PROJECT DATA ********/
const projectData = [
    {
        id:         '001',
        name:       'Reprehenderit in voluptat',
        shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.t',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '002',
        name:       'Resse cillum dolore eu fugiat nulla pariatur',
        shortDesc:  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '003',
        name:       'Quis autem vel eum iure reprehenderit qui',
        shortDesc:  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '004',
        name:       'Firure dolor in reprehender',
        shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '005',
        name:       'Nodio dignissimos ducimus qui blanditiis',
        shortDesc:  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '006',
        name:       'Dolor in reprehenderit in voluptate ve',
        shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '007',
        name:       'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
        shortDesc:  'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '008',
        name:       'Omnis voluptas assumenda est, omnis dolor repellendus.',
        shortDesc:  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '009',
        name:       'Et harum quidem rerum facilis',
        shortDesc:  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '010',
        name:       'Reprehenderit in voluptat',
        shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.t',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '011',
        name:       'Resse cillum dolore eu fugiat nulla pariatur',
        shortDesc:  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '012',
        name:       'Quis autem vel eum iure reprehenderit qui',
        shortDesc:  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '013',
        name:       'Ut enim ad minima veniam, quis nostrum e',
        shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '014',
        name:       'Nodio dignissimos ducimus qui blanditiis',
        shortDesc:  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '015',
        name:       'Dolor in reprehenderit in voluptate ve',
        shortDesc:  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '016',
        name:       'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
        shortDesc:  'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '017',
        name:       'Omnis voluptas assumenda est, omnis dolor repellendus.',
        shortDesc:  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        imgURL :    getRandomStockImgPath()
    },
    {
        id:         '018',
        name:       'Et harum quidem rerum facilis',
        shortDesc:  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        imgURL :    getRandomStockImgPath()
    }
]

const organisationData = [
    {   
        id:         '001',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Abbotsford Riverbankers" 
    },
    {   
        id:         '002',
        imgURL:     getRandomAbstractImgPath(),
        name:       "First Friends of Dandenong Creek"
    },
    { 
        id:         '003',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Cockatoo Creek" 
    },
    { 
        id:         '004',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Damper Creek" 
    },
    { 
        id:         '005',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Lower Kororoit Creek" 
    },
    { 
        id:         '006',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Merri Creek" 
    },
    { 
        id:         '007',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Mt Evelyn Aqueduct" 
    },
    { 
        id:         '008',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Plenty River" 
    },
    { 
        id:         '009',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Steele Creek" 
    },
    { 
        id:         '010',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Water Race and Quinn Reserve" 
    },
    { 
        id:         '011',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Healthy Waterways PLT" 
    },
    { 
        id:         '012',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Kananook Creek Association" 
    },
    { 
        id:         '013',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Australian Plant Society, Keilor Plains" 
    },
    { 
        id:         '014',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Avondale Heights Community Garden Inc." 
    },
    { 
        id:         '015',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Bend of Islands Conservation Association" 
    },
    { 
        id:         '016',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Berg Mt Martha" 
    },
    {   
        id:         '017',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Candlebark Community Nursery" 
    },
    { 
        id:         '018',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Cardinia Environment Coalition" 
    },
    { 
        id:         '019',
        imgURL:     getRandomAbstractImgPath(),
        name:       "City of Casey Conservation Advisory Committee" 
    },
    { 
        id:         '020',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Conservation Volunteers" 
    },
    { 
        id:         '021',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Down's Estate Community Project" 
    },
    { 
        id:         '022',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Elsternwick Park Coalition" 
    },
    { 
        id:         '023',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Banyule" 
    },
    { 
        id:         '024',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Cardinia Creek Sanctuary" 
    },
    { 
        id:         '025',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Glenfern Valley Bushlands" 
    },
    { 
        id:         '026',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Hazel Vale Valley Tecoma" 
    },
    { 
        id:         '027',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Helmeted Honeyeater" 
    },
    { 
        id:         '028',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Leadbeater's Possum" 
    },
    { 
        id:         '029',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Maribyrnong Valley" 
    },
    { 
        id:         '030',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of the Glenfern Green Wedge" 
    },
    { 
        id:         '031',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of the Maribyrnong Valley" 
    },
    { 
        id:         '032',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Yarra Valley Parks" 
    },
    { 
        id:         '033',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Knox Environment Society" 
    },
    { 
        id:         '034',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Warringal Conservation Society" 
    },
    { 
        id:         '035',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Yellingbo Conservation Area Co-ordinating Committee" 
    },
    { 
        id:         '036',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Arthurs Creek District Landcare Group" 
    },
    { 
        id:         '037',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Bacchus Marsh Platypus Alliance Inc." 
    },
    { 
        id:         '038',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Bessie-Ararat Creek Landcare Group" 
    },
    { 
        id:         '039',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Cannibal Creek Landcare Group" 
    },
    { 
        id:         '040',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Cardinia Catchment Landcare Group" 
    },
    { 
        id:         '041',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Chum Creek Landcare" 
    },
    { 
        id:         '042',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Darebin Creek Management Committee" 
    },
    { 
        id:         '043',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Dixons Creek Landcare Group" 
    },
    { 
        id:         '044',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Dunns Creek Landcare Group" 
    },
    { 
        id:         '045',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Edithvale-Seaford Wetlands"
    },
    { 
        id:         '046',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Frankston Reservoir Inc"
    },
    { 
        id:         '047',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Glass Creek Parklands"
    },
    { 
        id:         '048',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Hopetoun Park & Parwan Gorge"
    }, 
    { 
        id:         '049',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Kororoit Creek" 
    },
    { 
        id:         '050',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Malcolm Creek" 
    },
    { 
        id:         '051',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Newport Lakes" 
    },
    { 
        id:         '052',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Rosebud Beach and Foreshore" 
    },
    { 
        id:         '053',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Sassafras Creek Inc (FOSC)" 
    },
    { 
        id:         '054',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Jacksons Creek EcoNetwork" 
    },
    { 
        id:         '055',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Jumping Creek Catchment Landcare Group" 
    },
    { 
        id:         '056',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Kongwak Hills Landcare Group"
    },
    { 
        id:         '057',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Langwarrin Woodlands & Northern Westernport" 
    },
    { 
        id:         '058',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Macclesfield Landcare Group" 
    },
    { 
        id:         '059',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Manton and Stony Creek Landcare Group" 
    },
    { 
        id:         '060',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Maryknoll Tracks and Reserves" 
    },
    { 
        id:         '061',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Middle Yarra Landcare Network" 
    },
    { 
        id:         '062',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Moorabool Catchment Landcare Group" 
    },
    { 
        id:         '063',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Olinda Creek Landcare Group" 
    },
    { 
        id:         '064',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Steels Creek Landcare Group" 
    },
    { 
        id:         '065',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Upper Deep Creek Landcare Network" 
    },
    { 
        id:         '066',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Werribee River Association" 
    },
    { 
        id:         '067',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Western Region Environment Centre" 
    },
    { 
        id:         '068',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Western Port Catchment Landcare Network" 
    },
    { 
        id:         '069',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Westernport Swamp Landcare Group"
    },
    { 
        id:         '070',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Whittlesea Landcare" 
    },
    { 
        id:         '071',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Yarra Ranges Landcare Network" 
    },
    { 
        id:         '072',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Balcombe and Moorooduc Landcare Group" 
    },
    { 
        id:         '073',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Bass Coast Landcare Network" 
    },
    { 
        id:         '074',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Bayside Intrepid Landcare Group"   
    },
    { 
        id:         '075',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Bunyip Landcare Group" 
    },
    { 
        id:         '076',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Cardinia Hills Ragwort and Landcare Group" 
    },
    { 
        id:         '077',
        imgURL:     getRandomAbstractImgPath(),
        name: "Clarkefield and District Farm Landcare Group" 
    },
    {   
        id:         '078',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Eynesbury Environment Group" },
    { 
        id:         '079',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Federation Horticulture and Environment Macedon Ranges" 
    },
    { 
        id:         '080',
        imgURL:     getRandomAbstractImgPath(),
        name:       "French Island Landcare Group" 
    },
    { 
        id:         '081',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Friends of Baden Powell Bushland Reserve" 
    },
    { 
        id:         '082',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Belvedere Bushland Reserve" 
    },
    {   
        id:         '083',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Bradshaw Bushland Reserve Inc" 
    },
    { 
        id:         '084',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Friends of Brisbane Ranges" 
    },
    { 
        id:         '085',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Bungalook Conservation Reserves" 
    },
    { 
        id:         '086',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Candlebark Walk" 
    },
    { 
        id:         '087',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Central Sweetwater" 
    },
    { 
        id:         '088',
        imgURL:     getRandomAbstractImgPath(),
        name:        "Friends of Cobbledicks Ford" 
    },
    { 
        id:         '089',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Coolart" 
    },
    { 
        id:         '090',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Dandenong Ranges National Park" 
    },
    { 
        id:         '091',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Friends of Diamond Bay" 
    },
    { 
        id:         '092',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Friends of Donald Macdonald Reserve" 
    },
    { 
        id:         '093',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Edithvale-Seaford Wetlands" 
    },
    { 
        id:         '094',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Eltham West Drain" 
    },
    { 
        id:         '095',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Hanging Rock" 
    },
    { 
        id:         '096',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Friends of Holden Flora Reserve" 
    },
    { 
        id:         '097',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Hopetoun Park & Parwan Gorge" 
    }, 
    { 
        id:         '098',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Mount Eliza Regional Park" 
    },
    { 
        id:         '099',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of St Kilda Botanical Gardens" },
    { 
        id:         '098',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Sunbury Cemetery" 
    },
    { 
        id:         '099',
        imgURL:     getRandomAbstractImgPath(),
        name:      "Friends of the Helmeted Honeyeater" 
    },
    { 
        id:         '100',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of The Pines Flora & Fauna Reserve" 
    },
    { 
        id:         '101',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Truganina Park" 
    },
    { 
        id:         '102',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Walmer Street Bushland" 
    },
    { 
        id:         '103',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Werribee Park" 
    },
    { 
        id:         '104',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Wildlife Reserves Group Inc" 
    },
    { 
        id:         '105',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Friends of Yarra Valley Parks" 
    },
    {   
        id:         '106',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Greening of Riddell" 
    },
    { 
        id:         '107',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Growing Friends of Yarra Bend Park" 
    },
    {   
        id:         '108',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Kongwak Hills Landcare Group" 
    },
    { 
        id:         '109',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Labertouche Landcare" 
    },
    { 
        id:         '110',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Langwarrin Woodlands & Northern Westernport" 
    },
    { 
        id:         '111',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Loch/Nyora Landcare Group" 
    },
    { 
        id:         '112',
        imgURL:     getRandomAbstractImgPath(),
        name:   "Macclesfield Landcare Group" 
    },
    { 
        id:         '113',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Maryknoll Tracks and Reserves" 
    },
    { 
        id:         '114',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Mornington Peninsula Koala Conservation" 
    }, 
    { 
        id:         '115',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Mornington Peninsula Landcare Network" 
    },
    { 
        id:         '116',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Mount Pleasant Research Landcare Group" 
    },
    { 
        id:         '117',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Mt Lyall Landcare Group" 
    },
    { 
        id:         '118',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Mt Toolebewong & District Landcare Group" 
    },
    { 
        id:         '119',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Neerim Landcare Group" 
    },
    { 
        id:         '120',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Nillumbik Landcare Network" 
    },
    { 
        id:         '121',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Pentland Hills Landcare Group" 
    },
    { 
        id:         '122',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Pinkerton Landcare & Environment Group" 
    },
    { 
        id:         '123',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Point Cook Open Spaces" 
    },
    { 
        id:         '124',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Poowong Landcare" 
    },
    { 
        id:         '125',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Rabbit Busters - Exford" 
    },
    { 
        id:         '126',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Rowsley Landcare Group" 
    },
    { 
        id:         '127',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Shiela Cameron Guides" 
    },
    { 
        id:         '128',
        imgURL:     getRandomAbstractImgPath(),
        name:       "South Gippsland Landcare Network" 
    },
    { 
        id:         '129',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Southern Dandenongs Landcare Group" 
    },
    { 
        id:         '130',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Southern Ranges Environment Alliance" 
    },
    { 
        id:         '131',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Southwest Mornington Peninsula Landcare Group" 
    },
    { 
        id:         '132',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Stanley Park Committee of Management" 
    },
    { 
        id:         '133',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Sunbury Landcare Association" 
    },
    { 
        id:         '134',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Surf Coast & Inland Plains Landcare Network" 
    },
    { 
        id:         '135',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Threatened Bird Network" 
    },
    { 
        id:         '136',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Toomuc Landcare" 
    },
    { 
        id:         '137',
        imgURL:     getRandomAbstractImgPath(),
        name:       "TreeProject" 
    },
    {
        id:         '138',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Truganina Landcare Group" 
    },
    { 
        id:         '139',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Warranwood Reserve Committee" 
    },
    { 
        id:         '140',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Western Region Environment Centre" 
    },
    {   
        id:         '141',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Whittlesea Landcare" 
    },
    { 
        id:         '142',
        imgURL:     getRandomAbstractImgPath(),
        name:       "Yarra Ranges Landcare Network" 
    }
]