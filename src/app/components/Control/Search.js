import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import {searchPosts} from '../../actions/searchAction'


class Search extends React.Component{

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
    }

    handleSearch(strSearch) {
        this.props.search(strSearch);
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
                        <button onClick={()=>this.handleSearch(this.state.strSearch)} className="btn btn-info" type="button">Go</button>
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
    return bindActionCreators({search: searchPosts}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)