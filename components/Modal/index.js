/*
 *
 * Modal
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '@config'
import { makelogger } from '@utils'
import { Mask, Wrapper, CloseBtn, ChildrenWrapper } from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:Modal:index')

const Modal = ({
  children,
  show,
  width,
  showCloseBtn,
  onClose,
  mode,
  background,
  offsetTop,
}) => (
  <Mask show={show} onClick={onClose}>
    <Wrapper
      width={width}
      mode={mode}
      background={background}
      offsetTop={offsetTop}
    >
      <CloseBtn
        mode={mode}
        src={`${ICON_CMD}/closeBtn.svg`}
        show={showCloseBtn}
        onClick={onClose}
      />
      <ChildrenWrapper onClick={e => e.stopPropagation()}>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  </Mask>
)

Modal.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.string,
  showCloseBtn: PropTypes.bool,
  mode: PropTypes.oneOf(['default', 'error']),
  background: PropTypes.oneOf(['default', 'preview']),
  offsetTop: PropTypes.string,
}

Modal.defaultProps = {
  show: false,
  onClose: log,
  width: '600px',
  showCloseBtn: false,
  mode: 'default',
  background: 'default',
  offsetTop: '13%',
}

export default Modal
