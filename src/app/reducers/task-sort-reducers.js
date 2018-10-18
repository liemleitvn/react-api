import {SORT_TASK} from '../actions/actionTypes'
import Tasks from './tasks-reducers';


export default  (state = {}, action) => {

    switch (action.type) {
        case SORT_TASK: {
            return action.payload;
        }

        default:
            return {};
    }
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props


