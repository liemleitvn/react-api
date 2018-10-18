import {SEARCH_TASK} from '../actions/actionTypes';

export const searchTask = strSearch =>  {
    return {
        type: SEARCH_TASK,
        payload: strSearch,
    }
};
