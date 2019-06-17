/*
 *
 * Tooltip
 *
 */

import React from 'react'
import T from 'prop-types'

import { Wrapper } from './styles'
import { buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('c:Tooltip:index')

const Tooltip = ({
  children,
  content,
  animation,
  arrow,
  delay,
  duration,
  placement,
  onTrigger,
}) => (
  <Wrapper
    content={content}
    animation={animation}
    arrow={arrow}
    delay={[delay, 20]}
    duration={duration}
    placement={placement}
    onTrigger={onTrigger}
  >
    {children}
  </Wrapper>
)

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
  // more options see: https://atomiks.github.io/tippyjs/all-options/
}

Tooltip.defaultProps = {
  animation: 'fade',
  arrow: true,
  delay: 0,
  duration: 100,
  placement: 'top',
  // hooks
  onTrigger: log,
}

export default React.memo(Tooltip)
