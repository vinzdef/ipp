import React, {Component} from 'react'
import {TweenLite} from 'gsap'

import {SUBSCRIBE_VALUE_UPDATES, UPDATE_VALUE} from '../../actions/types'
import {createSocket} from '../../actions/socket'

import * as styles from './CounterValue.scss'

import * as bulma from 'bulma'
import {connect} from 'react-redux'

const mapStateToProps = ({value}) => ({value})
const mapDispatchToProps = dispatch => ({ 
	createSocket: _ => dispatch(createSocket())
})

@connect(mapStateToProps, mapDispatchToProps)
class CounterValue extends Component {
    constructor(props) {
        super(props)
        this._value = React.createRef()
    }

	componentDidMount() {
		this.props.createSocket()
	}

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this._shakeValue()
        }
    }

    _shakeValue() {
        if (!this.props.value) return
        const x = (this.props.value % 2) === 1 ? 10 : -10        
        TweenLite.to(this._value.current, 0.2, {x, ease: Power2.easeOut})
    }

	render() {
		const {value} = this.props
		return <h3 className={`${bulma.title} ${styles.value}`} ref={this._value}>
			{value}
		</h3>
	}
}

export default CounterValue
