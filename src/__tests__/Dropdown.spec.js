/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Dropdown from '../Dropdown'

test('Dropdown renders correctly and matches snapshot', () => {
  const handleChange = jest.fn()

  const component = renderer.create(
    <Dropdown
      value={'reactjs'}
      onChange={handleChange}
      options={['reactjs', 'angular2']}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Dropdown renders the correct elements and props', () => {
  const handleChange = jest.fn()

  const wrapper = shallow(
    <Dropdown
      value={'reactjs'}
      onChange={handleChange}
      options={['reactjs', 'angular2']}
    />
  )

  expect(wrapper.instance().props.options).toEqual(['reactjs', 'angular2'])
  expect(wrapper.instance().props.options[0]).toEqual('reactjs')
  expect(wrapper.instance().props.value).toEqual('reactjs')

  expect(wrapper.find('select').length).toEqual(1)
  expect(wrapper.find('option').length).toEqual(2)
  expect(wrapper.find('option').first().prop('value')).toEqual('reactjs')
  expect(wrapper.find('option').first().text()).toEqual('reactjs')

  // console.log(wrapper.debug())
})
