import {combineReducers} from 'redux';


import dataLogin from './login-reducer';
import posts from './posts-reducer';
import dataSearch from './search-reducer';
import {routerReducer } from 'react-router-redux';


//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    dataLogin: dataLogin,
    posts: posts,
    dataSearch: dataSearch,
    routing: routerReducer
});

export default allReducers;