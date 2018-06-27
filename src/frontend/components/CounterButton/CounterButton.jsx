import React, {Component} from 'react'

import {increaseValue} from '../../actions/value'

import * as bulma from 'bulma'
import * as styles from './CounterButton.scss'
import {connect} from 'react-redux'

const mapStateToProps = ({status}) => ({isConnected: status === 'UP'})
const mapDispatchToProps = dispatch => ({
	increaseValue: () => dispatch(increaseValue())
})

@connect(mapStateToProps, mapDispatchToProps)
class CounterButton extends Component {	
	render() {
        const {isConnected} = this.props
		return <button disabled={!isConnected} className={`${bulma.button} ${bulma['is-dark']} ${styles.button}`} onClick={this.props.increaseValue}>
			+1
		</button>
	}
}

export default CounterButton
