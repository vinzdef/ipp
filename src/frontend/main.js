import React from 'react'
import ReactDOM from 'react-dom'

require('./scss/main.scss')

import {Provider} from 'react-redux'
import configureStore from './configureStore'

import Application from './components/Application/Application'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Application/>
    </Provider>,
    document.querySelector('#root')
);

