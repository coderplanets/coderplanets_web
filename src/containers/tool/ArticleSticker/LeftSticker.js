import React from 'react'

import { ICON } from '@/config'
import { cutFrom } from '@/utils'
import {
  Wrapper,
  ArticleTitle,
  BackWrapper,
  ArrowIcon,
  BackText,
} from './styles/left_sticker'

const LeftSticker = ({ show, title }) => {
  return (
    <Wrapper show={show}>
      <ArticleTitle>{cutFrom(title, 30)}</ArticleTitle>
      <BackWrapper>
        <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        <BackText>Elixir 社区</BackText>
      </BackWrapper>
    </Wrapper>
  )
}

export default LeftSticker
