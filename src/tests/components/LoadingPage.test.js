import React from 'react'
import { shallow } from 'enzyme'

import { LoadingPage } from './../../components/LoadingPage'

test('snapshot render for loading page', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})