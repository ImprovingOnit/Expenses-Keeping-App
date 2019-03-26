import expensesReducer from './../../reducers/expenses'
import { expenses } from './../fixtures/expenses'

const expensesReducerDefaultState = [
    {
        id: '123abc',
        description: 'hello',
        note: 'notehello',
        amount: 0,
        createdAt: 10000 
    },
    {
        id: '123abcd',
        description: 'hello',
        note: 'notehello',
        amount: 0,
        createdAt: 10000 
    }
]


test('Init Redux action', () => {
    const state = expensesReducer(undefined, { type: '@INIT'})
    expect(state).toEqual([])
})

test('addExpense_Reducer', () => {
    const expense = { 
        id: 'newversion',
        description: 'hello',
        note: 'notehello',
        amount: 0,
        createdAt: 10000 
    }
    const state = expensesReducer(expensesReducerDefaultState, { type: 'ADD_EXPENSE', expense })
    expect(state).toEqual([ ...expensesReducerDefaultState, expense ])
})

test('removeExpense_Reducer', () => {
    const id = '123abc'
    const state = expensesReducer(expensesReducerDefaultState, { type: 'REMOVE_EXPENSE', id })
    expect(state).toEqual([ expensesReducerDefaultState[1] ])
})

test('editExpense_Reducer', () => {
    const id = '123abc'
    const updates = {
        description: 'Updated Description'
    }
    const state = expensesReducer(expensesReducerDefaultState, { type: 'EDIT_EXPENSE', id, updates })
    expect(state[0].description).toBe(updates.description)
})

test('set expenses', () => {
    const state = expensesReducer(expensesReducerDefaultState, { type: 'SET_EXPENSES', expenses: [expensesReducerDefaultState[0]] })
    expect(state).toEqual([expensesReducerDefaultState[0]])
})