import React from "react"

export class Add extends React.Component{

    onHandleClickTaskAdd() {
        this.props.onClickTaskAdd();
    }

    render() {

        let nameBtn = "Add Task";
        if(this.props.toggle) {
            nameBtn = "Hide Task"
        }

        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button onClick={this.onHandleClickTaskAdd.bind(this)} type="button" className="btn btn-info btn-block">{nameBtn}</button>
            </div>
        );
    }
}