import {SET_CONNECTION_STATUS} from '../actions/types'

const status = (state = 'PROBING', action) => {

	switch (action.type) {
		case SET_CONNECTION_STATUS:
			return action.value
		default:
			return state
	}

}

export default status
