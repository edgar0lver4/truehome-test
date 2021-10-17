import { API_URL } from "../config/config";

export default class SesionService{
    async createToken(uuid){
        try{
            let url = `${API_URL}/auth/sesionStart/${uuid}`;
            let consulta = await fetch(url);
            let resultado= await consulta.json();
            return resultado.token;
        }catch(e){
            return false;
        }
    }
    async verifyToken(token){
        try{
            let url = `${API_URL}/auth/verify/`;
            let headers = new Headers()
            headers.append('token',token);
            headers.append('Content-Type','application/json');

            let consulta = await fetch(url,{ method:'POST', headers:headers});
            let resultado = await consulta.json();
            return resultado;
        }catch(e){
            console.log('Error:'+e);
            return false;
        }
    }
}