/*
 *
 * Tooltip
 *
 */

import React, { FC, useState, useRef } from 'react'

import type { TTooltipPlacement, TTooltipAnimation } from '@/spec'
import { css, buildLog, isDescendant } from '@/utils'
import { useOutsideClick } from '@/hooks'

import ConfirmFooter from './ConfirmFooter'
import { FOOTER_BEHAVIOR } from './constant'

import {
  StyledTippy,
  NoPaddingStyledTippy,
  ContentWrapper,
  TopArrow,
  BottomArrow,
  LeftArrow,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tooltip:index')

type TProps = {
  children: React.ReactNode
  content: string | React.ReactNode
  animation?: TTooltipAnimation
  placement?: TTooltipPlacement
  // more options see: https://atomiks.github.io/tippyjs/all-options/
  delay?: number
  duration?: number
  trigger?: 'mouseenter focus' | 'click'
  hideOnClick?: boolean
  noPadding?: boolean
  showArrow?: boolean
  footerBehavior?: 'default' | 'confirm' | 'delete-confirm' | 'add'
  // currently only for AvatarsRow, it will collapse the height
  // for same reason, figure out later
  contentHeight?: string

  onShow?: () => void
  onHide?: () => void
  onConfirm?: () => void
}

const Tooltip: FC<TProps> = ({
  children,
  animation = 'scale',
  noPadding = false,
  onHide,
  onShow,
  placement = 'top',
  delay = 0,
  duration = 0,
  content,
  hideOnClick = true,
  showArrow = true,
  footerBehavior = 'default',
  trigger = 'mouseenter focus',
  onConfirm,
  contentHeight,
}) => {
  const [instance, setInstance] = useState(null)
  const [active, setActive] = useState(false)

  const ContentComp = showArrow ? (
    <ContentWrapper contentHeight={contentHeight}>
      {active && placement === 'bottom' && <TopArrow />}
      {active && placement === 'top' && <BottomArrow />}
      {active && placement === 'right' && <LeftArrow />}

      <div>{children}</div>
    </ContentWrapper>
  ) : (
    <ContentWrapper contentHeight={contentHeight}>
      <div>{children}</div>
    </ContentWrapper>
  )

  const contentRef = useRef()

  const PopoverContent = (
    <div ref={contentRef}>
      {content}
      {active && footerBehavior !== FOOTER_BEHAVIOR.DEFAULT && (
        <ConfirmFooter
          onConfirm={() => {
            onConfirm?.()
            instance?.hide()
          }}
          onCancel={() => instance?.hide()}
          footerBehavior={footerBehavior}
        />
      )}
    </div>
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

  return !noPadding ? (
    <StyledTippy
      ref={ref}
      content={PopoverContent}
      placement={placement}
      hideOnClick={hideOnClick}
      onHide={() => {
        setInstance(null)
        setActive(false)
        onHide?.()
      }}
      onShow={(instance) => {
        setInstance(instance)
        setActive(true)
        onShow?.()
      }}
      zIndex={css.zIndex.popover}
      interactive
      delay={delay}
      duration={duration}
      animation={animation}
      trigger={trigger}
    >
      {ContentComp}
    </StyledTippy>
  ) : (
    <NoPaddingStyledTippy
      ref={ref}
      content={PopoverContent}
      placement={placement}
      hideOnClick={hideOnClick}
      animation={animation}
      onHide={(instance) => {
        setInstance(instance)
        setActive(false)
        onHide?.()
      }}
      onShow={(instance) => {
        setInstance(instance)
        setActive(true)
        onShow?.()
      }}
      zIndex={css.zIndex.popover}
      interactive
      delay={delay}
      duration={duration}
      trigger={trigger}
    >
      {ContentComp}
    </NoPaddingStyledTippy>
  )
}

export default React.memo(Tooltip)
