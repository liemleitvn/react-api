import React from 'react'

import Search from '../containers/SearchContainer'
import Sort from './Control/Sort'
import Add from './Control/Add'


export default class Control extends React.Component{
    render () {

        return (
            <div className="row">

                {/*Search start*/}
                <Search/>
                {/*End search*/}

                {/*Sort start*/}
                <Sort/>
                {/*End Sort*/}

                {/*Add start*/}
                <Add toggleForm = {this.props.toggleForm} btnAdd = {this.props.btnAdd}/>
                {/*End add*/}
            </div>
        );
    }
}