import React from 'react'

import { ICON, ICON_BASE } from '@/config'
import { Wrapper, Logo, Block, Title, ArrowIcon } from './styles/intro_frame'

const IntroFrame = () => {
  return (
    <Wrapper>
      <Logo src={`${ICON_BASE}/site_logo.svg`} />
      <Block>
        <Title>首页</Title>
        <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
      </Block>
    </Wrapper>
  )
}

export default React.memo(IntroFrame)
