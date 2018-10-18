import {SHOW_ADD_TASK} from './actionTypes'

export const toggleAdd =  (isShowAdd) => {
    return {
        type: SHOW_ADD_TASK,
        payload: isShowAdd
    }
}