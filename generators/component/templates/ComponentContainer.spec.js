/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import <%= componentName %>Container from '.'

describe('<<%= componentName %>Container>', () => {
  it('should render <<%= componentName %>> a div and className', () => {
    const wrapper = shallow(<<%= componentName %>Container className="example" />)

    expect(wrapper.is('div.example')).toBeTruthy()
    expect(wrapper.text()).toEqual('<%= componentName %>')
  })
})
