import { lazy } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Switch,Route,useLocation} from 'react-router-dom';

import "../styles/pages.styles.scss";
import DestinationPage from '../pages/destination/destination-page';


//Lazy Pages
const DestinationsPage = lazy(()=>import('../pages/destinations/destinations-page'));
const FlightsPage = lazy(()=>import('../pages/flights/flights-page'));
const IndexPage = lazy(()=>import('../pages/index/index-page'));
const MyReservationsPage = lazy(()=>import('../pages/my-reservations/my-reservations'));


const AppRoutes = ()=>{
    let location = useLocation();
    return(
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={400}>
                <Switch location={location}>
                    <Route exact path="/">
                        <IndexPage />
                    </Route>
                    <Route exact path="/destinations">
                        <DestinationsPage/>
                    </Route>
                    <Route exact path="/destination/:id">
                        <DestinationPage/>
                    </Route>
                    <Route exact path="/flights">
                        <FlightsPage/>
                    </Route>
                    <Route exact path="/my-reservations">
                        <MyReservationsPage/>
                    </Route>
                </Switch>
            </CSSTransition>
          </TransitionGroup>
    );
}

export default AppRoutes;