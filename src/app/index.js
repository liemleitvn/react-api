import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import allReducers from './reducers/index'
import App from './components/App'

const store = createStore(allReducers);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('content')
)