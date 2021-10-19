import { Link } from "react-router-dom";
import "../../styles/verticalCard.styles.scss";
const VerticalCard = (props)=>{

    return(
        <div className="card-vertical" style={{backgroundImage:`url(${props.img})`}}>
            <div className="miniCortina"></div>
            <div className="snippet">
                <div className="title">{props.city}</div>
                <div className="subtitle">{props.contry}</div>
            </div>
            <Link className="button-footer" to={"/destination/"+props.id}>Ver vuelos</Link>
        </div>
    )
}

export default VerticalCard;