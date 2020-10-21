import React from 'react'

import { ICON } from '@/config'
import MorePanel from '@/components/Navigator/MorePanel'
import { SpaceGrow } from '@/components/Common'

import HomeNavi from './HomeNavi'
import {
  Wrapper,
  HomeBlock,
  JoinLink,
  ArrowIcon,
} from '../styles/global_menu/main_menu'

const GlobalMenu = () => {
  return (
    <Wrapper>
      <HomeBlock>
        <HomeNavi />
        <SpaceGrow />
        <JoinLink>
          参与建设
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </JoinLink>
      </HomeBlock>
      <MorePanel />
    </Wrapper>
  )
}

export default GlobalMenu
