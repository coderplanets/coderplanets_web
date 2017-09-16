/*
 *
 * A.js
 *
 * Renders an a tag, enforce use the
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledA = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.link};
  transition: color 0.3s;
`

function A(props) {
  return (
    <StyledA href={props.href} rel="noopener noreferrer" target={props.target}>
      {props.children}
    </StyledA>
  )
}

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
