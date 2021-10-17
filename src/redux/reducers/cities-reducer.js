const INITIAL_STATE = {
    cities:[]
}

const citiesReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_CITIES':
            return {...state,cities:action.cities};
        default:
            return state;
    }
}

export default citiesReducer;