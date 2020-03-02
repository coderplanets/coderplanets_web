/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import {
  Wrapper,
  TopHandlerBar,
  PieSpinner,
  PieFiller,
  Mask,
} from '../styles/header/running_timer'
import { LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const RunningTimer = ({ interval }) => {
  const { ANIMATE_TIMER_CLASS } = LN
  return (
    <Wrapper>
      <TopHandlerBar className={ANIMATE_TIMER_CLASS} />
      <PieSpinner className={ANIMATE_TIMER_CLASS} interval={interval} />
      <PieFiller className={ANIMATE_TIMER_CLASS} interval={interval} />
      <Mask className={ANIMATE_TIMER_CLASS} interval={interval} />
    </Wrapper>
  )
}

RunningTimer.propTypes = {
  interval: T.oneOf(['3s', '5s', '10s']),
}

RunningTimer.defaultProps = {
  interval: '3s',
}

export default React.memo(RunningTimer)
