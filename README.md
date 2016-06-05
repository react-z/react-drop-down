## react-drop-down

[![npm version](https://badge.fury.io/js/react-drop-down.svg)](https://badge.fury.io/js/react-drop-down)

a simple drop down component

## Install

``` js
npm install react-drop-down --save
```

## Versions

#### `1.0.0` uses React `^0.14.0`

#### `1.0.1` uses React `^0.15.1`

## Use

``` js
import Dropdown from 'react-drop-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { value: 'reactjs'}
  }

  handleChange (e) {
    this.setState({value: e})
    console.log(e)
  }

  render () {

    return (
      <div>
        <Dropdown value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  options={[ 'reactjs', 'angular2' ]} />
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
```

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
