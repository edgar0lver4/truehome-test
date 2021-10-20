import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createDates } from "../../scripts/dateFunctions";
import HorizontalCard from "../horizontal-card/horizontal-card";
import LoaderComponent from "../loader/loader";

const SearchComponent = (props)=>{
    
    const [misVuelos,setMisVuelos] = useState([]);

    let flightStore = useSelector((store)=>store.FlightsReducer);

    useEffect(()=>{
        const createFlights = ()=>{
            const fecha = new Date();
            let actual = `${fecha.getFullYear()}/${fecha.getMonth()}/${fecha.getDate()}`;
            const date = createDates(actual,60);
            const horarios = ["8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];
            let result = [];
            for(let i = 0; i < flightStore.flights.length; i++){
                for(let j = 0; j < horarios.length; j++){
                    let Random = parseInt(Math.random()*date.length-1);
                    let data = {
                        info:flightStore.flights[i],
                        horario: horarios[j],
                        fecha:date[Random].str
                    }
                    result.push(data);
                }
            }
            let filter = result.filter((itm)=>itm.info.id_ent === props.id);
            getLimitRange(filter);
        }
        function getLimitRange(vuelos,ini = 0, fin = 10){
            let result = [];
            for(let i = ini; i < fin; i++){
                result.push(vuelos[i]);
            }
            setMisVuelos(result);
        }
        createFlights();
    },[props.id,flightStore.flights])

    return(
        <div className="fullContent">
            {misVuelos.length > 0 ? 
            misVuelos.map((itm,i)=><HorizontalCard key={i} info={itm.info} horario={itm.horario} fecha={itm.fecha}/>) : 
            <LoaderComponent message="Cargando vuelos"/> }
        </div>
    )
}

export default SearchComponent;