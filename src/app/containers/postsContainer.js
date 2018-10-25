import React from 'react';

import Title from '../components/Title'
import Control from '../components/Control'
import Form from '../components/Form'
import PostItem from '../containers/postItemContainer'



export default class PostsContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowForm: false
        }
    }

    render() {
        return (
            <div className="container">

                {/*Title start*/}
                <Title />
                {/*ende  title*/}

                {/*Control (search, sort add) start*/}
                <Control/>
                {/*End Controll*/}

                {/*Form start*/}
                <Form/>
                {/*End form*/}

                {/*List start*/}
                <PostItem/>
                {/*End list start*/}

            </div>
        );
    }
}

