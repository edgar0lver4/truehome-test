import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/navbar.styles.scss';
import { useState } from 'react';

const Navbar = () =>{
    const [leftNav,setLeftNav] = useState(false);

    function __toggleLeftMenu(){
        setLeftNav(!leftNav);
    }

    return(
        <>
            <nav className="navbar">
                <span className="title">VOLANDOANDO</span>
                <div className="onlyDesktop submenu">
                    <NavLink exact to="/" className="sublink" activeClassName="selected">Inicio</NavLink>
                    <NavLink exact to="/destinations" className="sublink" activeClassName="selected">Destinos</NavLink>
                </div>
                <div className="onlyDesktop rightMenu">
                    <NavLink exact to="/my-reservations" className="myFlights_link" activeClassName="selected">
                        Mis vuelos <FontAwesomeIcon className="iconFly" icon={faPlaneDeparture}/>
                    </NavLink>
                </div>
                <div className="noDesktop leftmenu">
                    <button className="hamburger_menu button" onClick={__toggleLeftMenu}>
                        {   !leftNav ? 
                            <FontAwesomeIcon icon={faBars} className="icon"/> :
                            <FontAwesomeIcon icon={faTimes} className="icon"/>
                        }
                    </button>
                </div>
            </nav>
            
            <div className={leftNav ? "toggle-menu noDesktop on" : "toggle-menu noDesktop off"}>
                <div className="title">VOLANDOANDO</div>
                <NavLink exact to="/" className="sublink" activeClassName="selected">Inicio</NavLink>
                <NavLink exact to="/destinations" className="sublink" activeClassName="selected">Destinos</NavLink>
                <NavLink exact to="/my-reservations" className="sublink" activeClassName="selected">
                    Mis vuelos <FontAwesomeIcon className="iconFly" icon={faPlaneDeparture}/>
                </NavLink>
            </div>
        </>
    )
}

export default Navbar;