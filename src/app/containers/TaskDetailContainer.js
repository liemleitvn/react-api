import React from 'react'
import {connect} from 'react-redux'

class TaskDetailContainer extends React.Component{
    render() {
        let level = "Small"
        if(this.props.taskDetail.level === 1) {
            level = "Medium";
        } else if (this.props.taskDetail.level === 2) {
            level = "High";
        }

        let task = <p>Select task on list to know detail task</p>
        if(this.props.taskDetail.task) {
            task =  <div>
                        <p>Your task: {this.props.taskDetail.task}</p>
                        <p>Level: {level}</p>
                        <p>Decription: {this.props.taskDetail.decription}</p>
                    </div>
        }

        return (
            task
        );
    }
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props
const mapStateToProps = state => {
    return {
        taskDetail: state.taskDetail
    }
}

//chuyen du lieu kieu props vao class TrItem de render
let Task_DetailContainer = connect(mapStateToProps)(TaskDetailContainer);

export default Task_DetailContainer;