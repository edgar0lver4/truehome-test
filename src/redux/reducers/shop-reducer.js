const INITIAL_STATE={
    store:[]
}

const ShopReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_STORE':
            return {...state,store:action.store};
        default:
            return state;
    }
}

export default ShopReducer;