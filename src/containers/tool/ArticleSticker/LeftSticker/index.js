import React from 'react'

import { ICON } from '@/config'
import { cutRest } from '@/utils'

import Toc from './Toc'

import {
  Wrapper,
  ArticleTitle,
  BackWrapper,
  ArrowIcon,
  BackText,
} from '../styles/left_sticker'

const LeftSticker = ({ show, title, isTocMenuOpened }) => {
  return (
    <Wrapper show={show}>
      <BackWrapper>
        <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        <BackText>Elixir 社区</BackText>
      </BackWrapper>
      <ArticleTitle>{cutRest(title, 30)}</ArticleTitle>
      <Toc show={isTocMenuOpened} />
    </Wrapper>
  )
}

export default LeftSticker
