import React from 'react'

import {Login_Container} from '../containers/Login'

export default class App extends React.Component{

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">

                {/*Login start*/}
                <Login_Container />
                {/*end login*/}


            </div>
        );
    }
}