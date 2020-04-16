import React from 'react'

import DotDivider from '@components/DotDivider'
// import { ASSETS_ENDPOINT } from '@config'
import {
  Wrapper,
  Main,
  Title,
  Desc,
  More,
  IntroBtn,
  LinkBtn,
} from '../styles/mile_stone/intro'

const Intro = () => {
  return (
    <Wrapper>
      <Main>
        <Title>跳蚤集市</Title>
        <Desc>可能是最性感的开发者社区，来为你心爱的作品建立</Desc>
        <br />
        <More>
          <IntroBtn>介绍</IntroBtn> <DotDivider space="6px" radius="3px" />{' '}
          <LinkBtn>官网</LinkBtn>
          <DotDivider space="6px" radius="3px" /> <LinkBtn>社区</LinkBtn>
        </More>
      </Main>
    </Wrapper>
  )
}

export default Intro
