import {
    UPDATE_VALUE, 
    SOCKET_CREATED, SOCKET_CLOSED,
    SET_CONNECTION_STATUS
} from './types'

export function createSocket() {
    return function(dispatch) {
        const ws = new WebSocket(`ws://${window.Settings.API_URL}/websocket`)
        dispatch({type: SOCKET_CREATED, socket: ws})

        ws.addEventListener('open', 
            _ => dispatch({type: SET_CONNECTION_STATUS, value: 'UP'})
        )
        
        ws.addEventListener('close', 
            _ => dispatch({type: SET_CONNECTION_STATUS, value: 'DOWN'})
        )
        
        ws.addEventListener('message', 
            ({data}) => dispatch({type: UPDATE_VALUE, value: data})
        )

        window.addEventListener('beforeunload', _ => dispatch(closeSocket(ws)))
    }
}


export function closeSocket(socket) {
    return function(dispatch) {
        socket.close()
        dispatch({type: SOCKET_CLOSED})
    }
}
