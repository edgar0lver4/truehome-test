import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import HeaderElement from "../../elements/header/header";
import MiniCalendarElement from "../../elements/mini-calendar/mini-calendar";
import SearchComponent from "../../elements/search/search";
import { setSearchCitiesStart } from "../../redux/actions/sesion-actions";

const DestinationPage = ()=>{
    const { id } = useParams();
    const [info,setInfoCitie] = useState([]);
    let citiesStore = useSelector((store)=>store.citiesReducer);
    let flightStore = useSelector((store)=>store.FlightsReducer);
    let dispatch = useDispatch();

    useEffect(()=>{
        
        function getCities(){
            let filter = citiesStore.cities.filter((itm)=>itm.id === id);
            setInfoCitie(filter[0]);
        }   
        getCities();
        dispatch(setSearchCitiesStart(id));
    },[citiesStore.cities,id,flightStore.flights,dispatch])
    
    return(
        <div>
            {info !== undefined ? <HeaderElement src={info.img} title={info.city}/> : null}
            <div className="container row">
                <div className="lg-4 mid-12 sm-12"><MiniCalendarElement id={id}/></div>
                <div className="lg-8 mid-12 sm-12 container"><SearchComponent id={id}/></div>
            </div>
        </div>
    );
}

export default DestinationPage;