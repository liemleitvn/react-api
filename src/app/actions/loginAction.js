import {LOGIN} from "./actionTypes";
import LoginApi from '../api/loginApi'




export const fetchLoginSuccess = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
};

export const fetchLogin = (data) => {
    return async dispatch => {
        try {
            let result = await LoginApi.login(data);
            if(result.token) {
                localStorage.setItem('token',result.token);
            }
            else {
                console.log(result)
            }
            dispatch(fetchLoginSuccess(result));
        } catch (e) {
            throw (e);
        }
    }
};