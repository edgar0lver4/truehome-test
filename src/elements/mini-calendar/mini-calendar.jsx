import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { resetDate, setFinishDate, setInitalDate } from "../../redux/actions/date-actions";
import { createDates, getDatesDifference, sumDays, transformDate, unTransformDate } from "../../scripts/dateFunctions";

const __handleSelect = (id)=>{
    let [cities,setCities] = useState([]);
    let citiesStore = useSelector((store)=>store.citiesReducer);
    useEffect(()=>{
        function start(){
            let citiesFilter = citiesStore.cities.filter((itm)=>itm.id !== id)
            setCities(citiesFilter);
        }
        start();
    },[citiesStore.cities,id])
    return(
        <select>
            { cities.length > 0 ? cities.map((itm)=><option>{itm.city}</option>) : null }
        </select>
    )
}

const MiniCalendarElement = (props)=>{

    const [minDate,setMinDate] = useState("");
    const [minCuando,setMinCuando] = useState("");
    const [hasta,setHasta] = useState("");
    const [desde,setDesde] = useState("");

    let dispatch = useDispatch();
    let dateStore = useSelector((store)=>store.dateReducer);
    const  __handleDesde = (e)=>{
        let newDate = transformDate(e.target.value);
        let dsd = sumDays(newDate,1);

        dispatch(setInitalDate(sumDays(newDate,0)));

        setDesde(e.target.value);
        setMinCuando(unTransformDate(dsd.str));
    }
    const __handleCuando = (e)=>{
        let newDate = transformDate(e.target.value);
        let cuando = sumDays(newDate,0);
        let days = getDatesDifference(dateStore.dateInit.str,cuando.str);
        let nulledDays = createDates(dateStore.dateInit.str,days);
        
        dispatch(setFinishDate(cuando,nulledDays));

        setHasta(e.target.value);
    }

    const __handleClean = ()=>{
        setDesde("");
        setHasta("");
        dispatch(resetDate());
    }

    useEffect(()=>{
        function getActualDate(){
            let date = new Date(); //Fecha actual
            let month = date.getMonth()+1; //obteniendo mes
            let day = date.getDate(); //obteniendo dia
            let year = date.getFullYear(); //obteniendo año
            if(day<10)
                day='0'+day; //agrega cero si el menor de 10
            if(month<10)
                month='0'+month;
            setMinDate(year+"-"+month+"-"+day);
        }
        getActualDate();
    },[])

    return(
        <div>
            {__handleSelect(props.id)}
            <input type="date" value={desde} min={minDate} onChange={__handleDesde}/>
            <input type="date" value={hasta} min={minCuando} onChange={__handleCuando}/>
            <button onClick={__handleClean}><FontAwesomeIcon icon={faTrash}/> Limpiar</button>
            <button>Buscar <FontAwesomeIcon icon={faSearch}/></button>
        </div>
    )
}

export default MiniCalendarElement;