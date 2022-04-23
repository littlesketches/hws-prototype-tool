import { hwsSchema, projectSchema, subCatchmentMap, locationMap, locationTree } from './schema.js'
export { keyValues, conditions, performanceObjectivesGroup, performanceObjectivesTheme, 
        catchments, subcatchments, locations,
        leadOrg, leadOrgType, partnerOrg,
        projectType, projectStage, projectClass, projectSize, projectScale
 }


///// DATA OBJECTS FOR MULTI-SELECT COMPONENTS //////
    // Waterways outcomes 
    const keyValues = {
        label:              'by key values',
        name:               'keyValues',
        list:               Object.keys(hwsSchema.keyValues),
        placeholder:        'Use this field to select waterway key values'
    }

    const conditions = {
        label:              'by waterway conditions',
        name:               'conditions',
        list:               Object.keys(hwsSchema.conditions),
        placeholder:        'Use this field to select waterway conditions'
    }

    const performanceObjectivesGroup = {
        label:              'by performance objective group',
        name:               'performanceObjectiveGroup',
        list:               Object.keys(hwsSchema.performanceObjectives),
        placeholder:        'Use this field to select performance objectives groups'
    }

    const performanceObjectivesTheme = {
        label:              'by performance objective theme',
        name:               'performanceObjectiveTheme',
        list:               [... new Set(Object.values(hwsSchema.performanceObjectives).map(d => d.themes).flat().sort()) ],
        placeholder:        'Use this field to select performance objectives themes'
    }

    // Project location
    const catchments = {
        label:              'by catchments',
        name:               'catchment',
        list:               [...locationTree.entries()].map(d => d[0]),
        placeholder:        'Use this field to select catchments'
    }

    const subcatchments = {
        label:              'by subcatchments',
        name:               'subcatchment',
        list:               Object.keys(subCatchmentMap).sort(),
        placeholder:        'Use this field to select subcatchments'
    }

    const locations = {
        label:              'by location',
        name:               'location',
        list:               Object.keys(locationMap).sort(),
        placeholder:        'Use this field to select locations'
    }

    // Project characterstics
    const projectType = {
        label:              'Type',
        name:               'projectType',
        list:               projectSchema.type,
        placeholder:        'Use this field to select initiative type(s)',
        placeholderSingle:  'Use this field to select initiative type'
    }
    const projectStage = {
        label:          '   Stage',
        name:               'projectStage',
        list:               projectSchema.stage,
        placeholder:        'Use this field to select project stage(s)',
        placeholderSingle:  'Use this field to select project stage(s)'
    }
    const projectClass = {
        label:              'Class',
        name:               'projectClass',
        list:               projectSchema.class,
        placeholder:        'Use this field to select project class(es)'
    }
    const projectSize = {
        label:              'Size',
        name:               'projectSize',
        list:               projectSchema.size,
        placeholder:        'Use this field to select project size(s)',
        placeholderSingle:  'Use this field to select project size'
    }
    const projectScale = {
        label:              'Scale',
        name:               'projectScale',
        list:               projectSchema.class,
        placeholder:        'Use this field to select project scale(s)',
        placeholderSingle:  'Use this field to select project scale'
    }

    // Project stakeholders
    const leadOrg = {
        label:              'Lead organisation',
        name:               'leadOrg',
        list:               null,
        placeholder:        'Use this field to select the name of lead organisation(s)',
        placeholderSingle:  'Use this field to select the lead organisation'
    }
    const partnerOrg = {
        label:              'Partner organisation(s)',
        name:               'partnerOrg',
        list:               null,
        placeholder:        'Use this field to select the name of a partner organisation(s)'
    }
    const leadOrgType = {
        label:              'Lead organisation type',
        name:               'leadOrgType',
        list:               projectSchema.orgType,
        placeholder:        'Use this field to select the type of lead organisation(s)'
    }
