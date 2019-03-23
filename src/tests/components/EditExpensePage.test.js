import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from './../../components/EditExpensePage'
import { expenses } from './../fixtures/expenses'


let wrapper, editExpenseOnRedux, removeExpenseFromRedux, history

beforeEach(() => {
    editExpenseOnRedux = jest.fn()
    removeExpenseFromRedux = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage
            editExpenseOnRedux={editExpenseOnRedux}
                removeExpenseFromRedux={removeExpenseFromRedux}
                    history={history}
                        expense={expenses[2]}
    />)
})

test('render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('handle edit expense onFormSubmit', () => {
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[2])
    expect(editExpenseOnRedux).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('handle remove expense onClick', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseFromRedux).toHaveBeenLastCalledWith(expenses[2].id)
})