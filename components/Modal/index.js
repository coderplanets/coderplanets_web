/*
 *
 * Modal
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils'
import { Mask, Wrapper } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Modal:index')
/* eslint-enable no-unused-vars */

const Modal = ({ children, show }) => {
  return (
    <Mask show={show}>
      <Wrapper>{children}</Wrapper>
    </Mask>
  )
}

Modal.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
}

Modal.defaultProps = {
  show: false,
}

export default Modal
