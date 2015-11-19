import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import DropDown from '../../lib/index.js' /* from 'react-drop-down' in your app */

class App extends React.Component {

 constructor(props) {
    super(props)
    this.state = { value: 'reactjs'}
  }

  handleChange (e) {
    this.setState({value: e})
    console.log(e)
  }

  render() {

    return (
      <div>

      	<DropDown value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  options={[ 'reactjs', 'angular2' ]} />

      </div>
    )
  }
}


render(<App />, document.getElementById('app'))