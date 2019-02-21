import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Dropdown from '../src/Dropdown'

test('Dropdown component', (t) => {
  const test = () => {
     console.log('just testing...')
   }

  const wrapper = mount(
    <Dropdown value='reactjs'
              onChange={test.bind(this)}
              options={[ 'reactjs', 'angular2' ]} />
  )

  t.equal(
    wrapper.find('option').first().text(), 'reactjs', 'reactjs is selected by default'
  )

  t.end()
});
