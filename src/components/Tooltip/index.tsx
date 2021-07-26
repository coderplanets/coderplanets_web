/*
 * Tooltip

 * use custom animation Globally at GlobalStyle.ts
 */

import { FC, ReactNode, useState, useRef, memo } from 'react'
import { hideAll } from 'tippy.js'

import type { TTooltipPlacement } from '@/spec'
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
  children: ReactNode
  content: string | ReactNode
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

  /**
   * z-index is a magic number for IconSwitcher's mask situation,
   * DO NOT USE unless you know what you are doing
   *  在类似 IconSwitcher 的场景下（有一个基于 positon: absolute 的滑动遮罩）的场景下，需要将外层
   * 的 ContentWrapper z-index 置为 1, 否则滑动遮罩会在最外面。
   *
   * 理论上 zIndex 一直设置为 1，也没问题，但是会导致某些使用了 Tooltip 的地方有严重的粘滞感，比如 “CopyRight” 那里。
   * 暂时没有精力看 Tippy 的具体实现，小心使用。
   */
  forceZIndex?: boolean

  onShow?: () => void
  onHide?: () => void
  onConfirm?: () => void
}

const Tooltip: FC<TProps> = ({
  children,
  noPadding = false,
  onHide,
  onShow,
  placement = 'top',
  delay = 0,
  duration = 0,
  content,
  hideOnClick = true,
  showArrow = false,
  forceZIndex = false,
  footerBehavior = 'default',
  trigger = 'mouseenter focus',
  onConfirm,
  contentHeight,
}) => {
  const [instance, setInstance] = useState(null)
  const [active, setActive] = useState(false)

  const ContentComp = showArrow ? (
    <ContentWrapper contentHeight={contentHeight} forceZIndex={forceZIndex}>
      {active && placement === 'bottom' && <TopArrow />}
      {active && placement === 'top' && <BottomArrow />}
      {active && placement === 'right' && <LeftArrow />}

      <div>{children}</div>
    </ContentWrapper>
  ) : (
    <ContentWrapper contentHeight={contentHeight} forceZIndex={forceZIndex}>
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

  const props = {
    ref,
    content: PopoverContent,
    placement,
    hideOnClick,
    zIndex: css.zIndex.popover,
    active: true,
    delay: [delay, 0] as [number, number],
    offset: [5, 5] as [number, number],
    duration,
    trigger,
    // see https://github.com/atomiks/tippyjs/issues/751#issuecomment-611979594 for detail
    interactive: true,

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
