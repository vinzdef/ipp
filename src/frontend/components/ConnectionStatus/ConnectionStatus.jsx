import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as bulma from 'bulma'
import * as styles from './ConnectionStatus.scss'

const mapStateToProps = ({status}) => ({status})

@connect (mapStateToProps)
class ConnectionStatus extends React.Component {
    render() {
        const {status} = this.props
        return <div className={styles.connectionStatus}>
            <span className={`${bulma.tags} ${bulma['has-addons']}`}>
                <span className={`${bulma.tag}`}>
                    Connection
                </span>
                <span className={`${bulma.tag} ${bulma[this.getTagColor()]}`}>
                    {status}
                </span>
            </span>
        </div>
    }


    getTagColor() {
        const {status} = this.props
        let tagColor = 'is-warning'
        if (status === 'UP') tagColor = 'is-success' 
        if (status === 'DOWN') tagColor = 'is-danger'
        return tagColor
    }
}

export default ConnectionStatus
