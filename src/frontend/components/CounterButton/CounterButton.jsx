import React, {Component} from 'react'

import {increaseValue} from '../../actions/value'

import * as bulma from 'bulma'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
	increaseValue: () => dispatch(increaseValue())
})

@connect(void 0, mapDispatchToProps)
class CounterButton extends Component {	
	render() {
		return <button className={bulma.button} onClick={this.props.increaseValue}>
			PUSH ME
		</button>
	}
}

export default CounterButton
