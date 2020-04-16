import React from 'react'

import DotDivider from '@components/DotDivider'
// import { ASSETS_ENDPOINT } from '@config'
import { Wrapper, Main, Title, Desc, More } from '../styles/mile_stone/intro'

const Intro = () => {
  return (
    <Wrapper>
      <Main>
        <Title>跳蚤集市2</Title>
        <Desc>可能是最性感的开发者社区，来为你心爱的作品建立</Desc>
        <br />
        <More>
          介绍 <DotDivider space="6px" radius="3px" /> 官网{' '}
          <DotDivider space="6px" radius="3px" /> 社区{' '}
        </More>
      </Main>
    </Wrapper>
  )
}

export default Intro
