import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import HelpPage from './../components/HelpPage'
import EditExpensePage from './../components/EditExpensePage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


export const history = createBrowserHistory()

const AppRouter = () => {
    return (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
    )
}

export default AppRouter
