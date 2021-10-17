import { useEffect, useState } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { animate, ANIMATION_MAPS_ENTER } from "../../config/config";


const HandleMap = withScriptjs(withGoogleMap(props =>
   
        <GoogleMap
            defaultZoom={6}
            defaultCenter={{ lat: props.latCenter, lng: props.lonCenter }}
        >
            <Marker position={{ lat: props.latCenter, lng: props.lonCenter }} style={{'background':'#C3C3C3'}} defaultAnimation={animate(ANIMATION_MAPS_ENTER)}/>
            {  props.markets.length > 0 && props.markets.length !== undefined ? 
                props.markets.map((itm)=><Marker position={{ lat: itm.lat, lng: itm.lon }} />)
                : null }
        </GoogleMap>

));

export const CustomMap = (props)=>{

    const [latCenter,setLatCenter] = useState(19.4434963);
    const [lonCenter,setLonCenter] = useState(-99.13768757);
    const [markets,setMarkets] = useState([]);

    useEffect(()=>{
        //Centramos en mexico, latitud y longitud en caso de que no tenga un market seleccionado
        //Latitud
        if(props.latCenter !== undefined){
            setLatCenter(parseFloat(props.latCenter));
        }
        //Longitud
        if(props.lonCenter !== undefined){
            setLonCenter(parseFloat(props.lonCenter));
        }
        //Metemos los markets
        if(props.markets !== undefined){
            setMarkets(props.markets);
        }
        console.log(props);
    },[latCenter,lonCenter,markets]);

    return(
        <HandleMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsni3X_HSE7VdcfR2teZUc4fRK5WHiyQU&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`,width:`600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            latCenter={latCenter}
            lonCenter={lonCenter}
            markets={markets}
        />
    )
}