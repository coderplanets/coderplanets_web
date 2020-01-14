/*
 *
 * HaveADrink Header
 *
 */

import React from 'react'

import { buildLog } from '@utils'
import Dropdown from '@components/Dropdown'

import { Wrapper, Text, TotalNum, TagText } from '../styles/header/index_status'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const IndexStatus = () => {
  return (
    <Wrapper>
      <Text>共&nbsp;</Text>
      <Dropdown size="12px">56</Dropdown>&nbsp;/ <TotalNum>8430</TotalNum>
      <Text>杯</Text>
      &nbsp;
      <Dropdown size="13px">
        <TagText>毒鸡汤</TagText>
      </Dropdown>
    </Wrapper>
  )
}

export default IndexStatus
