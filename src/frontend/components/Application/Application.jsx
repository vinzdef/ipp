import React, {Component} from 'react'
import {connect} from 'react-redux'

import {closeSocket} from '../../actions/socket'

import * as styles from './Application.scss'
import * as bulma from 'bulma'

import Navbar from '../Navbar/Navbar'
import TechStack from '../TechStack/TechStack'
import CounterValue from '../CounterValue/CounterValue'
import CounterButton from '../CounterButton/CounterButton'
import ResetButton from '../ResetButton/ResetButton'
import ConnectionStatus from '../ConnectionStatus/ConnectionStatus'

const mapStateToProps = ({socket}) => ({socket})
const mapDispatchToProps = dispatch => ({
    closeSocket: socket => dispatch(closeSocket(socket))
})

@connect(mapStateToProps, mapDispatchToProps)
class Application extends Component {
    constructor(props) {
        super(props)
        this.closeSocket = this.closeSocket.bind(this)
    }

    closeSocket() {
        const {socket, closeSocket} = this.props
        closeSocket(socket)
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.closeSocket)
    }

    componentWillUnmount() {
        window.addEventListener('beforeunload', this.closeSocket)
    }

	render() {
		return <div className={styles.application}>
            
            <Navbar />

		    <div className={styles.applicationContent}>
            	<CounterValue />
                <div className={styles.applicationControls}>
                    <CounterButton />
    				<ResetButton />
                </div>
			</div>

            <div className={styles.attribution}>
                Made by <a href="//ghzmdr.github.io" target="_blank">Vincent De Feo</a>, code <a href="//github.com/ghzmdr/TTI" target="_blank">here</a>
            </div>

            <TechStack />
            <ConnectionStatus />
		</div>
	}
}


export default Application
