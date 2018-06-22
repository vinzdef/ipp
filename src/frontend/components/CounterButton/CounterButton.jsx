import React, {Component} from 'react'

import {increaseValue} from '../../actions/value'

import * as bulma from 'bulma'
import * as styles from './CounterButton.scss'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
	increaseValue: () => dispatch(increaseValue())
})

@connect(void 0, mapDispatchToProps)
class CounterButton extends Component {	
	render() {
		return <button className={`${bulma.button} ${bulma['is-dark']} ${styles.button}`} onClick={this.props.increaseValue}>
			+1
		</button>
	}
}

export default CounterButton
