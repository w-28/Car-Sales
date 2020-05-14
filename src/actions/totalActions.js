export let ADD_FEATURE = 'ADD_FEATURE';

export let addFeature = item => {
    return { type: ADD_FEATURE, payload: item }
}

export let REMOVE_FEATURE = 'REMOVE_FEATURE';

export let removeFeature = item => {
    return { type: REMOVE_FEATURE, payload: item}
}
