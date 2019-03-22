import filtersReducer from './../../reducers/filters';
import moment from 'moment'

const filtersReducerDefaultState = { 
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('Init Redux action', () => {
    const state = filtersReducer(undefined, { type: '@INIT'})
    expect(state).toEqual(filtersReducerDefaultState)
})

test('setTextFilter_Reducer', () => {
    const text = 'hello'
    const state = filtersReducer(undefined,{ type: 'SET_TEXT_FILTER', text})
    expect(state.text).toBe(text)
})

test('sortByAmount_Reducer', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('sortByDate_Reducer', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('setStartDate_Reducer', () => {
    const momentStartDate = moment(0)
    const state = filtersReducer(undefined,{ type: 'SET_START_DATE', startDate: momentStartDate })
    expect(state.startDate).toBe(momentStartDate)
})

test('setEndDate_Reducer', () => {
    const momentEndDate = moment(999999)
    const state = filtersReducer(undefined,{ type: 'SET_END_DATE', endDate: momentEndDate })
    expect(state.endDate).toBe(momentEndDate)
})

