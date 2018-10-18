import {SORT_TASK} from './actionTypes'

//action click to task in list tasks
export const sortTask = (strSort) => {
    return {
        type: SORT_TASK ,
        payload: strSort
    }
}