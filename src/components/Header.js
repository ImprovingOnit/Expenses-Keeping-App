import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => {
    return (
        <div className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" exact to="/dashboard">
                        <h1>Expensify</h1>
                    </Link>
                    <button className="button button--link" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(null, mapDispatchToProps)(Header)

