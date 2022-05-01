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
        label:              'by theme',
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
        label:              'by type',
        name:               'projectType',
        list:               projectSchema.type.map(d => d.name),
        placeholder:        'Use this field to select initiative type(s)',
        placeholderSingle:  'Use this field to select a initiative type'
    }

    const projectStage = {
        label:              'by stage',
        name:               'projectStage',
        list:               projectSchema.stage.map(d => d.name),
        placeholder:        'Use this field to select project stage(s)',
        placeholderSingle:  'Use this field to select a project stage'
    }

    const projectClass = {
        label:              'by class',
        name:               'projectClass',
        list:               projectSchema.class.map(d => d.name),
        placeholder:        'Use this field to select project class(es)',
        placeholderSingle:  'Use this field to select a project class'
    }

    const projectSize = {
        label:              'by size',
        name:               'projectSize',
        list:               projectSchema.size,
        placeholder:        'Use this field to select project size(s)',
        placeholderSingle:  'Use this field to select a project size'
    }

    const projectScale = {
        label:              'by scale',
        name:               'projectScale',
        list:               projectSchema.scale,
        placeholder:        'Use this field to select project scale(s)',
        placeholderSingle:  'Use this field to select a project scale'
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
