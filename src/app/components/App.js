import React from "react"

import {Title} from "./Title"
import {Control} from "./Control"
import Form from "./Form"
import {List} from "./List";


export  default class App extends React.Component{
    constructor() {
        super()

        this.state = {
            isShowFormAdd: false
        }
    }

    //event click button Add Task
    onHandleClickTaskAdd() {
        this.setState({
            isShowFormAdd: !this.state.isShowFormAdd
        });
    }

    render() {

        let showFormAdd = null;
        if(this.state.isShowFormAdd) {
            showFormAdd = <Form/>;
        }

        return(
            <div className="row">
                <div className="container">

                    {/*Title start*/}
                    <Title/>
                    {/*ende  title*/}

                    {/*Control (search, sort add) start*/}
                    <Control toggle = {this.state.isShowFormAdd}  onClickTaskAdd = {this.onHandleClickTaskAdd.bind(this)}/>
                    {/*End Controll*/}

                    {/*Form start*/}
                    {showFormAdd}
                    {/*End form*/}

                    {/*List start*/}
                    <List/>
                    {/*End list start*/}
                </div>
            </div>
        );
    }
}