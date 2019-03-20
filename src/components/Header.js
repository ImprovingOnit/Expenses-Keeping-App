import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <h1>Expensify</h1>
            <NavLink exact activeClassName="is-active" to="/">Home Page</NavLink>
            <NavLink activeClassName="is-active" to="/create">AddExpense</NavLink>
            <NavLink activeClassName="is-active" to="/edit">EditExpense</NavLink>
            <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        </div>
    )
}

export default Header