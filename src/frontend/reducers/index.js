import {combineReducers} from 'redux'

import value from './value'
import status from './status'
import socket from './socket'

const root = combineReducers({
    value,
    status,
    socket
})

export default root
