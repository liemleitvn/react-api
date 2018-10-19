import React from 'react';

import Request from '../api/Request'

import {LOGIN} from './actionTypes'


export const login = (data) => {

    let request = new Request;
    let path = 'auth/login';

    let result = request.getTokenLogin(path,data);
    console.log(result);
    return {
        type: LOGIN,
        payload: data
    };
};