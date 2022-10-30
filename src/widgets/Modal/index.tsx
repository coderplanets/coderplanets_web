/*
 *
 * Modal
 *
 */

import { FC, ReactNode, useEffect, useState, useCallback, memo } from 'react'
import { Portal } from 'react-portal'

import { toggleGlobalBlur } from '@/utils/dom'
import { buildLog } from '@/utils/logger'
import useShortcut from '@/hooks/useShortcut'

import ViewportTracker from '@/widgets/ViewportTracker'

import { Mask, Wrapper, CloseBtn, ChildrenWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Modal:index')

type TProps = {
  children: ReactNode
  show?: boolean
  width?: string
  showCloseBtn?: boolean
  mode?: 'default' | 'error'
  background?: 'default' | 'preview'
  offsetTop?: string
  offsetLeft?: string
  onClose?: () => void
}

const Modal: FC<TProps> = ({
  children,
  show = true,
  width = '600px',
  showCloseBtn = false,
  onClose = log,
  mode = 'default',
  background = 'default',
  offsetTop = '20%',
  offsetLeft = 'none',
}) => {
  // damn, i forgot why i set this state, fix LATER
  const [visibleOnPage, setVisibleOnPage] = useState(false)

  const handleClose = useCallback(() => {
    setVisibleOnPage(false)
    toggleGlobalBlur(false)
    onClose()
  }, [onClose])

  useShortcut('Escape', handleClose)

  useEffect(() => {
    if (visibleOnPage) {
      toggleGlobalBlur(true)
    }
    if (visibleOnPage && !show) {
      toggleGlobalBlur(false)
    }
  }, [show, visibleOnPage])

  return (
    <>
      {show && (
        <Portal>
          <Mask show={show} onClick={handleClose}>
            <Wrapper
              width={width}
              mode={mode}
              background={background}
              offsetTop={offsetTop}
              offsetLeft={offsetLeft}
            >
              <ViewportTracker onEnter={() => setVisibleOnPage(true)} />
              {showCloseBtn && <CloseBtn mode={mode} onClick={handleClose} />}
              {/* {showCloseBtn && <EscHint mode={mode}>Esc</EscHint>} */}
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
