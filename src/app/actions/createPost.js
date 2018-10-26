import {CREATE_POST} from "./actionTypes";
import PostApi from '../api/postsApi'

export const createSuccess = (data) => {
    return {
        type: CREATE_POST,
        payload: data
    }
};

export const createPost = (token, title, category, content) => {
    return async dispatch => {
        try {
            let result = await PostApi.create(token,title,category,content);

            dispatch(createSuccess(result));
        } catch (e) {
            console.log(e);
        }
    }
};

