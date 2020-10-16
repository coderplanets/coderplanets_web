import React from 'react'

import { ICON } from '@/config'
import MorePanel from '@/components/Navigator/MorePanel'

import HomeNavi from './HomeNavi'
import {
  Wrapper,
  HomeBlock,
  DiscoverLink,
  ArrowIcon,
} from '../styles/global_menu/main_menu'

const GlobalMenu = () => {
  return (
    <Wrapper>
      <HomeBlock>
        <HomeNavi />
        <DiscoverLink>
          所有子社区
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </DiscoverLink>
      </HomeBlock>
      <MorePanel />
    </Wrapper>
  )
}

export default GlobalMenu
