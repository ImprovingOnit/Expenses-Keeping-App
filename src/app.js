import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import storeExport from './store/expensesStore'
import * as expensesAction from './actions/expenses'
import * as filtersAction from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'



const store = storeExport()


store.subscribe(() => {
    const state = store.getState()
    console.log('///// get State')
    console.log(store.getState())
    console.log('///// Get visible')
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

store.dispatch(expensesAction.addExpense({ description: 'Water bill'}))
store.dispatch(expensesAction.addExpense({ description: 'Gas bill'}))



store.dispatch(filtersAction.setTextFilter('bill'))
store.dispatch(filtersAction.setTextFilter('water'))



ReactDOM.render(<AppRouter />, document.querySelector('#app'))