import {SELECT_TASK} from './actionTypes'

//action click to task in list tasks
export const selectTask = (task) => {
    return {
        type: SELECT_TASK ,
        payload: task
    }
}