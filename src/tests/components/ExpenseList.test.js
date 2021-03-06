import React from 'react'
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList'
import { expenses } from './../fixtures/expenses';


test('render ExpenseList with expenses fixture', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})


test('render ExpenseList without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})