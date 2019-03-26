import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import { expenses } from './../fixtures/expenses'
import database from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])

test('remove expense', () => {
    const action = removeExpense({id: '123abc'})
    expect(removeExpense(action)).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
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


// test('add expense by default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })


test('add expense by adding parameter', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test('add expense with defaults value to database store', (done) => {
    const store = createMockStore({})
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value') 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDataDefault)
        done()
    }) 
})


test('add expense to database and store', () => {
    const store = createMockStore({})
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value') 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    }) 
})


