import {SEARCH_POSTS} from './actionTypes'


export const searchPosts = (strSearch) => {
    return {
        type: SEARCH_POSTS,
        payload: strSearch
    }
};