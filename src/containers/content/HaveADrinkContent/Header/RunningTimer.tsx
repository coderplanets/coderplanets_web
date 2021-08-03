/*
 *
 * HaveADrink timer
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import type { TInterval } from '../spec'
import { ANIMATE_TIMER_CLASS } from '../constant'
import {
  Wrapper,
  TopHandlerBar,
  PieSpinner,
  PieFiller,
  Mask,
} from '../styles/header/running_timer'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

type TProps = {
  interval?: TInterval
}

const RunningTimer: FC<TProps> = ({ interval = '3s' }) => {
  return (
    <Wrapper>
      <TopHandlerBar className={ANIMATE_TIMER_CLASS} />
      <PieSpinner className={ANIMATE_TIMER_CLASS} interval={interval} />
      <PieFiller className={ANIMATE_TIMER_CLASS} interval={interval} />
      <Mask className={ANIMATE_TIMER_CLASS} interval={interval} />
    </Wrapper>
  )
}

export default memo(RunningTimer)
