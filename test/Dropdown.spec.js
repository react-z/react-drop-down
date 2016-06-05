import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Dropdown from '../src/Dropdown'

test('Dropdown component', (t) => {
  setupJsdom()

  const test = () => {
     console.log('just testing...')
   }

  const component = shallow(
    <Dropdown value='reactjs'
              onChange={test.bind(this)}
              options={[ 'reactjs', 'angular2' ]} />
  )
  const wrapper = mount(
    <Dropdown value='reactjs'
              onChange={test.bind(this)}
              options={[ 'reactjs', 'angular2' ]} />
  )

  t.equal(
    component.find('option').first().text(), 'reactjs', 'reactjs is selected by default'
  )

  t.end()
});
