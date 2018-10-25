import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import {searchPosts} from '../actions/searchAction'
import {fetchPost} from "../actions/fetchPost";


class SearchContainer extends React.Component{

    constructor () {
        super();
        this.state = {
            strSearch : "",
        }
    }

    handleChange (event) {
        this.setState({
            strSearch: event.target.value
        });
    }

    handleClear() {
        this.setState({
            strSearch: ""
        });
        this.handleSearch("");
    }

    handleSearch(strSearch) {
        const token = localStorage.getItem('token');
        this.props.fetchPost(token, "", strSearch);
    }

    render () {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                        onChange={(event)=> this.handleChange(event)}
                        type="text"
                        className="form-control"
                        value={this.state.strSearch}
                        placeholder="Seach for..."
                    />
                    <span className="input-group-btn">
                        <button onClick={()=>this.handleSearch(this.state.strSearch)} className="btn btn-info" type="button">Search</button>
                        <button onClick={this.handleClear.bind(this)} className="btn btn-warning" type="button">Clear</button>
                    </span>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        posts: state.posts,
        dataSearch: state.dataSearch
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchPost: fetchPost}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)