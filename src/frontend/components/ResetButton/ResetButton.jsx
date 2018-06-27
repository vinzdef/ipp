import React, {Component} from 'react'

import {resetValue} from '../../actions/value'

import * as bulma from 'bulma'
import * as styles from './ResetButton.scss'
import {connect} from 'react-redux'

const mapStateToProps = ({status}) => ({isConnected: status === 'UP'})
const mapDispatchToProps = dispatch => ({
	resetValue: () => dispatch(resetValue())
})

@connect(mapStateToProps, mapDispatchToProps)
class ResetButton extends Component {	
	render() {
        const {isConnected} = this.props

		return <button disabled={!isConnected} className={`${bulma.button} ${bulma['is-dark']} ${styles.button}`} onClick={this.props.resetValue}>
			Reset
		</button>
	}
}

export default ResetButton
