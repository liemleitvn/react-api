import {SEARCH_POSTS} from '../actions/actionTypes';


export default (state = {}, action) => {
    switch (action.type) {
        case SEARCH_POSTS:
            return action.payload;
        default:
            return {}
    }
}