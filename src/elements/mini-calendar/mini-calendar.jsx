import { faSlidersH, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { resetDate, setFinishDate, setInitalDate } from "../../redux/actions/date-actions";
import { createDates, getDatesDifference, sumDays, transformDate, unTransformDate } from "../../scripts/dateFunctions";
import "../../styles/miniCalendar.styles.scss";

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
        <div className="form-container">
            <label className="form-label">Ciudad de origen</label>
            <select className="form-select">
                <option value="0">Todos</option>
                { cities.length > 0 ? cities.map((itm)=><option value={itm.id}>{itm.city}</option>) : null }
            </select>
        </div>
    )
}

const MiniCalendarElement = (props)=>{

    const [minDate,setMinDate] = useState("");
    const [minCuando,setMinCuando] = useState("");
    const [hasta,setHasta] = useState("");
    const [desde,setDesde] = useState("");
    const [toggleButton,setToggleButton] = useState(false);

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

    function __handleMenuSearch(){
        setToggleButton(!toggleButton);
    }
    return(
        <>
            <div className="mini-calendar onlyDesktop container column">
                {__handleSelect(props.id)}
                <div className="form-container">
                    <label className="form-label">Desde</label>
                    <input className="form-input" type="date" value={desde} min={minDate} onChange={__handleDesde}/>
                </div>
                <div className="form-container">
                    <label className="form-label">Hasta</label>
                    <input className="form-input" type="date" value={hasta} min={minCuando} onChange={__handleCuando}/>
                </div>
                <div className="form-container center">
                    <button onClick={__handleClean} className="button-clear"><FontAwesomeIcon icon={faTrash}/> Limpiar</button>
                </div>
            </div>
            <div className="mini-snippet onlyTabletPhone">
                <button className="toggle-button" onClick={()=>__handleMenuSearch()}><FontAwesomeIcon icon={faSlidersH}/></button>
            </div>
            <div className={ toggleButton ? "onlyTabletPhone menuToggle active container column" : "onlyTabletPhone menuToggle off" }>
                <div className="toggle-content">
                    <button className="toggle-button" onClick={()=>__handleMenuSearch()}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
                <div className="title">Filtros</div>
                {__handleSelect(props.id)}
                <div className="form-container">
                    <label className="form-label">Desde</label>
                    <input className="form-input" type="date" value={desde} min={minDate} onChange={__handleDesde}/>
                </div>
                <div className="form-container">
                    <label className="form-label">Hasta</label>
                    <input className="form-input" type="date" value={hasta} min={minCuando} onChange={__handleCuando}/>
                </div>
                <div className="form-container center">
                    <button onClick={__handleClean} className="button-clear"><FontAwesomeIcon icon={faTrash}/> Limpiar</button>
                </div>
                <div className="form-container center">
                    <button onClick={__handleClean} className="button-search">Buscar</button>
                </div>
            </div>
        </>
    )
}

export default MiniCalendarElement;