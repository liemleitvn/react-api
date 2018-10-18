import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {searchTask} from '../actions/searchTask';


class SearchContainer extends React.Component{
    constructor() {
        super();
        this.state = {
            strSearch: ""
        };
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        });
    }

    handleClickGo(strSearch) {
        this.props.searchTask(strSearch);
    }

    handleClickCancel() {
        this.setState({
            strSearch: ""
        });
        this.handleClickGo('');
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                        value={this.state.strSearch}
                        onChange={this.handleChange.bind(this)}
                        type="text" className="form-control"
                        placeholder="Seach for..."
                    />
                    <span className="input-group-btn">
                    <button onClick={()=>this.handleClickGo(this.state.strSearch)} className="btn btn-info" type="button">Go</button>
                    <button onClick={this.handleClickCancel.bind(this)} className="btn btn-warning" type="button">Clear</button>
                </span>
                </div>
            </div>
        );
    }
}

//mapStateToProps tra ve du lieu trong reducer va chuyen du lieu tu state thanh props
const mapStateToProps = state => {
    return {
        searchTask: state.taskSearch
    }
}

//chuyen du lieu tu action thanh props
const mapDispatchToProps = dispatch=> {
    return bindActionCreators({searchTask: searchTask}, dispatch)
};

export const Search_Container = connect(mapStateToProps,mapDispatchToProps)(SearchContainer);

