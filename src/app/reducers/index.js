import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';


import dataLogin from './login-reducer';
import posts from './posts-reducer';
import dataSearch from './search-reducer';
import dadaDelete from './delete-reducer';



//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    dataLogin: dataLogin,
    posts: posts,
    dataSearch: dataSearch,
    dadaDelete: dadaDelete,
    routing: routerReducer
});

export default allReducers;