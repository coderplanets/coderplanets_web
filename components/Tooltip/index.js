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

const Tooltip = ({ children, content, animation, arrow, delay, duration }) => (
  <Wrapper
    content={content}
    animation={animation}
    arrow={arrow}
    delay={[delay, 20]}
    duration={duration}
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
  // more options see: https://atomiks.github.io/tippyjs/all-options/
}

Tooltip.defaultProps = {
  animation: 'fade',
  arrow: true,
  delay: 0,
  duration: 100,
}

export default React.memo(Tooltip)
