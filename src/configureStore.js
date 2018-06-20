import root from './reducers'

import thunk from 'redux-thunk';

import {createStore, applyMiddleware, compose} from 'redux'

const configureStore = _ => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(root, {}, composeEnhancers(
        applyMiddleware(thunk)
    ))
    return store
}

export default configureStore
