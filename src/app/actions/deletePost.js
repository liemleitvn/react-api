import React from 'react';

import {DELETE_POST} from './actionTypes';
import deletePostApi from '../api/deletePostApi'


export const deletePostSuccess = data => {
    return {
        type: DELETE_POST,
        payload: data,
    }
};

export const deletePost = (id, token) => {

    return async dispatch => {
        try {
            let result = await deletePostApi.deletePost(token, id);

            dispatch(deletePostSuccess(result))
        } catch (e) {
            throw (e);
        }
    }
};

