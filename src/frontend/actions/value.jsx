import {
    UPDATE_VALUE, 
    INCREASE_SUCCESS, INCREASE_FAILURE,
    RESET_SUCCESS, RESET_FAILURE,
} from './types'

export function subscribeValueUpdates() {
	return function(dispatch) {
		const ws = new WebSocket(`ws://${window.Settings.API_URL}/websocket`)
		ws.addEventListener('message', ({data}) => {
			dispatch({type: UPDATE_VALUE, value: data})
		})
	}
}

export function increaseValue() {
	return function (dispatch) {		
		fetch(`//${window.Settings.API_URL}/increase`, {mode: 'no-cors', method: 'POST'})
			.then(() => dispatch({type: INCREASE_SUCCESS}))
			.catch(() => dispatch({type: INCREASE_FAILURE}))
	}
}

export function resetValue() {
    return function (dispatch) {        
        fetch(`//${window.Settings.API_URL}/reset`, {mode: 'no-cors', method: 'POST'})
            .then(() => dispatch({type: RESET_SUCCESS}))
            .catch(() => dispatch({type: RESET_FAILURE}))
    }
}
