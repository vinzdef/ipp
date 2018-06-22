import React, {Component} from 'react'

import {INCREASE_VALUE, CONNECT_WEBSOCKET} from '../../actions/types'

import * as styles from './CounterValue.scss'

import * as bulma from 'bulma'
import {connect} from 'react-redux'

const mapStateToProps = ({value}) => ({value})
const mapDispatchToProps = (dispatch) => ({
	connectWebSocket: dispatch({type: CONNECT_WEBSOCKET})
})

@connect(mapStateToProps, mapDispatchToProps)
class CounterValue extends Component {	
	componentDidMount() {
		this.props.connectWebSocket()
	}

	render() {
		const {value} = this.props
		return <h3 className={`${bulma.title} ${styles.value}`}>
			{value}
		</h3>
	}
}

export default CounterValue
