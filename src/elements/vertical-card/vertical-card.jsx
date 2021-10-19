import "../../styles/verticalCard.styles.scss";
const VerticalCard = (props)=>{

    return(
        <div className="card-vertical" style={{backgroundImage:`url(${props.img})`}}>
            <div className="miniCortina"></div>
            <div className="snippet">
                <div className="title">{props.city}</div>
                <div className="subtitle">{props.contry}</div>
            </div>
            <button className="button-footer">Ver vuelos</button>
        </div>
    )
}

export default VerticalCard;