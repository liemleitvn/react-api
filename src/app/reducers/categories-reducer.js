import {GET_CATEGORIES} from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.payload;
        default:
            return {}
    }
}