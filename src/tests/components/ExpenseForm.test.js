import React from 'react'
import { shallow } from 'enzyme'

import ExpenseForm from './../../components/ExpenseForm'
import { expenses } from './../fixtures/expenses'

test('render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('render ExpenseForm with Expense fixture', () => {
    const expense = expenses[0]
    const wrapper = shallow(<ExpenseForm expense={expense}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state(['error']).length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})


test('set description on input change', () => {
    const value = 'Hello'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state(['description'])).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('set note on textarea change', () => {
    const value = 'Hello'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state(['note'])).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('set amount on input change valid input', () => {
    const value = '12.04'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state(['amount'])).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('set amount on input change Invalid input', () => {
    const value = '12.0407'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state(['amount'])).toBe('')
    expect(wrapper).toMatchSnapshot()
})