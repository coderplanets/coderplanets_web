/*
 *
 * A.js
 *
 * Renders an a tag, enforce use the
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../../utils'

export const StyledA = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('link')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
  }
`

const A = ({ href, target, children }) => (
  <StyledA href={href} rel="noopener noreferrer" target={target}>
    {children}
  </StyledA>
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
