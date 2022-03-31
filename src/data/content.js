import { ui } from './stores.js'	 

export { 
    getMenuOptions, 
    getPageInfo, 
    getRandomStockImgPath, 
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


////////// CONTENT //////////
const toolName = 'Collaborative tool'


/* Main "section" content */
const pages = {
    core:  [
        {
            id: 0,
            name:           'Discover',
            shortDesc:      "Find out about what's happening to improve our waterways",
            tags:           ['Project search', 'Spatial search'],
            TitleBlock: {
                title:          'Discover waterways projects',
                instruction:    'Use this feature to look for projects by their characteristics, location and outcomes',
            }
        },
        {   
            id: 1,  
            name:           'Connect', 
            shortDesc:      "Find and connect with others working on our waterways",
            tags:           ['Directory', 'Contacts'],
            TitleBlock: {
                title:          'Connect with project stakeholders',
                instruction:    'Use this feature to connect with others who are working to improve our',
            }
        },
        {   id: 2,     
            name:           'Share', 
            shortDesc:      "Share your ideas and knowledge about improving waterway health",
            tags:           ['Share an idea', 'Contribute to a project'],
            TitleBlock: {
                title:          'Share new ideas for improving our waterways',
                instruction:    'Use this feature to post your ideas? Provide feedback and knowledge for others about their projects and ideas?',
            }
        }
    ],

    join: [
        {
            id:             3,
            name:           'Join', // Or my account
            shortDesc:      'Create an account to join the community (or sign in!)',
            TitleBlock: {
                title:          'Create an account',
                instruction:    "Setup a free account to contribute your ideas and provide feedback for others! ",
            }
        }
    ],

    myAccount: [
        {
            id: 4,
            name:           'Manage', // Or my account
            shortDesc:      "See what's happening with your stuff",
            TitleBlock: {
                title:          'Create an account',
                instruction:    "Setup a free account to contribute your ideas and provide feedback for others! ",
            }
        }
    ]
}

/* Text content for components */
const componentContent = {
    title: {
        subHeading:      'Healthy waterways',
        mainHeading:     `${toolName}`
    },

    about: {
        title:           `About the ${toolName}`,
        intro: `
            <p>A short simple description about the purpose of the tool, the catchment it covers and who its for.</p>
            <p>Also add a statement about waterway health the link to the Healthy waterways strategy. As well as any other important acknowledgments.</p>
            <p>There probably will be more sections that could be added here - and further info linked - but an initial suggestion here is to structure the about section similarly to the main 'action' items that a user is presented with (i.e. in the main menu above).</p>
        `,
        section_01_title:       `Discover`,   
        section_01_description : `
            <p>Longer statement about finding out about what's happening in the waterways: sharing and accessing project 'data', but more around begin able to find out what (of interest to the user) is being done to improve waterway health.</p>
        `,
        section_02_title:       `Connect and build community`,   
        section_02_description : `
            <p>Something about fostering a community of users, sharing knowledge etc.: the idea of this 'area' is more around helping identify the 'who' and bringing faces and connections to things that are happening in the catchment. </p>
        `,
        section_03_title:       `Share and collaborate on ideas`,   
        section_03_description : `
           <p>Statements about goals related to about sharing and building on each others ideas, providing feedback and shaping action etc.</p>
        `,
        section_04_title:       `Connections with other resources`,   
        section_04_description : `
           <p>Acknowledge other resources that the tool sits alongside other publicly available tools, and link to a page that lists them (and probably explains how this tool might complement them).</p>
        `

    },

    discover: {

    },
    projectInfo: {

    }

}


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
    "pexels-artur-roman-534579.jpg"
]


