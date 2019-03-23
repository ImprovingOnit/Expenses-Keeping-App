import React from 'react'
import { shallow } from 'enzyme';


import { AddExpensePage } from './../../components/AddExpensePage';
import { expenses } from './../fixtures/expenses'


test('render AddExpensePage correctly', () => {
    const wrapper = shallow(<AddExpensePage />)
    expect(wrapper).toMatchSnapshot()
})

test('handle onFormSubmit', () => {
    const addExpenseToRedux = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(<AddExpensePage addExpenseToRedux={addExpenseToRedux} history={history}/>)
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpenseToRedux).toHaveBeenLastCalledWith(expenses[1])
})