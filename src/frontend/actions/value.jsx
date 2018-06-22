import {UPDATE_VALUE, INCREASE_SUCCESS, INCREASE_FAILURE} from './types'

export function subscribeValueUpdates() {
	
	return function(dispatch) {
		const ws = new WebSocket(`ws://${window.location.hostname}:3000/v1/websocket`)
		ws.addEventListener('message', ({data}) => {
			dispatch({type: UPDATE_VALUE, value: data})
		})
	}
}

export function increaseValue() {
	return function (dispatch) {		
		fetch(`//${window.location.hostname}:3000/v1/increase`, {mode: 'no-cors', method: 'POST'})
			.then(dispatch({type: INCREASE_SUCCESS}))
			.catch(dispatch({type: INCREASE_FAILURE}))
	}
}
