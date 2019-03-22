import moment from 'moment'
import * as filtersAction from '../../actions/filters'

test('sortByDate', () => {
    const action = filtersAction.sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('sortByAmount', () => {
    const action = filtersAction.sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('setTextFilter by default', () => {
    const action = filtersAction.setTextFilter()
    const text = ''
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('setTextFilter by adding parameter', () => {
    const text = 'Hello its me'
    const action = filtersAction.setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('setStartDate ', () => {
    const startDate = moment(0)
    const action = filtersAction.setStartDate(startDate)
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
    })
})


test('setEndDate ', () => {
    const endDate = moment(9999)
    const action = filtersAction.setEndDate(endDate)
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
    })
})
