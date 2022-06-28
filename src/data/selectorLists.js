import { schema } from './schema.js'
export { createSelectorLists,
        keyValues, conditions, themes, 
        catchments, subcatchments,
        leadOrg, leadOrgType, partnerOrg,
        projectType, projectStage, projectScale
 }

let keyValues, conditions, themes,  catchments, subcatchments,
        leadOrg, leadOrgType, partnerOrg,
        projectType, projectStage, projectClass, projectScale

///// DATA OBJECTS FOR MULTI-SELECT COMPONENTS //////
async function createSelectorLists(schema){

    keyValues = {
        label:              'by key values',
        name:               'hwsValues',
        list:               schema.hwsValues.data.map(d => d["Waterway value"]).sort(),
        placeholder:        'Use this field to select waterway key values'
    }

    conditions = {
        label:              'by waterway conditions',
        name:               'hwsConditions',
        list:               schema.hwsConditions.data.map(d => d["Waterway condition"]).sort(),
        placeholder:        'Use this field to select waterway conditions'
    }

    themes = {
        label:              'by themes',
        name:               'projectTheme',
        list:               schema.projectTheme.data.map(d => d["Project theme"]).sort(),
        placeholder:        'Use this field to select performance objectives themes'
    }

    // Project location
    catchments = {
        label:              'by catchments',
        name:               'catchments',
        list:               schema.catchments.data.map(d => d["Catchment"]).sort(),
        placeholder:        'Use this field to select catchments'
    }

    subcatchments = {
        label:              'by subcatchments',
        name:               'subcatchments',
        list:               schema.subcatchments.data.map(d => d["Subcatchment"]).sort(),
        placeholder:        'Use this field to select subcatchments'
    }

    // Project characterstics
    projectType = {
        label:              'by type',
        name:               'projectType',
        list:               schema.projectType.data.map(d => d["Project type"]).sort(),
        placeholder:        'Use this field to select initiative type(s)',
        placeholderSingle:  'Use this field to select a initiative type'
    }

    projectStage = {
        label:              'by stage',
        name:               'projectStage',
        list:               schema.projectStage.data.map(d => d["Project stage"]).sort(),
        placeholder:        'Use this field to select project stage(s)',
        placeholderSingle:  'Use this field to select a project stage'
    }

    projectScale = {
        label:              'by scale',
        name:               'projectScale',
        list:   [
            'Region-wide (all catchments)',
            'Across multiple catchments',
            'Single catchment',
            'Across multiple subcatchments',
            'Single subcatchment'
        ],
        placeholder:        'Use this field to select project scale(s)',
        placeholderSingle:  'Use this field to select a project scale'
    }

    // Project stakeholders
    leadOrg = {
        label:              'Lead organisation',
        name:               'leadOrg',
        list:               null,
        placeholder:        'Use this field to select the name of lead organisation(s)',
        placeholderSingle:  'Use this field to select the lead organisation'
    }

    partnerOrg = {
        label:              'Partner organisation(s)',
        name:               'partnerOrg',
        list:               null,
        placeholder:        'Use this field to select the name of a partner organisation(s)'
    }

    leadOrgType = {
        label:              'Lead organisation type',
        name:               'leadOrgType',
        list:               schema.orgType.data.map(d => d["Organisation type"]).sort(),
        placeholder:        'Use this field to select the type of lead organisation(s)'
    }

};
