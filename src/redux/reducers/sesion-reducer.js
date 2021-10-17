let INITIAL_STATE = {
    uuid: null,
    token:null
}

const sesionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_UUID':
            return {...state,uuid: action.uuid};
        case 'SET_TOKEN':
            return {...state,token:action.token};
        default:
            return state;
    }
}

export default sesionReducer;