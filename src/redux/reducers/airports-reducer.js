const INITIAL_STATE={
    airports:[]
}

export const AirportsReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_AIRPORTS':
            return {...state,airports:action.airports};
        default:
            return state;
    }
}