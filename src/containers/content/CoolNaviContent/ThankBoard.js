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
    </Wrapper>
  )
}

export default ThankBoard
