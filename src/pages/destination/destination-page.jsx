import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import HeaderElement from "../../elements/header/header";
import MiniCalendarElement from "../../elements/mini-calendar/mini-calendar";
import SearchComponent from "../../elements/search/search";

const DestinationPage = ()=>{
    const { id } = useParams();
    const [info,setInfoCitie] = useState([]);
    let citiesStore = useSelector((store)=>store.citiesReducer);
    let flightStore = useSelector((store)=>store.FlightsReducer);


    useEffect(()=>{
        
        function getCities(){
            let filter = citiesStore.cities.filter((itm)=>itm.id === id);
            setInfoCitie(filter[0]);
        }
        getCities();
    },[citiesStore.cities,id,flightStore.flights])
    
    return(
        <div>
            {info !== undefined ? <HeaderElement src={info.img} title={info.city}/> : null}
            <div className="container row">
                <div className="lg-4 mid-12 sm-12"><MiniCalendarElement id={id}/></div>
                <div className="lg-8 mid-12 sm-12 container center"><SearchComponent id={id}/></div>
            </div>
        </div>
    );
}

export default DestinationPage;