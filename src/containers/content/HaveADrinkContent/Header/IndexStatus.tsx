/*
 *
 * HaveADrink Header
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  Text,
  UnderlineBtn,
  CurNum,
  TotalNum,
  Divider,
} from '../styles/header/index_status'
import { setView } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const IndexStatus: FC = () => {
  return (
    <Wrapper>
      <Text>共&nbsp;</Text>
      <CurNum>56</CurNum>
      <Divider>/</Divider>
      <TotalNum>8430</TotalNum>
      <Text>杯</Text>
      &nbsp;
      <UnderlineBtn onClick={() => setView('catalog')}>it 冷知识</UnderlineBtn>
    </Wrapper>
  )
}

export default memo(IndexStatus)
