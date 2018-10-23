import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import App from './components/App'
import {store} from './store/store'

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('content')
)