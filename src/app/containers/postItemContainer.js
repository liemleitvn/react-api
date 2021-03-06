import React from 'react'
import {bindActionCreators} from "redux";
import {fetchPost} from "../actions/fetchPost";
import {deletePost} from '../actions/deletePost'
import connect from "react-redux/es/connect/connect";


class PostItemContainer extends React.Component{

    constructor() {
        super();
        this.state = {

        };
    }

    componentWillMount() {

        let token = localStorage.getItem('token');
        if(Object.keys(this.props.posts).length ===0) {
            this.props.fetchPost(token);
        }
    }

    handleClickItem(post) {
        let token = localStorage.getItem('token');
        let $result = this.props.deletePost(post.id, token);
    }

    createListPosts (posts) {
        let item =
            <tr>
                <td className="text-center">0</td>
                <td>Title</td>
                <td>No Content</td>
                <td className="text-center">Default</td>
                <td className="text-center">Default</td>
                <td></td>
            </tr>;

        if(Object.keys(posts).length !==0) {
            item = posts.map((post, index) => {
                return (
                    <tr key={index} >
                        <td className="text-center">{index + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td className="text-center">{post.category}</td>
                        <td className="text-center">{post.user}</td>
                        <td>
                            <button type="button" className="btn btn-warning">Edit</button>
                            <button onClick={()=>this.handleClickItem(post)} type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                );
            })
        }
        return item;
    }

    showPost() {

        let posts = this.props.posts;

        let strSearch = this.props.dataSearch;

        if(Object.keys(strSearch).length !== 0) {
            if(Object.keys(posts).length !==0) {

                strSearch = strSearch.toLowerCase().trim();

                posts = this.props.posts.filter((post, index)=> {
                    let title = post.title.toLowerCase().trim();
                    let content = post.content.toLowerCase().trim();

                    if(title.includes(strSearch) || content.includes(strSearch)) {
                        console.log(title, content);
                    }
                })
            }
        }

        return this.createListPosts(posts);
    }


    render () {

        if(this.props.resultCreatePost.message || this.props.dataDelete.message) {
            this.componentWillMount();
        }

        return (
            <div className="panel panel-success">
                <div className="panel-heading">Posts List</div>
                {/*<button onClick={this.getPosts.bind(this)}>Get Posts</button>*/}
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th style={{width: '10%'}} className="text-center">#</th>
                        <th style={{width: '20%'}}>Title</th>
                        <th>Content</th>
                        <th style={{width: '10%'}} className="text-center">User</th>
                        <th style={{width: '10%'}} className="text-center">Category</th>
                        <th style={{width: '15%'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.showPost()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        login: state.dataLogin,
        dataSearch: state.dataSearch,
        dataDelete: state.dataDelete,
        resultCreatePost: state.resultCreatePost
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchPost: fetchPost,deletePost: deletePost }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItemContainer);