import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class <%= componentName %> extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const { className } = this.props

    return (
      <div className={ className }><%= componentName %></div>
    )
  }
}
