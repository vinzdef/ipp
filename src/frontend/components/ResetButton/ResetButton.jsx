import React, {Component} from 'react'

import {resetValue} from '../../actions/value'

import * as bulma from 'bulma'
import * as styles from './ResetButton.scss'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
	resetValue: () => dispatch(resetValue())
})

@connect(void 0, mapDispatchToProps)
class CounterButton extends Component {	
	render() {
		return <button className={`${bulma.button} ${bulma['is-dark']} ${styles.button}`} onClick={this.props.resetValue}>
			Reset
		</button>
	}
}

export default CounterButton
