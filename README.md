## react-drop-down

[![npm version](https://badge.fury.io/js/react-social-buttons.svg)](https://badge.fury.io/js/react-social-buttons)

a simple drop down component

## Install

``` js
npm install react-drop-down --save
```

## Use

``` js
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import DropDown from 'react-drop-down'

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
```

## Development

**build src to lib**

    npm run build

**run tests**

    npm install
    npm test

**to run tests in the browser...**

`npm install webpack -g`

compile test.js to a bundle with webpack

	webpack ./test/test.js ./test/test-bundle.js

open test.html to view the tests in the browser

## License

[MIT](http://isekivacenz.mit-license.org/)