const INITIAL_STATE = {
    flights:[]
};

const FlightsReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_FLIGHTS':
            return {...state,flights:action.flights};
        default:
            return state;
    }
}

export default FlightsReducer;