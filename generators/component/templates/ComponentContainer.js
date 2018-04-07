import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import <%= componentName %> from './<%= componentName %>'

export const mapStateToProps = (state, props) => ({
  something: true
})

export const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= componentName %>);
