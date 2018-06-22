import React, {Component} from 'react'

import * as styles from './Application.scss'
import * as bulma from 'bulma'

import Navbar from '../Navbar/Navbar'
import TechStack from '../TechStack/TechStack'
import CounterValue from '../CounterValue/CounterValue'
import CounterButton from '../CounterButton/CounterButton'

export default class Application extends Component {
	render() {
		return <div className={styles.application}>
            
            <Navbar />

		    <div className={styles.applicationContent}>
            	<CounterValue />
				<CounterButton />
			</div>

            <div className={styles.attribution}>
                Made by: <a href="//ghzmdr.github.io" target="_blank">Vincent De Feo</a>, code <a href="//github.com/ghzmdr/TTI" target="_blank">here</a>
            </div>

            <TechStack />
		</div>
	}
}
