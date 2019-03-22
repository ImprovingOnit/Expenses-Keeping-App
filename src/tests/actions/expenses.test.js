import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


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


test('add expense by default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})


test('add expense by adding parameter', () => {
    const action = addExpense({ description: 'hello', note: 'notehello', amount: 12, createdAt: 10000})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'hello',
            note: 'notehello',
            amount: 12,
            createdAt: 10000
        }
    })
})

