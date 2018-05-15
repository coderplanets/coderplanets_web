/*
 *
 * Modal
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from '../../utils'
import { ICON_ASSETS } from '../../config'
import { Mask, Wrapper, CloseBtn } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Modal:index')
/* eslint-enable no-unused-vars */

const Modal = ({ children, show, width, showCloseBtn, onMaskClick }) => {
  return (
    <Mask show={show} onClick={onMaskClick}>
      <Wrapper width={width} onClick={e => e.stopPropagation()}>
        <CloseBtn
          path={`${ICON_ASSETS}/cmd/closeBtn.svg`}
          show={showCloseBtn}
        />
        {children}
      </Wrapper>
    </Mask>
  )
}

Modal.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onMaskClick: PropTypes.func,
  width: PropTypes.string,
  showCloseBtn: PropTypes.bool,
}

Modal.defaultProps = {
  show: false,
  onMaskClick: debug,
  width: '600px',
  showCloseBtn: false,
}

export default Modal
