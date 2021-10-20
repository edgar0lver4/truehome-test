import { API_URL } from '../../config/config';

export const setUuid = (uuid)=>{
    return{
        type:'SET_UUID',
        uuid:uuid
    }    
}

export const createToken = (uuid)=>{
    let url = `${API_URL}/auth/sesionStart/${uuid}`;
    return dispatch =>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(setToken(data.token));
        })
        .catch(e=>{
            console.log(e);
        });
    }
}

export const setSearchDates = (params)=>{
    return{
        type:'SET_SEARCH_TOKEN',
        searchDates:params
    }
}

export const setSearchCities = (params)=>{
    return{
        type:'SET_SEARCH_CITIES',
        searchCitiesOut:params
    }
}

export const setSearchCitiesStart = (params)=>{
    return{
        type:'SET_SEARCH_CITIES_START',
        searchCitiesStart:params
    }
}

export const resetSearchWithoutDestinations = ()=>{
    return{
        type:'REST_SEARCH_WITH_DESTIN'
    }
}

const setToken = (token)=>{
    return{
        type:'SET_TOKEN',
        token:token
    }
}