import React from "react";

import {Search_Container} from '../containers/SearchContainer';
import {Sort_Container} from '../containers/SortContainer';
import {Add} from './Controls/Add';

export class Control extends React.Component{

    onHandleClickTaskAdd() {
        this.props.onClickTaskAdd();
    }

    render() {

        return (
            <div className="row">

                {/*Search start*/}
                <Search_Container/>
                {/*End search*/}

                {/*Sort start*/}
                <Sort_Container/>
                {/*End Sort*/}

                {/*Add start*/}
                <Add toggle = {this.props.toggle} onClickTaskAdd = {this.onHandleClickTaskAdd.bind(this)}/>
                {/*End add*/}

            </div>
        );
    }
}