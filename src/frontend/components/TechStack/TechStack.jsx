import React, {Component} from 'react'

import * as bulma from 'bulma'
import * as styles from './TechStack.scss'

const TechStack = _ => <nav className={`${bulma.panel} ${styles.panel}`}>    
    <p className={bulma['panel-heading']}>
        Tech Stack
    </p>    
    <span className={bulma['panel-block']}>            
        Go
    </span>
    <span className={bulma['panel-block']}>            
        WebSockets (Gorilla)
    </span>
    <span className={bulma['panel-block']}>            
        React
    </span>
    <span className={bulma['panel-block']}>            
        Redux
    </span>
    <span className={bulma['panel-block']}>            
        Webpack
    </span>
    <span className={bulma['panel-block']}>            
        Bulma
    </span>
</nav>

export default TechStack
