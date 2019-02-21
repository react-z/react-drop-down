import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dropdown extends Component {
  static get propTypes() {
    return {
      options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
    }
  }

  render() {
    const { value, onChange, options } = this.props

    return (
      <select onChange={e => onChange(e.target.value)} value={value}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }
}
