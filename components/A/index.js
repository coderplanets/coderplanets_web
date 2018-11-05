/*
 *
 * A.js
 *
 * Renders an a tag, enforce use the
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

const A = ({ href, target, children }) => (
  <Wrapper href={href} rel="noopener noreferrer" target={target}>
    {children}
  </Wrapper>
)

A.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  target: PropTypes.string,
}

A.defaultProps = {
  target: '_blank',
}

export default A
