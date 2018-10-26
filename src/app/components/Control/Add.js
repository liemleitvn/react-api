import React from 'react'


export default class Add extends React.Component{

    constructor() {
        super();
    }

    handleClickAdd() {

         this.props.toggleForm();
    }

    render () {

        let btnName = "Insert";
        if(this.props.btnAdd) {
            btnName = "Hide"
        }

        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button
                    onClick={this.handleClickAdd.bind(this)}
                    type="button"
                    className="btn btn-info btn-block"
                >
                    {btnName}
                </button>
            </div>
        );
    }
}