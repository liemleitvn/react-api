import {combineReducers} from 'redux';


import dataLogin from './login-reducer'


//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    dataLogin: dataLogin,
});

export default allReducers;