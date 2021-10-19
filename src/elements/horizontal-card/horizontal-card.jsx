import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShop } from "../../redux/actions/shop-actions";

import "../../styles/horizontalCard.styles.scss";

const HorizontalCard = (props)=>{
    const [city1,setCity1] = useState("");
    const [city2,setCity2] = useState("");
    const [reserved,setReserver] = useState(false);

    let airpotsStore = useSelector((store)=>store.AirportsReducer);
    let shopStore = useSelector((store)=>store.ShopReducer);
    let dispatch = useDispatch();
    
    useEffect(()=>{
        function start(){
            let filter = airpotsStore.airports.filter((itm)=>itm.id === props.info.id_ent);
            let filter2= airpotsStore.airports.filter((itm)=>itm.id === props.info.id_sal);
            if(filter2[0] !== undefined && filter[0] !== undefined){
                setCity1(filter[0].city);
                setCity2(filter2[0].city);
            }
        }
        start();
    },[airpotsStore.airports,props.info.id_ent,props.info.id_sal]);

    const __handleReserve = ()=>{
        let shopCar = shopStore.store;
        let data = {
            cd_salida: city1,
            cd_llegad: city2,
            costo: props.info.costo
        }
        shopCar.push(data)
        dispatch(setShop(shopCar));
        setReserver(true);
    }

    return(
        <div className={reserved ? "cardHorizontal reserved" : "cardHorizontal"}>
            <div className="d-flex row strech">
                <div className="city">{city1}</div>
                <div className="city">{city2}</div>
            </div>
            <div className="d-flex row strech">
                <div className="text-center">
                    Horario salida: {props.horario} 
                </div> 
                <div className="strech">
                    <div className="price">$ {props.info.costo}</div>
                    {reserved ? <span><FontAwesomeIcon icon={faCheckCircle}/> Reservado</span> : <button className="button-reserve" onClick={__handleReserve}>Reservar</button>}
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard;