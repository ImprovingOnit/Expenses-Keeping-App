import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [
    {
        id: '1',
        description: 'Number1One',
        note: 'noteNumber1',
        amount: 100,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Number2Two',
        note: 'noteNumber2',
        amount: 200,
        createdAt: moment(0).subtract(3, 'day').valueOf()
    },
    {
        id: '3',
        description: 'Number3Three',
        note: 'noteNumber3',
        amount: 150,
        createdAt: moment(0).add(3, 'day').valueOf()
    }
]

test('should filter by text value', () => {
    const filters = {
        text: 'One',
        sortBy: 'date'
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[0] ])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[0], expenses[1] ])
})

test('soryBy Date', () => {
    const filters = {
        text: '',
        sortBy: 'date'
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('sortBy Amount', () => {
    const filters = {
            text: '',
            sortBy: 'amount'
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
})