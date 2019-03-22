import moment from 'moment'

export const expenses = [
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