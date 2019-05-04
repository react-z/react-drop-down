## react-drop-down

[![npm version](https://badge.fury.io/js/react-drop-down.svg)](https://badge.fury.io/js/react-drop-down)

a simple drop down component

## Install

``` js
npm install react-drop-down --save
```

## Use

``` jsx
import Dropdown from 'react-drop-down'
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
```

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
