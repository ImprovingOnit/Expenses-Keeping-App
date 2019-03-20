import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
        <div>404!</div>
    )
}

const routes = (
    <BrowserRouter>
        <div>
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