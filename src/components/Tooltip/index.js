/*
 *
 * Tooltip
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

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
  ...restProps
}) => {
  const [active, setActive] = useState(false)

  const ContentComp = (
    <ContentWrapper>
      {active && placement === 'bottom' && <TopArrow />}
      {active && placement === 'top' && <BottomArrow />}
      {active && placement === 'right' && <LeftArrow />}

      {children}
    </ContentWrapper>
  )

  return !noDefaultPadding ? (
    <StyledTippy
      content={content}
      placement={placement}
      onHide={() => {
        setActive(false)
        onHide()
      }}
      onShow={() => {
        setActive(true)
        onShow()
      }}
      {...restProps}
    >
      {ContentComp}
    </StyledTippy>
  ) : (
    <NoPaddingStyledTippy
      content={content}
      placement={placement}
      onHide={() => {
        setActive(false)
        onHide()
      }}
      onShow={() => {
        setActive(true)
        onShow()
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
  onTrigger: T.func,
  trigger: T.oneOf(['mouseenter focus', 'click', 'manual']),
  hideOnClick: T.oneOf([true, false, 'toggle']),
  maxWidth: T.oneOf([350, 'none']),
  // more options see: https://atomiks.github.io/tippyjs/all-options/
  onShow: T.func,
  onHide: T.func,
  noDefaultPadding: T.bool,
}

Tooltip.defaultProps = {
  animation: 'fade',
  arrow: false,
  delay: 0,
  duration: 100,
  hideOnClick: true,
  placement: 'top',
  // hooks
  onTrigger: log,
  trigger: 'mouseenter focus',
  onShow: log,
  onHide: log,
  noDefaultPadding: false,
  maxWidth: 'none',
}

export default React.memo(Tooltip)
