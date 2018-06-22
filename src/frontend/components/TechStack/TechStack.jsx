import React, {Component} from 'react'

import * as bulma from 'bulma'
import * as styles from './TechStack.scss'

const TechStack = _ => <nav className={`${bulma.panel} ${styles.panel}`}>    
    <p className={bulma['panel-heading']}>
        Tech Stack
    </p>    
    <span className={bulma['panel-block']}>            
        <div className={`${bulma.tags} ${bulma['has-addons']}`}>
            <span className={bulma.tag}>Go</span>
            <span className={`${bulma.tag} ${bulma['is-info']}`}>Server</span>
        </div>
    </span>
    <span className={bulma['panel-block']}>
        <div className={`${bulma.tags} ${bulma['has-addons']}`}>
            <span className={bulma.tag}>Gorilla</span>
            <span className={`${bulma.tag} ${bulma['is-info']}`}>WebSockets</span>
        </div>
    </span>
    <span className={bulma['panel-block']}>            
        <div className={`${bulma.tags} ${bulma['has-addons']}`}>
            <span className={bulma.tag}>React</span>
            <span className={`${bulma.tag} ${bulma['is-info']}`}>Frontend</span>
        </div>
    </span>
    <span className={bulma['panel-block']}>            
        <div className={`${bulma.tags} ${bulma['has-addons']}`}>
            <span className={bulma.tag}>Redux</span>
            <span className={`${bulma.tag} ${bulma['is-info']}`}>State</span>
        </div>
    </span>
    <span className={bulma['panel-block']}>            
        <div className={`${bulma.tags} ${bulma['has-addons']}`}>
            <span className={bulma.tag}>Webpack</span>
            <span className={`${bulma.tag} ${bulma['is-info']}`}>Build</span>
        </div>
    </span>
    <span className={bulma['panel-block']}>            
        <div className={`${bulma.tags} ${bulma['has-addons']}`}>
            <span className={bulma.tag}>Bulma</span>
            <span className={`${bulma.tag} ${bulma['is-info']}`}>CSS</span>
        </div>
    </span>
</nav>

export default TechStack
