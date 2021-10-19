import { combineReducers,createStore,applyMiddleware } from 'redux';
import sesionReducer from './reducers/sesion-reducer';
import citiesReducer from './reducers/cities-reducer';
import dateReducer from './reducers/dates-reducer';
import FlightsReducer from './reducers/flights-reducer';
import { AirportsReducer } from './reducers/airports-reducer';
import ShopReducer from './reducers/shop-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({sesionReducer,citiesReducer,dateReducer,FlightsReducer,AirportsReducer,ShopReducer});

const store = createStore(reducers,applyMiddleware(thunk));

export default store;