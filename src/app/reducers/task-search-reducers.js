import {SEARCH_TASK} from '../actions/actionTypes'



export default  (state = {}, action) => {

    switch (action.type) {
        case SEARCH_TASK: {
            return action.payload;
        }

        default:
            return {};
    }
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props


