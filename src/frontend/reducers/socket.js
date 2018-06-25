import {SOCKET_CREATED} from '../actions/types'

const socket = (state = null, action) => {

	switch (action.type) {
		case SOCKET_CREATED:
			return action.socket
		default:
			return state
	}

}

export default socket
