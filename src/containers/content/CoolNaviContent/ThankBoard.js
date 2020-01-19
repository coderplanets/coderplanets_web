/*
 *
 * ThankBoard
 *
 */

import React from 'react'

import { SpaceGrow } from '@components/BaseStyled'
import { Wrapper, Header, HowToText } from './styles/thank_board'

const ThankBoard = () => {
  return (
    <Wrapper>
      <Header>
        本页贡献者，特此鸣谢
        <SpaceGrow />
        <HowToText>如何参与贡献？</HowToText>
      </Header>
      <div>
        酷导航(大字) | 一般介绍，bla bla bla | xxx添加，更新于 20 小时前,
        完整记录
      </div>
    </Wrapper>
  )
}

export default ThankBoard
