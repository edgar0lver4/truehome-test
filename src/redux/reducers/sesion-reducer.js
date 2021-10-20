let INITIAL_STATE = {
    uuid: null,
    token:null,
    searchDates:null,
    searchCitiesOut:null,
    searchCitiesStart:null
}

const sesionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_UUID':
            return {...state,uuid: action.uuid};
        case 'SET_TOKEN':
            return {...state,token:action.token};
        case 'SET_SEARCH_TOKEN':
            return {...state,searchDates:action.searchDates}
        case 'SET_SEARCH_CITIES':
            return {...state,searchCitiesOut:action.searchCitiesOut}
        case 'SET_SEARCH_CITIES_START':
            return {...state,searchCitiesStart:action.searchCitiesStart}
        case 'REST_SEARCH_WITH_DESTIN':
            return {...state,searchDates:null,searchCitiesOut:null}
        default:
            return state;
    }
}

export default sesionReducer;