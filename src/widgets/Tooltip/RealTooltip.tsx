/*
 * Tooltip

 * use custom animation Globally at GlobalStyle.ts
 */

import { FC, useState, useRef, memo } from 'react'
import { hideAll } from 'tippy.js'

import { zIndex } from '@/utils/css'
import { buildLog } from '@/utils/logger'
import { isString } from '@/utils/validator'
import { isDescendant } from '@/utils/dom'

import useOutsideClick from '@/hooks/useOutsideClick'

import type { TProps } from './index'
import ConfirmFooter from './ConfirmFooter'
import { FOOTER_BEHAVIOR } from './constant'

import {
  StyledTippy,
  NoPaddingStyledTippy,
  ChildrenWrapper,
  ContentWrapper,
  TopArrow,
  BottomArrow,
  LeftArrow,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Tooltip:index')

const Tooltip: FC<TProps> = ({
  children,
  noPadding = false,
  interactive = true,
  onHide,
  onShow,
  placement = 'top',
  delay = 0,
  offset = [5, 5],
  duration = 0,
  content,
  hideOnClick = true,
  showArrow = false,
  forceZIndex = false,
  behavior = 'default',
  trigger = 'mouseenter focus',
  onConfirm,
  contentHeight,
}) => {
  const [instance, setInstance] = useState(null)
  const [active, setActive] = useState(false)

  const ContentComp = showArrow ? (
    <ChildrenWrapper contentHeight={contentHeight} forceZIndex={forceZIndex}>
      {active && placement === 'bottom' && <TopArrow />}
      {active && placement === 'top' && <BottomArrow />}
      {active && placement === 'right' && <LeftArrow />}

      <div>{children}</div>
    </ChildrenWrapper>
  ) : (
    <ChildrenWrapper contentHeight={contentHeight} forceZIndex={forceZIndex}>
      <div>{children}</div>
    </ChildrenWrapper>
  )

  const contentRef = useRef()

  const PopoverContent = (
    <ContentWrapper
      ref={contentRef}
      hasMaxWidth={isString(content)}
      onClick={() => {
        if (hideOnClick) instance?.hide()
      }}
    >
      {content}
      {active && behavior !== FOOTER_BEHAVIOR.DEFAULT && (
        <ConfirmFooter
          onConfirm={() => {
            onConfirm?.()
            instance?.hide()
          }}
          onCancel={() => instance?.hide()}
          behavior={behavior}
        />
      )}
    </ContentWrapper>
  )

  const ref = useRef()

  useOutsideClick(ref, (e) => {
    if (!instance) return false

    const isClickInsidePopover = isDescendant(contentRef?.current, e.target)
    if (hideOnClick || (!hideOnClick && !isClickInsidePopover)) {
      // if (instance) {
      // NOTE:  this is a hack, svg will swallow events like click
      // and the pointer-events solution not work
      const { nodeName } = e.target
      if (nodeName === 'svg' || nodeName === 'path') return false

      instance.hide()
    }
  })

  const props = {
    ref,
    content: PopoverContent,
    placement,
    hideOnClick,
    zIndex: zIndex.popover,
    active: true,
    delay: [delay, 0] as [number, number],
    offset,
    // offset: [0, -8] as [number, number],
    duration,
    trigger,
    // see https://github.com/atomiks/tippyjs/issues/751#issuecomment-611979594 for detail
    interactive,

    onHide: () => {
      setInstance(null)
      setActive(false)
      onHide?.()
    },
    onShow: (instance) => {
      // see https://github.com/atomiks/tippyjs/issues/260#issuecomment-462031748
      hideAll({ exclude: instance })
      setInstance(instance)
      setActive(true)
      onShow?.()
    },
  }

  return !noPadding ? (
    <StyledTippy {...props}>{ContentComp}</StyledTippy>
  ) : (
    <NoPaddingStyledTippy {...props}>{ContentComp}</NoPaddingStyledTippy>
  )
}

export default memo(Tooltip)
