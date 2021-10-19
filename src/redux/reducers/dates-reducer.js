const INITIAL_STATE={
    dateInit:null,
    dateFinish:null,
    daysNulled:[]
}

const dateReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_INITIAL_DATE':
            return {...state,dateInit:action.dateInit};
        case 'SET_FINISH_DATE':
            return {...state,dateFinish:action.dateFinish,daysNulled:action.daysNulled};
        case 'RESET_INITIAL_DATE':
            return {...state,dateInit:null,dateFinish:null,daysNulled:[]};
        case 'RESET_FINISH_DATE':
            return {...state,dateFinish:null,daysNulled:[]}
        case 'RESET_DATE':
            return {...state,dateInit:null, dateFinish:null, daysNulled:[] };
        default:
            return state;
    }
}

export default dateReducer;