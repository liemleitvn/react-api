import {LOGIN} from "../actions/actionTypes"

export default  (state = {}, action) => {

    switch (action.type) {
        case LOGIN:
            return action.payload;

        default:
            return {};
    }
}