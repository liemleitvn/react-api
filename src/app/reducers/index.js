import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';


import dataLogin from './login-reducer';
import posts from './posts-reducer';
import dataSearch from './search-reducer';
import dataDelete from './delete-reducer';
import categories from './categories-reducer'
import resultCreatePost from './posts-create-reducer';



//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    dataLogin: dataLogin,
    posts: posts,
    dataSearch: dataSearch,
    dataDelete: dataDelete,
    categories: categories,
    resultCreatePost: resultCreatePost,
    routing: routerReducer
});

export default allReducers;