import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createDates } from "../../scripts/dateFunctions";
import HorizontalCard from "../horizontal-card/horizontal-card";
import LoaderComponent from "../loader/loader";

import "../../styles/search.styles.scss";

const SearchComponent = (props)=>{
    
    const [generated,setGenerated] = useState([]);
    const [misVuelos,setMisVuelos] = useState([]);
    const [citiesIn,setCitiesIn] = useState([]);
    const [citiesOn,setCitiesOn] = useState([]);

    let flightStore = useSelector((store)=>store.FlightsReducer);
    let sesionStore = useSelector((store)=>store.sesionReducer);

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
            if(generated.length === 0){
                setGenerated(filter);
            }
            getLimitRange(filter);
        }
        function getLimitRange(vuelos,ini = 0, fin = 10){
            let result = [];
            for(let i = ini; i < fin; i++){
                result.push(vuelos[i]);
            }
            setMisVuelos(result);
        }
        function searchParams(){
            if(sesionStore.searchCitiesOut !== null && sesionStore.searchCitiesStart !== null){
                if(sesionStore.searchDates !== null){
                    if(sesionStore.searchDates?.inicial !== null && sesionStore.searchDates?.final !== null){
                    //Busqueda de ciudades unicamentes
                        let filtersFinal = generated.filter((itm)=>
                            itm.info.id_sal === sesionStore.searchCitiesOut 
                            && itm.fecha === sesionStore.searchDates.final);
                        let filterIn = generated.filter((itm)=>
                        itm.info.id_sal === sesionStore.searchCitiesOut 
                        && itm.fecha === sesionStore.searchDates.inicial);
                        setCitiesIn(filterIn);
                        setCitiesOn(filtersFinal);
                    }else{
                        let filter = generated.filter((itm)=>
                        itm.info.id_sal === sesionStore.searchCitiesOut 
                        && itm.ifnfo.id_ent === sesionStore.searchCitiesStart);
                        setMisVuelos(filter);
                    }
                }else{
                    if(sesionStore.searchCitiesOut !== null){
                        let filter = generated.filter((itm)=>
                        itm.info.id_sal === sesionStore.searchCitiesOut 
                        && itm.info.id_ent === sesionStore.searchCitiesStart);
                        setMisVuelos(filter);
                    }else{
                        let filter = generated.filter((itm)=>itm.info.id_ent === props.id);
                        getLimitRange(filter);
                    }
                }
            }
        }
        createFlights();
        searchParams();
    },[props.id,flightStore.flights,sesionStore.searchDates,sesionStore.searchCitiesOut,sesionStore.searchCitiesStart,generated])

    return(
        <>
        <div className="fullContent">
            {citiesIn.length > 0 || citiesOn.length > 0 ? null : 
            ( citiesIn.length === 0 && citiesOn.length === 0 && misVuelos.length > 0 ?
            misVuelos.map((itm,i)=><HorizontalCard key={i} info={itm.info} horario={itm.horario} fecha={itm.fecha}/>) : 
            <LoaderComponent message="Cargando vuelos"/> ) }
        </div>
        <div className="fullContedTab">
            {citiesIn.length > 0 || citiesOn.length > 0  ? <HandleTabs in={citiesIn} out={citiesOn}/> : null}
        </div>
        </>
    )
}

const HandleTabs = (props)=>{
    const [tabSelected,setTabSelected] = useState(1);
    function __setTabSelected(val){
        setTabSelected(val);
    }
    return(
        <>
            <div className="d-flex row">
                <button className={tabSelected === 1 ? 'btnTab selecteditem' : 'btnTab no-selected'} onClick={()=>__setTabSelected(1)}>Fecha de salida  ({props.in.length}) </button>
                <button className={tabSelected === 2 ? 'btnTab selecteditem' : 'btnTab no-selected'} onClick={()=>__setTabSelected(2)}>Fecha de llegada ({props.out.length})</button>
            </div>
            <div className={tabSelected === 1 ? 'selected d-flex column' : 'off'}>
                {props.in.length > 0 ? props.in.map((itm,i)=><HorizontalCard key={i} info={itm.info} horario={itm.horario} fecha={itm.fecha}/>) : 'Sin resultados'}
            </div>
            <div className={tabSelected === 2 ? 'selected d-flex column' : 'off'}>
                {props.out.length > 0 ? props.out.map((itm,i)=><HorizontalCard key={i} info={itm.info} horario={itm.horario} fecha={itm.fecha}/>) : 'Sin resultados'}
            </div>
        </>
    )
}

export default SearchComponent;