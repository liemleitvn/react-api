import {DELETE_POST} from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST:
            return action.payload;

        default:
            return {}
    }
}