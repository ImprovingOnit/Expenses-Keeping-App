import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Header } from './../../components/Header'

test('render Header component', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('call startLogout on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})