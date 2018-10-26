import React from 'react';

import Title from '../components/Title'
import Control from '../components/Control'
import Form from '../containers/formContainer'
import PostItem from '../containers/postItemContainer'



export default class PostsContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowForm: false
        }
    }

    showForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }

    render() {

        let form = "";
        if(this.state.isShowForm) {
            form = <Form />;
        }

        return (
            <div className="container">

                {/*Title start*/}
                <Title />
                {/*ende  title*/}

                {/*Control (search, sort add) start*/}
                <Control toggleForm = {this.showForm.bind(this)} btnAdd = {this.state.isShowForm}/>
                {/*End Controll*/}

                {/*Form start*/}
                {form}
                {/*End form*/}

                {/*List start*/}
                <PostItem/>
                {/*End list start*/}

            </div>
        );
    }
}

