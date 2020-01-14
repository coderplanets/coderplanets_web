/*
 *
 * HaveADrink Header
 *
 */

import React from 'react'

import { buildLog } from '@utils'

import IndexStatus from './IndexStatus'
import Timer from './Timer'
import Reaction from './Reaction'

import { Wrapper } from '../styles/header'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Header = () => {
  return (
    <Wrapper>
      <IndexStatus />
      <Timer />
      <Reaction />
    </Wrapper>
  )
}

export default Header
