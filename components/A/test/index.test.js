import React from 'react'
import { shallow } from 'enzyme'

import A from '../index'

const href = 'http://www.github.com/mydearxym/mastani'
const children = 'desc'
const target = '_blank'

// .dive doc: http://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html

const renderComponent = () => shallow(<A href={href}>{children}</A>).dive()

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('a')
  })

  it('should have an href attribute', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.prop('href')).toEqual(href)
  })

  it('should have an target attribute', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.prop('target')).toEqual(target)
  })

  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })
})
