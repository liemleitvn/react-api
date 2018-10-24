import React from 'react';

import {Login_Container} from '../containers/loginContainer'
import PostsContainer from '../containers/postsContainer'

export default class App extends React.Component{

    constructor() {
        super();
    }

    showComponent () {

    }

    render() {

        return (
            <div className="container">

                {/*Login start*/}
                <Login_Container />
                {/*end login*/}

                {/*Test Posts container*/}

                <PostsContainer/>
            </div>
        );
    }
}