import "../../styles/loader.styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane,faShoppingBag,faSuitcase,faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

const LoaderComponent = (props) =>{

    return(
        <div>
            <div className="content-animated">
                <div className="animated-principal">
                    <div className="icon-fly"><FontAwesomeIcon icon={faPlane}/></div>
                    <div className="loader-content">VOLANDOANDO:{props.message}</div>
                </div>
                <div className="microElements">
                    <div className="microElement first"><FontAwesomeIcon className="icon" icon={faSuitcaseRolling}/></div>
                    <div className="microElement second"><FontAwesomeIcon className="icon" icon={faSuitcase}/></div>
                    <div className="microElement thirth"><FontAwesomeIcon className="icon" icon={faShoppingBag}/></div>
                </div>
            </div>
        </div>
    )
}

export default LoaderComponent;