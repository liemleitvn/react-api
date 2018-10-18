import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {selectTask}  from '../actions/clickTask'

class TaskListContainer extends React.Component{

    /**
     * set lever task by
     * @param level
     * @returns {*}
     */
    setLevel(level) {

        let elmLevel = <span className="label label-default">Small</span>

        if(level === 1) {
            elmLevel = <span className="label label-warning">Medium</span>;
        } else if(level === 2) {
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }


    /**
     * handle when click on each task
     * get data in task click
     * pass to acction clickTask.js
     * @param item
     */
    handleClickDetail(item) {
        this.props.selectTask(item)
    }

    /**
     * Create list task
     * @param listTask
     * @returns {*}
     */
    creatTask(listTask = {}) {
        let listItem = null;
        //task list empty
        if(Object.keys(listTask).length ===0) {
            return (
                <tr>
                    <td className="text-center">0</td>
                    <td>Empty</td>
                    <td className="text-center">Default</td>
                    <td></td>
                </tr>
            );
        }

        listItem = listTask.map((item, index) => {
            return (
                <tr key={index} >
                    <td className="text-center">{index + 1}</td>
                    <td>{item.task}</td>
                    <td className="text-center">{this.setLevel(item.level)}</td>
                    <td>
                        <button type="button" className="btn btn-info" onClick={()=>this.handleClickDetail(item)}>Detail</button>
                        <button type="button" className="btn btn-warning"> Edit </button>
                        <button type="button" className="btn btn-danger"> Delete </button>
                    </td>
                </tr>
            );
        });
        return listItem;
    }

    sortTasksByLevel(listTask = {}, orderDir) {
        if(orderDir === 'desc') {
            return listTask.sort((a,b)=>{
                return b.level - a.level
            });
        }
        return listTask.sort((a,b)=>{
            return a.level - b.level
        });

    }

    sortTasksByTask(listTask = {}, orderDir) {
        if(orderDir === 'desc') {
            return (
                listTask.sort(function(a, b){
                    var x = a.task.toLowerCase();
                    var y = b.task.toLowerCase();
                    if (x > y) {return -1;}
                    if (x < y) {return 1;}
                    return 0;
                })
            );
        }

        return (
            listTask.sort(function(a, b){
                var x = a.task.toLowerCase();
                var y = b.task.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            })
        );
    }

    /**
     * Handle data
     * All data, data search, data sort
     * After return 1 jsx and pass to render func
     * @returns {*}
     */
    listTask() {

        let listTask = this.props.tasks;
        let strSearch = '';

        //code nay muc dich de tim kiem task
        if(typeof this.props.taskSearch === 'string') {
            strSearch = this.props.taskSearch.trim().toLowerCase();



            listTask = this.props.tasks.filter((task, index)=>{

                if(task.task.trim().toLowerCase().includes(strSearch)) {
                    return task;
                }
            });
        }

        //Perform sorting by name and asc when exporting data for the first time
        listTask = this.sortTasksByTask(listTask, 'asc')

        //Perform sorting when user click sort control
        if(Object.keys(this.props.taskSort).length !==0) {
            let orderBy = this.props.taskSort.orderBy;
            let orderDir = this.props.taskSort.orderDir;

            if (orderBy ==='name') {
                listTask = this.sortTasksByTask(listTask, orderDir);
            }
            if(orderBy == 'level') {
                listTask = this.sortTasksByLevel(listTask, orderDir);
            }
        }


        return this.creatTask(listTask)
    }


    render() {
        return (this.listTask())
    }

}
//chuyen du lieu tu action thanh props
const mapDispatchToProps = dispatch=> {
    return bindActionCreators({selectTask: selectTask}, dispatch)
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props
const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        taskSearch: state.taskSearch,
        taskSort: state.taskSort
    }
}

//chuyen du lieu kieu props vao class TaskListContainer de render
let TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);

export default TaskContainer;