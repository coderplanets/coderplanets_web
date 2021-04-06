/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'

import { buildLog } from '@/utils'

import type { TInterval } from '../spec'

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

type TProps = {
  interval?: TInterval
}

const RunningTimer: React.FC<TProps> = ({ interval = '3s' }) => {
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

export default React.memo(RunningTimer)
