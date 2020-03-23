/*
 *
 * Tooltip
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { Wrapper, ContentWrapper, TopArrow, BottomArrow } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tooltip:index')

const Tooltip = ({
  children,
  content,
  animation,
  arrow,
  delay,
  trigger,
  duration,
  placement,
  onTrigger,
  onHide,
  onShow,
}) => {
  const [active, setActive] = useState(false)

  return (
    <Wrapper
      content={content}
      animation={animation}
      arrow={arrow}
      delay={[delay, 20]}
      trigger={trigger}
      duration={duration}
      placement={placement}
      onTrigger={onTrigger}
      onHide={() => {
        setActive(false)
        onHide()
      }}
      onShow={() => {
        setActive(true)
        onShow()
      }}
    >
      <ContentWrapper>
        {active && placement === 'bottom' && <TopArrow />}
        {active && placement === 'top' && <BottomArrow />}
        {children}
      </ContentWrapper>
    </Wrapper>
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
  trigger: T.oneOf(['mouseenter focus', 'click']),
  // more options see: https://atomiks.github.io/tippyjs/all-options/
  onShow: T.func,
  onHide: T.func,
}

Tooltip.defaultProps = {
  animation: 'fade',
  arrow: true,
  delay: 0,
  duration: 100,
  placement: 'top',
  // hooks
  onTrigger: log,
  trigger: 'mouseenter focus',
  onShow: log,
  onHide: log,
}

export default React.memo(Tooltip)
