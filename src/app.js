import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
import AppRouter, { history } from './routers/AppRouter'
import storeExport from './store/expensesStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'

const store = storeExport()

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    )
}

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<App />, document.querySelector('#app'))
        hasRendered = true
    }
}

ReactDOM.render(<div>Loading....</div>, document.querySelector('#app'))


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        console.log('log in', user.uid)
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        console.log('log out')
        renderApp()
        history.push('/')
    }
})