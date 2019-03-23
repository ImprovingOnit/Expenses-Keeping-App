import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { ExpenseListFilters } from './../../components/ExpenseListFilters'
import { filters, filtersTextStartDateEndDate } from '../fixtures/filters'

let wrapper, setTextFilterOnRedux, setSortByFilterOnRedux, setStartDateOnRedux, setEndDateOnRedux

beforeEach(() => {
    setTextFilterOnRedux = jest.fn()
    setSortByFilterOnRedux = jest.fn()
    setStartDateOnRedux = jest.fn()
    setEndDateOnRedux = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
                setTextFilterOnRedux={setTextFilterOnRedux}
                    setSortByFilterOnRedux={setSortByFilterOnRedux}
                        setStartDateOnRedux={setStartDateOnRedux}
                            setEndDateOnRedux={setEndDateOnRedux}
        />
    )
})

test('render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('render ExpenseListFilters with filtersTextStateDateEndDate correctly', () => {
    wrapper.setProps({
        filters: filtersTextStartDateEndDate
    })
    expect(wrapper).toMatchSnapshot()
})

test('handle text change on input change', () => {
    const text = 'hello'
    wrapper.find('input').simulate('change', { target: { value: text }})
    expect(setTextFilterOnRedux).toHaveBeenLastCalledWith(text)
})


test('handle sort by date', () => {
    const sortBy = 'date'
    wrapper.find('select').simulate('change', { target: { value: sortBy }})
    expect(setSortByFilterOnRedux).toHaveBeenLastCalledWith('date')
})

test('handle sort by amount', () => {
    const sortBy = 'amount'
    wrapper.find('select').simulate('change', { target: { value: sortBy }})
    expect(setSortByFilterOnRedux).toHaveBeenLastCalledWith('amount')
})

test('handle date change onDatesChange', () => {
    const startDate = moment(0)
    const endDate = moment(999).add(3, 'day')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDateOnRedux).toHaveBeenLastCalledWith(startDate)
    expect(setEndDateOnRedux).toHaveBeenLastCalledWith(endDate)
})

test('handle focused change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})

 