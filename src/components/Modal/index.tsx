/*
 *
 * Modal
 *
 */

import { FC, ReactNode, useEffect, useState, useCallback, memo } from 'react'
import usePortal from 'react-useportal'
import { Waypoint } from 'react-waypoint'

import { ICON_CMD } from '@/config'
import { buildLog, toggleGlobalBlur } from '@/utils'
import { useShortcut } from '@/hooks'

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
  show = true,
  showBelt = false,
  width = '600px',
  showCloseBtn = false,
  onClose = log,
  mode = 'default',
  background = 'default',
  offsetTop = '13%',
}) => {
  const { Portal } = usePortal()
  const [visibleOnPage, setVisibleOnPage] = useState(false)

  const handleClose = useCallback(() => {
    setVisibleOnPage(false)
    toggleGlobalBlur(false)
    onClose()
  }, [])

  useShortcut('Escape', handleClose)

  useEffect(() => {
    if (visibleOnPage) {
      toggleGlobalBlur(true)
    }
  }, [show, visibleOnPage])

  return (
    <>
      {show && (
        <Portal>
          <Mask show={show} onClick={handleClose}>
            {showBelt && <Belt />}
            <Wrapper
              width={width}
              mode={mode}
              background={background}
              offsetTop={offsetTop}
            >
              <Waypoint onEnter={() => setVisibleOnPage(true)} />
              <CloseBtn
                mode={mode}
                src={`${ICON_CMD}/closeBtn.svg`}
                show={showCloseBtn}
                onClick={handleClose}
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

export default memo(Modal)
