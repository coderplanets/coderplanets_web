/*
 *
 * HaveADrink Body
 *
 */

import React from 'react'

import { buildLog } from '@utils'

import { Wrapper, Title, Desc } from './styles/body'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Body = () => {
  return (
    <Wrapper>
      <Title>看见一个算命大师，我刚坐下他就问我，你算什么东西？</Title>
      <Desc>按「空格」键或「点击」刷新</Desc>
    </Wrapper>
  )
}

export default Body
