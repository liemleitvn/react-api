import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

import App from './components/App';
import {store} from './store/store';

const history = createHistory();

ReactDom.render(
    <Router>
        <Provider store={store}>
            <ConnectedRouter history = {history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </Router>,
    window.document.getElementById('content')
)