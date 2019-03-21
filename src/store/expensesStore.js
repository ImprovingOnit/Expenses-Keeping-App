import { createStore, combineReducers } from 'redux'
import expensesReducer from './../reducers/expenses'
import filtersReducer from './../reducers/filters'

const storeExport = () => {

    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }))
    
    return store
}

export default storeExport