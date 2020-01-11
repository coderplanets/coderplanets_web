/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import {
  Wrapper,
  IconWrapper,
  Icon,
  OptionsWrapper,
  HintMsg,
} from '../styles/header/timer'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Options = () => {
  return (
    <OptionsWrapper>
      <HintMsg>定时刷新</HintMsg>
    </OptionsWrapper>
  )
}

const Timer = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src={`${ICON_CMD}/timer.svg`} />
        <Options />
      </IconWrapper>
    </Wrapper>
  )
}

export default Timer
