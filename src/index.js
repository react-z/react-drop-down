import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

export default class DropDown extends Component {

  render() {
    const { value, onChange, options } = this.props

    return (
        <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
    )
  }
}

DropDown.propTypes = {
  options: PropTypes.arrayOf( PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
