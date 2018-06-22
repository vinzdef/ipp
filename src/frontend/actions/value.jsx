import {UPDATE_VALUE, INCREASE_SUCCESS, INCREASE_FAILURE} from './types'

export function subscribeValueUpdates() {
	return function(dispatch) {
		const ws = new WebSocket('ws://localhost:3000/v1/websocket')
		debugger
		ws.addEventListener('message', ({data}) => {
			debugger
			dispatch({type: UPDATE_VALUE, value: data})
		})
	}
}

export function increaseValue() {
	return function (dispatch) {		
		fetch('//localhost:3000/v1/increase')
			.then(dispatch({type: INCREASE_SUCCESS}))
			.catch(dispatch({type: INCREASE_FAILURE}))
	}
}
