import { API_URL } from "../config/config";

export class CatalogService{
    constructor(){
        this.urlAPI = API_URL;
    }
    async getVuelos(token){
        try{
            let consult = await fetch(`${this.urlAPI}/flight/list/${token}`);
            let result = await consult.json();
            return result;
        }catch(e){
            console.log(e);
        } 
    }
    async getCities(token){
        let url = `${API_URL}/cities/list/${token}`;
        try{
            let consult = await fetch(url);
            let result = await consult.json();
            return result;
        }catch(e){
            console.error(e);
        }
    }
}