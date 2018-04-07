/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import <%= componentName %> from '.'

describe('<<%= componentName %>>', () => {
  it('should render <<%= componentName %>> a div and className', () => {
    const wrapper = shallow(<<%= componentName %> className="example" />)

    expect(wrapper.is('div.example')).toBeTruthy()
    expect(wrapper.text()).toEqual('<%= componentName %>')
  })
})
