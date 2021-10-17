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

const setToken = (token)=>{
    return{
        type:'SET_TOKEN',
        token:token
    }
}