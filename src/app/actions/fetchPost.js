import React from 'react';
import {GET_POSTS} from '../actions/actionTypes';
import PostApi from '../api/postsApi';


export const fetchPostSuccess = (data) => {
    return {
        type: GET_POSTS,
        payload: data
    }
};

export const fetchPost = (token, id = '') => {
    return async dispatch => {
        try {
            let result = await PostApi.get(token, id);

            dispatch(fetchPostSuccess(result))
        } catch (e) {
            throw (e);
        }
    }
};