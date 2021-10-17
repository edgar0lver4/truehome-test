import "../../styles/header.styles.scss";

const HeaderElement = (props)=>{
    return(
        <div className="header" style={{backgroundImage:'url(' + props.src+')'}}>
            <div className="cortina"></div>
            <span className="title">{props.title}</span>
        </div>
    )
}

export default HeaderElement;