import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from './../../components/EditExpensePage'
import { expenses } from './../fixtures/expenses'


let wrapper, startEditExpenseOnRedux, startRemoveExpenseFromRedux, history

beforeEach(() => {
    startEditExpenseOnRedux = jest.fn()
    startRemoveExpenseFromRedux = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage
            startEditExpenseOnRedux={startEditExpenseOnRedux}
                startRemoveExpenseFromRedux={startRemoveExpenseFromRedux}
                    history={history}
                        expense={expenses[2]}
    />)
})

test('render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('handle edit expense onFormSubmit', () => {
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[2])
    expect(startEditExpenseOnRedux).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('handle remove expense onClick', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenseFromRedux).toHaveBeenLastCalledWith(expenses[2].id)
})