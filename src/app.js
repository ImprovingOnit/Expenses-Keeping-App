import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import storeExport from './store/expensesStore'
import { addExpense } from './actions/expenses';

const store = storeExport()

store.dispatch(addExpense({ description: 'Test1', amount: 100, createdAt: 9000 }))
store.dispatch(addExpense({ description: 'Test2', amount: 200, createdAt: 2000 }))
store.dispatch(addExpense({ description: 'Test2', amount: 50, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Test2', amount: 150, createdAt: 3000 }))



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
