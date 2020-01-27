/*
 *
 * HaveADrink Header
 *
 */

import React from 'react'

import { buildLog } from '@utils'
// import Dropdown from '@components/Dropdown'

import {
  Wrapper,
  Text,
  UnderlineBtn,
  TotalNum,
  Divider,
} from '../styles/header/index_status'
import { setView } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const IndexStatus = () => {
  return (
    <Wrapper>
      <Text>共&nbsp;</Text>
      <UnderlineBtn>56</UnderlineBtn>
      <Divider>/</Divider>
      <TotalNum>8430</TotalNum>
      <Text>杯</Text>
      &nbsp;
      <UnderlineBtn onClick={() => setView('catalog')}>毒鸡汤</UnderlineBtn>
    </Wrapper>
  )
}

export default IndexStatus
