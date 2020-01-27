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
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const RunningTimer = ({ interval }) => {
  return (
    <Wrapper>
      <TopHandlerBar />
      <PieSpinner interval={interval} />
      <PieFiller interval={interval} />
      <Mask interval={interval} />
    </Wrapper>
  )
}

RunningTimer.propTypes = {
  interval: T.oneOf(['3s', '5s', '10s']),
}

RunningTimer.defaultProps = {
  interval: '3s',
}

export default RunningTimer