/******** SAMPLE PROJECT DATA */
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
    { name: "Abbotsford Riverbankers" },
    { name: "First Friends of Dandenong Creek" },
    { name: "Friends of Cockatoo Creek" },
    { name: "Friends of Damper Creek" },
    { name: "Friends of Lower Kororoit Creek" },
    { name: "Friends of Merri Creek" },
    { name: "Friends of Mt Evelyn Aqueduct" },
    { name: "Friends of Plenty River" },
    { name: "Friends of Steele Creek" },
    { name: "Friends of Water Race and Quinn Reserve" },
    { name: "Healthy Waterways PLT" },
    { name: "Kananook Creek Association" },
    { name: "Australian Plant Society, Keilor Plains" },
    { name: "Avondale Heights Community Garden Inc." },
    { name: "Bend of Islands Conservation Association" },
    { name: "Berg Mt Martha" },
    { name: "Candlebark Community Nursery" },
    { name: "Cardinia Environment Coalition" },
    { name: "City of Casey Conservation Advisory Committee" },
    { name: "Conservation Volunteers" },
    { name: "Down's Estate Community Project" },
    { name: "Elsternwick Park Coalition" },
    { name: "Friends of Banyule" },
    { name: "Friends of Cardinia Creek Sanctuary" },
    { name: "Friends of Glenfern Valley Bushlands" },
    { name: "Friends of Hazel Vale Valley Tecoma" },
    { name: "Friends of Helmeted Honeyeater" },
    { name: "Friends of Leadbeater's Possum" },
    { name: "Friends of Maribyrnong Valley" },
    { name: "Friends of the Glenfern Green Wedge" },
    { name: "Friends of the Maribyrnong Valley" },
    { name: "Friends of Yarra Valley Parks" },
    { name: "Knox Environment Society" },
    { name: "Warringal Conservation Society" },
    { name: "Yellingbo Conservation Area Co-ordinating Committee" },
    { name: "Arthurs Creek District Landcare Group" },
    { name: "Bacchus Marsh Platypus Alliance Inc." },
    { name: "Bessie-Ararat Creek Landcare Group" },
    { name: "Cannibal Creek Landcare Group" },
    { name: "Cardinia Catchment Landcare Group" },
    { name: "Chum Creek Landcare" },
    { name: "Darebin Creek Management Committee" },
    { name: "Dixons Creek Landcare Group" },
    { name: "Dunns Creek Landcare Group" },
    { name: "Friends of Edithvale-Seaford Wetlands" },
    { name: "Friends of Frankston Reservoir Inc" },
    { name: "Friends of Glass Creek Parklands" },
    { name: "Friends of Hopetoun Park & Parwan Gorge" }, 
    { name: "Friends of Kororoit Creek" },
    { name: "Friends of Malcolm Creek" },
    { name: "Friends of Newport Lakes" },
    { name: "Friends of Rosebud Beach and Foreshore" },
    { name: "Friends of Sassafras Creek Inc (FOSC)" },
    { name: "Jacksons Creek EcoNetwork" },
    { name: "Jumping Creek Catchment Landcare Group" },
    { name: "Kongwak Hills Landcare Group" },
    { name: "Langwarrin Woodlands & Northern Westernport" },
    { name: "Macclesfield Landcare Group" },
    { name: "Manton and Stony Creek Landcare Group" },
    { name: "Maryknoll Tracks and Reserves" },
    { name: "Middle Yarra Landcare Network" },
    { name: "Moorabool Catchment Landcare Group" },
    { name: "Olinda Creek Landcare Group" },
    { name: "Steels Creek Landcare Group" },
    { name: "Upper Deep Creek Landcare Network" },
    { name: "Werribee River Association" },
    { name: "Western Region Environment Centre" },
    { name: "Western Port Catchment Landcare Network" },
    { name: "Westernport Swamp Landcare Group" },
    { name: "Whittlesea Landcare" },
    { name: "Yarra Ranges Landcare Network" },
    { name: "Balcombe and Moorooduc Landcare Group" },
    { name: "Bass Coast Landcare Network" },
    { name: "Bayside Intrepid Landcare Group" },
    { name: "Bunyip Landcare Group" },
    { name: "Cardinia Hills Ragwort and Landcare Group" },
    { name: "Clarkefield and District Farm Landcare Group" },
    { name: "Eynesbury Environment Group" },
    { name: "Federation Horticulture and Environment Macedon Ranges" },
    { name: "French Island Landcare Group" },
    { name: "Friends of Baden Powell Bushland Reserve" },
    { name: "Friends of Belvedere Bushland Reserve" },
    { name: "Friends of Bradshaw Bushland Reserve Inc" },
    { name: "Friends of Brisbane Ranges" },
    { name: "Friends of Bungalook Conservation Reserves" },
    { name: "Friends of Candlebark Walk" },
    { name: "Friends of Central Sweetwater" },
    { name: "Friends of Cobbledicks Ford" },
    { name: "Friends of Coolart" },
    { name: "Friends of Dandenong Ranges National Park" },
    { name: "Friends of Diamond Bay" },
    { name: "Friends of Donald Macdonald Reserve" },
    { name: "Friends of Edithvale-Seaford Wetlands" },
    { name: "Friends of Eltham West Drain" },
    { name: "Friends of Hanging Rock" },
    { name: "Friends of Holden Flora Reserve" },
    { name: "Friends of Hopetoun Park & Parwan Gorge" }, 
    { name: "Friends of Mount Eliza Regional Park" },
    { name: "Friends of St Kilda Botanical Gardens" },
    { name: "Friends of Sunbury Cemetery" },
    { name: "Friends of the Helmeted Honeyeater" },
    { name: "Friends of The Pines Flora & Fauna Reserve" },
    { name: "Friends of Truganina Park" },
    { name: "Friends of Walmer Street Bushland" },
    { name: "Friends of Werribee Park" },
    { name: "Friends of Wildlife Reserves Group Inc" },
    { name: "Friends of Yarra Valley Parks" },
    { name: "Greening of Riddell" },
    { name: "Growing Friends of Yarra Bend Park" },
    { name: "Kongwak Hills Landcare Group" },
    { name: "Labertouche Landcare" },
    { name: "Langwarrin Woodlands & Northern Westernport" },
    { name: "Loch/Nyora Landcare Group" },
    { name: "Macclesfield Landcare Group" },
    { name: "Maryknoll Tracks and Reserves" },
    { name: "Mornington Peninsula Koala Conservation" }, 
    { name: "Mornington Peninsula Landcare Network" },
    { name: "Mount Pleasant Research Landcare Group" },
    { name: "Mt Lyall Landcare Group" },
    { name: "Mt Toolebewong & District Landcare Group" },
    { name: "Neerim Landcare Group" },
    { name: "Nillumbik Landcare Network" },
    { name: "Pentland Hills Landcare Group" },
    { name: "Pinkerton Landcare & Environment Group" },
    { name: "Point Cook Open Spaces" },
    { name: "Poowong Landcare" },
    { name: "Rabbit Busters - Exford" },
    { name: "Rowsley Landcare Group" },
    { name: "Shiela Cameron Guides" },
    { name: "South Gippsland Landcare Network" },
    { name: "Southern Dandenongs Landcare Group" },
    { name: "Southern Ranges Environment Alliance" },
    { name: "Southwest Mornington Peninsula Landcare Group" },
    { name: "Stanley Park Committee of Management" },
    { name: "Sunbury Landcare Association" },
    { name: "Surf Coast & Inland Plains Landcare Network" },
    { name: "Threatened Bird Network" },
    { name: "Toomuc Landcare" },
    { name: "TreeProject" },
    { name: "Truganina Landcare Group" },
    { name: "Warranwood Reserve Committee" },
    { name: "Western Region Environment Centre" },
    { name: "Whittlesea Landcare" },
    { name: "Yarra Ranges Landcare Network" }

]