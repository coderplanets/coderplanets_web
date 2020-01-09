/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Icon } from '../styles/header/timer'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Timer = () => {
  return (
    <Wrapper>
      <Icon src={`${ICON_CMD}/timer.svg`} />
    </Wrapper>
  )
}

export default Timer
