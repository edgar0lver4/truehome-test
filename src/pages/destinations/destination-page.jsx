import { useEffect, useState } from "react";
import { API_URL } from "../../config/config";
import HeaderElement from "../../elements/header/header";
import LoaderComponent from "../../elements/loader/loader";

const __handleDestinationComponent = (destinations)=>{
    return(
        <div>
            <HeaderElement 
                title="Los mejores destinos de México" 
                src="https://ep01.epimg.net/verne/imagenes/2018/03/28/mexico/1522266318_170272_1522289076_noticia_normal.jpg"/>
            {destinations.map((itm,i)=><div key={i}>{itm.city}</div>)}
        </div>
    )
}

const DestinationsPage = ()=>{

    const [destinations,setDestinations] = useState([]);
    useEffect(()=>{
        document.title = 'Volandoando | Nuestros destinos';
        async function getCities(){
            let url = `${API_URL}/cities/list/aabbcc`;
            console.log(url);
            try{
                let consult = await fetch(`${API_URL}/cities/list/aabbcc`);
                let result = await consult.json();
                setDestinations(result.data);
            }catch(e){
                console.error(e);
            }
        }
        getCities();
    },[])

    return(
        <div>
            {destinations.length > 0 ? __handleDestinationComponent(destinations) : <LoaderComponent message="Cargando destinos..."/>}
        </div>
    )
}

export default DestinationsPage;