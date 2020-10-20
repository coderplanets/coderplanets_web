import React from 'react'

import { ICON, ICON_BASE } from '@/config'
import {
  Wrapper,
  Logo,
  Block,
  Title,
  ArrowIcon,
} from '../styles/global_menu/home_navi'

const HomeNavi = () => {
  return (
    <Wrapper>
      <Logo src={`${ICON_BASE}/site_logo.svg`} />
      <Block>
        <Title>coderplanets</Title>
        <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
      </Block>
    </Wrapper>
  )
}

export default React.memo(HomeNavi)
