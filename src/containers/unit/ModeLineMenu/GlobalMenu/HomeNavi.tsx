import { FC, memo } from 'react'

import { HCN } from '@/constant'
import { changeToCommunity } from '@/utils/helper'

import { Wrapper, Logo, Block, Title } from '../styles/global_menu/home_navi'

const HomeNavi: FC = () => {
  return (
    <Wrapper onClick={() => changeToCommunity(HCN)}>
      <Logo />
      <Block>
        <Title>首页</Title>
      </Block>
    </Wrapper>
  )
}

export default memo(HomeNavi)
