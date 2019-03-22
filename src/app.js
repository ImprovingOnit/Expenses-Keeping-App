import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './routers/AppRouter'
import storeExport from './store/expensesStore'
import { addExpense } from './actions/expenses';

const store = storeExport()

store.dispatch(addExpense({ description: 'Test1', amount: 100, createdAt: 9000000 }))
store.dispatch(addExpense({ description: 'Test2', amount: 200, createdAt: 200000}))
store.dispatch(addExpense({ description: 'Test3', amount: 50, createdAt: 1000000000 }))
store.dispatch(addExpense({ description: 'Test4', amount: 150, createdAt: 300000000000 }))



const App = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))
