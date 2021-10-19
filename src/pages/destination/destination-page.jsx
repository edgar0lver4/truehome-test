import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import HeaderElement from "../../elements/header/header";
import HorizontalCard from "../../elements/horizontal-card/horizontal-card";
import MiniCalendarElement from "../../elements/mini-calendar/mini-calendar";

const DestinationPage = ()=>{
    const { id } = useParams();
    const [info,setInfoCitie] = useState([]);
    const [vuelos,setVuelos] = useState([]);
    const [misVuelos,setMisVuelos] = useState([]);
    let citiesStore = useSelector((store)=>store.citiesReducer);
    let flightStore = useSelector((store)=>store.FlightsReducer);


    useEffect(()=>{
        const createFlights = ()=>{
            const horarios = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];
            let result = [];
            for(let i = 0; i < flightStore.flights.length; i++){
                for(let j = 0; j < horarios.length; j++){
                    let data = {
                        info:flightStore.flights[i],
                        horario: horarios[j]
                    }
                    result.push(data);
                }
            }
            let filter = result.filter((itm)=>itm.info.id_ent === id);
            setMisVuelos(filter);
        }
        function getCities(){
            let filter = citiesStore.cities.filter((itm)=>itm.id === id);
            let filter2= flightStore.flights.filter((itm)=>itm.id_ent === id);
            
            setInfoCitie(filter[0]);
            setVuelos(filter2[0]);
        }
        getCities();
        createFlights();
    },[citiesStore.cities,id,flightStore.flights,vuelos])
    
    return(
        <div>
            {info !== undefined ? <HeaderElement src={info.img} title={info.city}/> : null}
            <MiniCalendarElement id={id}/>
            {misVuelos.map((itm)=><HorizontalCard info={itm.info} horario={itm.horario} />)}
        </div>
    );
}

export default DestinationPage;