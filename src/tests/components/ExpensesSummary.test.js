import React from 'react'
import { shallow } from 'enzyme';

import { ExpensesSummary } from './../../components/ExpensesSummary'

test('render for 0 or 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={230}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={430}/>)
    expect(wrapper).toMatchSnapshot()
})

