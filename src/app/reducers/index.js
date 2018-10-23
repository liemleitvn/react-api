import {combineReducers} from 'redux';


import dataLogin from './login-reducer';
import posts from './posts-reducer';
import dataSearch from './search-reducer'


//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    dataLogin: dataLogin,
    posts: posts,
    dataSearch: dataSearch
});

export default allReducers;