import React, {Component} from 'react'

import {SUBSCRIBE_VALUE_UPDATES, UPDATE_VALUE} from '../../actions/types'
import {subscribeValueUpdates} from '../../actions/value'

import * as styles from './CounterValue.scss'

import * as bulma from 'bulma'
import {connect} from 'react-redux'

const mapStateToProps = ({value}) => ({value})
const mapDispatchToProps = dispatch => ({ 
	subscribeValueUpdates: _ => dispatch(subscribeValueUpdates())
})

@connect(mapStateToProps, mapDispatchToProps)
class CounterValue extends Component {	
	componentDidMount() {
		this.props.subscribeValueUpdates()
	}

	render() {
		const {value} = this.props
		return <h3 className={`${bulma.title} ${styles.value}`}>
			{value}
		</h3>
	}
}

export default CounterValue
