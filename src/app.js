import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
import AppRouter from './routers/AppRouter'
import storeExport from './store/expensesStore'
import { startSetExpenses } from './actions/expenses';


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

ReactDOM.render(<div>Loading....</div>, document.querySelector('#app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(<App />, document.querySelector('#app'))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in')
    } else {
        console.log('log out')
    }
})