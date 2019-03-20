import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => {
    return (
        <div>
            DashBoard
        </div>
    )
}

const AddExpensePage = () => {
    return (
        <div>
            AddExpensePage
        </div>
    )
}

const EditExpensePage = () => {
    return (
        <div>
            Edit Page
        </div>
    )
}

const HelpPage = () => {
    return (
        <div>Help Page</div>
    )
}

const NotFoundPage = () => {
    return (
        <div>
            404! - <Link to="/">Go To DashBoard</Link>
        </div>
    )
}

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

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)


ReactDOM.render(routes, document.querySelector('#app'))