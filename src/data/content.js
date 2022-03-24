export { uiSettings, getMenuOptions, getPageInfo, getRandomStockImgPath }

const uiSettings = {
    menuOptions:  []
}

///// EXPORTED METHODS /////
function getMenuOptions(user){
    if(user.isRegistered){
        return account.concat(menuOptions)
    } else {
        return menuOptions.concat(join)
    }
};

function getPageInfo(name){
    return menuOptions.concat(join).concat(account).filter(d => d.name.toLowerCase() === name.toLowerCase())
};

function getRandomStockImgPath(index){
    if(index){
        return `./static/img/stock/${stockImgNames[index]}`
    } else {
        return `./static/img/stock/${stockImgNames[Math.floor(Math.random()*stockImgNames.length)]}`
    }
};



////////// CONTENT //////////

/* Menu options data */
const menuOptions =  [
    {
        id: 0,
        name:           'Discover',
        shortDesc:      "Find out about what's happening to improve our waterways",
        tags:           ['Project search', 'Spatial search'],
        pageInfo: {
            title:          'Discover waterways projects',
            instruction:    'Use this feature to look for projects by their characteristics, location and outcomes',
        }
    },
    {   
        id: 1,  
        name:           'Connect', 
        shortDesc:      "Find and connect with others working on our waterways",
        tags:           ['Directory', 'Contacts'],
        pageInfo: {
            title:          'Connect with project stakeholders',
            instruction:    'Use this feature to connect with others who are working to improve our',
        }
    },
    {   id: 2,     
        name:           'Share', 
        shortDesc:      "Share your ideas and knowledge about improving waterway health",
        tags:           ['Share an idea', 'Contribute to a project'],
        pageInfo: {
            title:          'Share new ideas for improving our waterways',
            instruction:    'Use this feature to post your ideas? Provide feedback and knowledge for others about their projects and ideas?',
        }
    }
]

const join = [{
    id:             3,
    name:           'Join', // Or my account
    shortDesc:      'Create an account (or login)',
    pageInfo: {
        title:          'Create an account',
        instruction:    "Setup a free account to contribute your ideas and provide feedback for others! ",
    }
}]

const account = [{
    id: 4,
    name:  'Manage', // Or my account
    shortDesc: "See what's happening with your stuff"
}]


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
