import {combineReducers} from 'redux';

import Tasks from './tasks-reducers';
import TaskDetail from './task-detail-reducers';
import TaskSearch from './task-search-reducers'
import TaskSort from './task-sort-reducers'

//combineReducers combine nhung reducer lai voi nhau
const allReducers = combineReducers({
    tasks: Tasks,
    taskDetail: TaskDetail,
    taskSearch: TaskSearch,
    taskSort: TaskSort

});

export default allReducers;