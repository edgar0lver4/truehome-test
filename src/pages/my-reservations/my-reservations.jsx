import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderElement from "../../elements/header/header";
import { setShop } from "../../redux/actions/shop-actions";

import "../../styles/myReservations.styles.scss";

const HandleList = (props)=>{
    let shopStore = useSelector((store)=>store.ShopReducer);
    let dispatch = useDispatch();
    const __handleRemove = (index)=>{
        let shop = shopStore.store;
        shop.splice(index,1);
        dispatch(setShop(shop));
    }
    return(
        <div className="target-list">
            <div className="content">
                <div className="d-flex row strech">
                    <div>{props.cdsal}</div>
                    <div>{props.cdlleg}</div>
                </div>
                <div className="d-flex column">
                    <div>{props.fecha}</div>
                    <div>{props.hora}</div>
                    <div>$ {props.price}</div>
                </div>
            </div>
            <div className="buttonContainer">
                <button className="buttonDelete" onClick={()=>__handleRemove(props.id)}><FontAwesomeIcon icon={faTrash}/> Eliminar</button>
            </div>
        </div>
    )
}

const MyReservationsPage = () =>{
    let shopStore = useSelector((store)=>store.ShopReducer);
    let [total,setTotal] = useState(0);
    useEffect(()=>{
        function start() {
            let subtot = 0;
            for(let i = 0; i < shopStore.store.length; i++){
                subtot += parseFloat(shopStore.store[i].costo);
            }
            setTotal(subtot.toFixed(2));
        }
        start();
    },[shopStore.store,shopStore.store.length])

    return(
        <div className="page">
            <HeaderElement 
                title="Mis reservaciones" 
                src="https://preview.redd.it/pz9o669vap931.jpg?auto=webp&s=4c6304c5d733096d5472bb69ee4ce1391ba5b63c"/>
            <h1 className="title">Mis reservaciones</h1>
            <div className="container row">
                <div className="d-flex column fullDesktop">
                    {shopStore.store.length > 0 ? shopStore.store.map((itm,i)=><HandleList key={i} id={i} cdsal={itm.cd_salida} cdlleg={itm.cd_llegad} price={itm.costo} hora={itm.hora} fecha={itm.fecha}/>) : <h1>No hay reservaciones</h1> }
                </div>
                <div className="totalizar">
                    <span className="title">Reservar</span>
                    <div><input placeholder="Nombre(s)" className="input"/></div>
                    <div><input placeholder="Apellidos" className="input"/></div>
                    <div><input placeholder="Direccion" className="input"/></div>
                    <div><input placeholder="Correo" className="input"/></div>
                    <div className="total">Total: $ {total}</div>
                    <div><button className="sells">Reservar</button></div>
                </div>
            </div>
        </div>
    )
}

export default MyReservationsPage;