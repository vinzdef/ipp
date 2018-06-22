import React, {Component} from 'react'

import {INCREASE_VALUE} from '../../actions/types'

import * as bulma from 'bulma'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
	increaseValue: dispatch({type: INCREASE_VALUE})
})

@connect(null, mapDispatchToProps)
class CounterButton extends Component {	
	render() {
		return <button className={bulma.button}>
			PUSH ME
		</button>
	}
}

export default CounterButton
