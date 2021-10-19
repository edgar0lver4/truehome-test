export const setInitalDate = (date)=>{
    return{
        type:'SET_INITIAL_DATE',
        dateInit:date
    }
}
export const setFinishDate = (date,daysNulled)=>{
    return{
        type:'SET_FINISH_DATE',
        dateFinish:date,
        daysNulled:daysNulled
    }
}
export const resetInitialDate = ()=>{
    return{
        type:'RESET_INITIAL_DATE'
    }
}
export const resetFinishDate = ()=>{
    return{
        type:'RESET_FINISH_DATE'
    }
}
export const resetDate = ()=>{
    return{
        type:'RESET_DATE'
    }
}