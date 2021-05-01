/*
 *
 * Modal
 *
 */

import React, { FC, ReactNode, useEffect } from 'react'
import usePortal from 'react-useportal'

import { ICON_CMD } from '@/config'
import { buildLog, toggleGlobalBlur } from '@/utils'

import Belt from './Belt'

import { Mask, Wrapper, CloseBtn, EscHint, ChildrenWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Modal:index')

type TProps = {
  children: ReactNode
  show?: boolean
  showBelt?: boolean
  width?: string
  showCloseBtn?: boolean
  mode?: 'default' | 'error'
  background?: 'default' | 'preview'
  offsetTop?: string
  onClose?: () => void
}

const Modal: FC<TProps> = ({
  children,
  show = false,
  showBelt = false,
  width = '600px',
  showCloseBtn = false,
  onClose = log,
  mode = 'default',
  background = 'default',
  offsetTop = '13%',
}) => {
  const { Portal } = usePortal()

  useEffect(() => toggleGlobalBlur(show), [show])

  return (
    <>
      {show && (
        <Portal>
          <Mask show={show} onClick={onClose}>
            {showBelt && <Belt />}
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
              <EscHint>ESC</EscHint>
              <ChildrenWrapper onClick={(e) => e.stopPropagation()}>
                {children}
              </ChildrenWrapper>
            </Wrapper>
          </Mask>
        </Portal>
      )}
    </>
  )
}

export default React.memo(Modal)
