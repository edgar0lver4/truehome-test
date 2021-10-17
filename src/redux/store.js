import { combineReducers,createStore,applyMiddleware } from 'redux';
import sesionReducer from './reducers/sesion-reducer';
import citiesReducer from './reducers/cities-reducer';
import dateReducer from './reducers/dates-reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({sesionReducer,citiesReducer,dateReducer});

const store = createStore(reducers,applyMiddleware(thunk));

export default store;