/*
 *
 * HaveADrink comments and likes
 *
 */

import React from 'react'

import { buildLog } from '@/utils'

import { Wrapper } from '../styles/header/reaction'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Reaction = () => {
  return (
    <Wrapper>
      <div>评论 | 喜欢</div>
    </Wrapper>
  )
}

export default React.memo(Reaction)
