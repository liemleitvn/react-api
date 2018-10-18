import React from "react"

import TaskContainer from '../containers/TaskListContainer'
import Task_DetailContainer from '../containers/TaskDetailContainer'

export const List = (props) => {

    return (

        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th style={{width: '10%'}} className="text-center">#</th>
                    <th>Task</th>
                    <th style={{width: '20%'}} className="text-center">Level</th>
                    <th style={{width: '20%'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                    <TaskContainer/>
                </tbody>
            </table>
            <hr/>
            <h2>Task Detail</h2>
            <Task_DetailContainer/>
        </div>
    );
}