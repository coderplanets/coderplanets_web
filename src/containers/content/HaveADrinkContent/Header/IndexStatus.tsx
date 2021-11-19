/*
 *
 * HaveADrink Header
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import type { TPagiState } from '../spec'
import {
  Wrapper,
  Text,
  CurNum,
  TotalNum,
  Divider,
  CategoryBtn,
  ArrowIcon,
} from '../styles/header/index_status'

import { setView } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

type TProps = {
  category: string
  pagiState: TPagiState
}

const IndexStatus: FC<TProps> = ({ pagiState, category }) => {
  const { curIdx, total } = pagiState
  return (
    <Wrapper>
      <Text>第&nbsp;</Text>
      <CurNum>{curIdx}</CurNum>
      <Divider>/</Divider>
      <TotalNum>{total}</TotalNum>
      <Text>杯</Text>
      &nbsp;
      <CategoryBtn onClick={() => setView('catalog')}>
        {category}
        <ArrowIcon />
      </CategoryBtn>
    </Wrapper>
  )
}

export default memo(IndexStatus)
