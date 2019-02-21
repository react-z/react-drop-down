import Dropdown from '../lib/Dropdown' // 'react-drop-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'reactjs' }
  }

  handleChange(e) {
    this.setState({ value: e })
    console.log(e)
  }

  render() {
    return (
      <div>
        <Dropdown
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          options={['reactjs', 'angular2']}
        />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
