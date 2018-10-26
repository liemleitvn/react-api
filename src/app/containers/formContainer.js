import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchCategories} from '../actions/fetchCategory'
import {createPost} from "../actions/createPost";


class FormContainer extends React.Component{

    constructor() {
        super();

        this.state = {
            title: "",
            category: -1,
            content: ""
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        this.props.fetchCategories(token);

    }

    handleCancel() {
        this.setState ({
            title: "",
            category: -1,
            content: ""
        });

    }

    insertPost() {
        let {title, category, content} = this.state;
        let checkInfo = true;

        if(title === "") {
            alert('Title is not null');
            return false;
        }

        if(category === -1) {
            alert('Please select category!');
            return false;
        }

        if(content ==="") {
            alert(('Content is not null'));
            return false;
        }

        let token = localStorage.getItem('token');

        this.props.createPost(token, title, category, content);
    }

    render () {

        let categories = this.props.categories;

        let category = "";

        if(Object.keys(categories).length !==0) {
            category = categories.map((item,index) => {
                return (<option key={index} value={item.id}>{item.name}</option>);
            });
        }

        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action = "" method="post" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="add">label</label>
                            <input
                                onChange={(event)=>this.handleChange(event)}
                                name="title"
                                style={{width: 190}}
                                id="add"
                                type="text"
                                className="form-control"
                                value={this.state.title}
                            />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="inputDs">label</label>
                            <select
                                onChange={(event)=>this.handleChange(event)}
                                value={this.state.category}
                                name="category"
                                id="inputDs"
                                className="form-control"
                                required
                            >
                                <option value={-1}>-----Category-----</option>
                                {category}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="add">label</label>
                            <textarea
                                onChange={(event)=>this.handleChange(event)}
                                name="content"
                                style={{width: 300, height: 100}}
                                id="content"
                                className="form-control"
                                value={this.state.content}
                            />

                        </div>
                        <button onClick={this.insertPost.bind(this)} type="button" className="btn btn-primary">Submit</button>
                        <button onClick={this.handleCancel.bind(this)} type="button" className="btn btn-primary">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        resultCreatePost: state.resultCreatePost,
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchCategories: fetchCategories, createPost: createPost}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);