import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'



const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}


const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})


const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})


const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

const filtersReducerDefaultState = { 
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    })
}

store.subscribe(() => {
    const state = store.getState()
    console.log(state.filters.text)
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(setTextFilter('itme'))
store.dispatch(addExpense({ description: 'HelloITsme', amount: 200, createdAt: -1000 }))
store.dispatch(addExpense({ description: 'Hello', amount: 100, createdAt: 1000 }))




