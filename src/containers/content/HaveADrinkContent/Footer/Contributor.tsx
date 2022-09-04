/*
 *
 * HaveADrink Header
 *
 */

import { FC, memo } from 'react'

import {
  Wrapper,
  Text,
  CurNum,
  TotalNum,
  TagText,
} from '../styles/footer/contributor'

const IndexStatus: FC = () => {
  return (
    <Wrapper>
      <Text>共收录</Text>
      <CurNum>56</CurNum> / <TotalNum>8430</TotalNum>
      <Text>条</Text>
      <TagText>IT 冷知识</TagText>
    </Wrapper>
  )
}

export default memo(IndexStatus)
