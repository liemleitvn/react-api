import {SHOW_ADD_TASK} from '../actions/actionTypes'

export default (state = {}, action) => {
    let  isShowFormAdd
    switch (action.type) {
        case SHOW_ADD_TASK: {
            isShowFormAdd = !action.payload;
            return isShowFormAdd;
        }
    }
}