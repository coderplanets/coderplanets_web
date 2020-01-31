/*
 *
 * Modal
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import usePortal from 'react-useportal'

import { ICON_CMD } from '@config'
import { TYPE } from '@constant'
import { buildLog } from '@utils'

import Belt from './Belt'

import { Mask, Wrapper, CloseBtn, ChildrenWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Modal:index')

const Modal = ({
  children,
  show,
  width,
  showCloseBtn,
  onClose,
  mode,
  background,
  offsetTop,
}) => {
  const { Portal } = usePortal()

  useEffect(() => {
    const globalEl = document.getElementById(TYPE.GLOBAL_LAYOUT_ID)

    if (show) {
      globalEl.classList.add('global_blur')
    } else {
      globalEl.classList.remove('global_blur')
    }
  }, [show])

  return (
    <React.Fragment>
      {show && (
        <Portal>
          <Mask show={show} onClick={onClose}>
            <Belt />
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
        </Portal>
      )}
    </React.Fragment>
  )
}

Modal.propTypes = {
  // https://www.npmjs.com/package/prop-types
  children: T.node.isRequired,
  show: T.bool,
  onClose: T.func,
  width: T.string,
  showCloseBtn: T.bool,
  mode: T.oneOf(['default', 'error']),
  background: T.oneOf(['default', 'preview']),
  offsetTop: T.string,
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

export default React.memo(Modal)
