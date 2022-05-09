export  { 
    schema,
}

const schema = {
    projectType: {
        data:           [],
        fields:         ["Project type", "Description"]
    },
    projectStage: {
        data:           [],
        fields:         ["Project stage", "Index", "Description"]
    },
    projectClass: {
        data:           [],
        fields:         ["Project class", "Description"]
    }, 
    projectTheme: {
        data:           [],
        fields:         ["Project theme", "Description", "_HWS Theme", "_HWS Group"]
    },     
    hwsTheme: {
        data:           [],
        fields:         ["HWS Theme", "Description"]
    },
    hwsGroup:  {
        data:           [],
        fields:         ["HWS Group", "Description"]
    },
    locations: {
        data:           [],
        fields:         ["Location", "_Subcatchment", "_Catchment"]
    },
    subcatchments: {
        data:           [], 
        fields:         ["Subcatchment", "_Catchment", "_Locations"]
    },       
    catchments: {
        data:           [],
        fields:         ["Catchment", "_Subcatchments", "_Locations"]
    },
    hwsConditions:   {
        data:           [],
        fields:         ["Waterway condition", "Description" ,"_Waterway value", "imgURL", "hwsURL"]
    },     
    hwsValues:  {
        data:           [],  
        fields:         ["Waterway value", "Description", "imgURL", "hwsURL"]
    },
    orgType:  {
        data:           [],  
        fields:         ["Organisation type", "Description"]
    }    
}

