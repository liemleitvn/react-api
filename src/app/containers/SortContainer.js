import React from "react"
import {connect} from 'react-redux'
import {sortTask} from '../actions/sortTask'
import {bindActionCreators} from 'redux'

class SortContainer extends React.Component{

    constructor() {
        super();
        this.state = {
            orderBy: "name",
            orderDir: "asc"
        }

    }

    handleSort(orderBy,orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
        this.props.sortTask({'orderBy': orderBy, 'orderDir': orderDir})
    }

    render() {
        let strSort = this.state.orderBy + '-' + this.state.orderDir;

        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle"
                            type="button" id="dropdownMenu1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                    >
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a onClick={()=>this.handleSort('name', 'asc')} role="button">Name ASC</a></li>
                        <li><a onClick={()=>this.handleSort('name', 'desc')} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={()=>this.handleSort('level', 'asc')} role="button">Level ASC</a></li>
                        <li><a onClick={()=>this.handleSort('level', 'desc')} role="button">Level DESC</a></li>
                    </ul>
                    <span className="label label-success" style={{padding: 8, fontSize: 15}}>{strSort}</span>
                </div>
            </div>
        );
    }
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props
const mapStateToProps = state => {
    return {
        sortTask: state.taskSort
    }
}

//chuyen du lieu tu action thanh props
const mapDispatchToProps = dispatch=> {
    return bindActionCreators({sortTask: sortTask}, dispatch)
};

export const Sort_Container = connect(mapStateToProps,mapDispatchToProps)(SortContainer);

