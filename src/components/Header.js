import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => {
    return (
        <div>
            <h1>Expensify</h1>
            <NavLink exact activeClassName="is-active" to="/dashboard">DashBoard</NavLink>
            <NavLink activeClassName="is-active" to="/create">AddExpense</NavLink>
            <NavLink activeClassName="is-active" to="/help">Help</NavLink>
            <button onClick={startLogout}>Logout</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(null, mapDispatchToProps)(Header)