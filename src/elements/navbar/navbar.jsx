import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faBars } from '@fortawesome/free-solid-svg-icons';
import '../../styles/navbar.styles.scss';

const Navbar = () =>{
    
    return(
        <nav className="navbar">
            <span className="title">VOLANDOANDO</span>
            <div className="onlyDesktop submenu">
                <NavLink exact to="/" className="sublink" activeClassName="selected">Inicio</NavLink>
                <NavLink to="destinations" className="sublink" activeClassName="selected">Destinos</NavLink>
                <NavLink to="/flights" className="sublink" activeClassName="selected">Vuelos</NavLink>  
            </div>
            <div className="onlyDesktop rightMenu">
                <NavLink to="/my-reservations" className="myFlights_link" activeClassName="selected">
                    Mis vuelos <FontAwesomeIcon className="iconFly" icon={faPlaneDeparture}/>
                </NavLink>
            </div>
            <div className="noDesktop leftmenu">
                <button className="hamburger_menu button">
                    <FontAwesomeIcon icon={faBars} className="icon"/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;