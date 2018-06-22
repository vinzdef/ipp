import {RECEIVE_VALUE} from '../actions/types'

const value = (state = '...', action) => {

	switch (action.type) {
		case RECEIVE_VALUE:
			return action.value
		default:
			return state
	}

}

export default value
