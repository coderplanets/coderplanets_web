/*
 *
 * Tooltip
 *
 */

import React, { useState, useRef } from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import { useOutsideClick } from '@/hooks'

import ConfirmFooter from './ConfirmFooter'

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
  noDefaultPadding,
  onHide,
  onShow,
  placement,
  content,
  hideOnClick,
  showArrow,
  behavior,
  onConfirm,
  ...restProps
}) => {
  const [instance, setInstance] = useState(null)
  const [active, setActive] = useState(false)

  const ContentComp = showArrow ? (
    <ContentWrapper>
      {active && placement === 'bottom' && <TopArrow />}
      {active && placement === 'top' && <BottomArrow />}
      {active && placement === 'right' && <LeftArrow />}

      <div>{children}</div>
    </ContentWrapper>
  ) : (
    <ContentWrapper>
      <div>{children}</div>
    </ContentWrapper>
  )

  const PopoverContent = (
    <>
      {content}
      {active && behavior === 'confirm' && (
        <ConfirmFooter onConfirm={onConfirm} />
      )}
    </>
  )

  const ref = useRef()

  useOutsideClick(ref, (e) => {
    if (!hideOnClick && instance) {
      // if (instance) {
      // NOTE:  this is a hack, svg will swallow events like click
      // and the pointer-events solution not work
      const { nodeName } = e.target
      if (nodeName === 'svg' || nodeName === 'path') return false

      instance.hide()
    }
  })

  return !noDefaultPadding ? (
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
  noDefaultPadding: T.bool,
  showArrow: T.bool,
  behavior: T.oneOf(['default', 'confirm']),
  onConfirm: T.oneOfType([T.func, T.instanceOf(null)]),
}

Tooltip.defaultProps = {
  animation: 'fade',
  arrow: false,
  delay: 0,
  duration: 0,
  hideOnClick: true,
  placement: 'top',
  // hooks
  trigger: 'mouseenter focus',
  onShow: null,
  onHide: null,
  noDefaultPadding: false,
  maxWidth: 'none',
  showArrow: true,
  behavior: 'default',
  onConfirm: null,
}

export default React.memo(Tooltip)
