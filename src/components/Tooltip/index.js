/*
 *
 * Tooltip
 *
 */

import React, { useState, useRef } from 'react'
import T from 'prop-types'
import { values } from 'ramda'

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

const Tooltip = ({
  children,
  noPadding,
  onHide,
  onShow,
  placement,
  content,
  hideOnClick,
  showArrow,
  footerBehavior,
  onConfirm,
  contentHeight,
  ...restProps
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
      {...restProps}
    >
      {ContentComp}
    </StyledTippy>
  ) : (
    <NoPaddingStyledTippy
      ref={ref}
      content={PopoverContent}
      placement={placement}
      hideOnClick={hideOnClick}
      animation="scale"
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
      {...restProps}
    >
      {ContentComp}
    </NoPaddingStyledTippy>
  )
}

Tooltip.propTypes = {
  children: T.node.isRequired,
  content: T.oneOfType([T.string, T.node]).isRequired,
  // options
  animation: T.oneOf([
    'shift-away',
    'shift-toward',
    'fade',
    'scale',
    'perspective',
  ]),
  arrow: T.bool,
  delay: T.number,
  duration: T.number,
  placement: T.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
  ]),
  // hooks
  trigger: T.oneOf(['mouseenter focus', 'click']),
  hideOnClick: T.oneOf([true, false]),
  maxWidth: T.oneOf([350, 'none']),
  // more options see: https://atomiks.github.io/tippyjs/all-options/
  onShow: T.oneOfType([T.func, T.instanceOf(null)]),
  onHide: T.oneOfType([T.func, T.instanceOf(null)]),
  noPadding: T.bool,
  showArrow: T.bool,
  footerBehavior: T.oneOf(values(FOOTER_BEHAVIOR)),
  onConfirm: T.oneOfType([T.func, T.instanceOf(null)]),

  // currently only for AvatarsRow, it will collapse the height
  // for same reason, figure out later
  contentHeight: T.string,
}

Tooltip.defaultProps = {
  animation: 'fade',
  arrow: true,
  delay: 0,
  duration: 0,
  hideOnClick: true,
  placement: 'top',
  // hooks
  trigger: 'mouseenter focus',
  onShow: null,
  onHide: null,
  noPadding: false,
  maxWidth: 'none',
  showArrow: true,
  footerBehavior: 'default',
  onConfirm: null,

  contentHeight: 'auto',
}

export default React.memo(Tooltip)
