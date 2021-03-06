import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense, 
    startEditExpense
} from '../../actions/expenses'
import { expenses } from './../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'mytestuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => { 
        expensesData[id] = { description, note, amount, createdAt
        }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})


test('remove expense', () => {
    const action = removeExpense({id: '123abc'})
    expect(removeExpense(action)).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})


test('remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then(snapshot => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})


test('edit expense', () => {
    const id = '123abc'
    const updates = { description: 'hello' }
    const action = editExpense(id, updates)
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
    })
}) 


test('edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = {
        amount: 20000000
    }
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then(snapshot => {
        const amount = snapshot.val().amount
        expect(amount).toBe(updates.amount)
        done()
    })
})


test('add expense by adding parameter', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test('add expense with defaults value to database store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDataAdd = {}
    const expenseDataDefault =  {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0 
    }
    store.dispatch(startAddExpense(expenseDataAdd)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDataDefault
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value') 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDataDefault)
        done()
    }) 
})


test('add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Hello',
        amount: 3000,
        note: 'Hello Note',
        createdAt: 1000000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value') 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    }) 
})


test('setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})


test('fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

