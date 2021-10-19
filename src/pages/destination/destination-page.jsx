import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import HeaderElement from "../../elements/header/header";
import MiniCalendarElement from "../../elements/mini-calendar/mini-calendar";

const DestinationPage = ()=>{
    const { id } = useParams();
    const [info,setInfoCitie] = useState([]);
    const [vuelos,setVuelos] = useState([]);
    let citiesStore = useSelector((store)=>store.citiesReducer);
    let flightStore = useSelector((store)=>store.FlightsReducer);

    useEffect(()=>{
        function getCities(){
            let filter = citiesStore.cities.filter((itm)=>itm.id === id);
            let filter2= flightStore.flights.filter((itm)=>itm.id_ent === id);
            setInfoCitie(filter[0]);
            setVuelos(filter2[0]);
        }
        getCities();
    },[citiesStore.cities,id,flightStore.flights])
    
    return(
        <div>
            {info !== undefined ? <HeaderElement src={info.img} title={info.city}/> : null}
            <MiniCalendarElement id={id}/>
        </div>
    );
}

export default DestinationPage;