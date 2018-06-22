import React, {Component} from 'react'

import * as bulma from 'bulma'
import * as styles from './Navbar.scss'

const Navbar = _ => <nav className={`${bulma.navbar} ${styles.navbar}`}>
    <div className={bulma['navbar-item']}>
        <div>
            <h1 className={bulma.title}>The Things Industries</h1>        
            <h3 className={bulma.subtitle}>Counter Exercise</h3>    
        </div>
    </div>
</nav>

export default Navbar
