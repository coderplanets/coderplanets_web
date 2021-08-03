import { FC } from 'react'

import { ICON } from '@/config'
import { cutRest } from '@/utils/helper'

import Toc from './Toc'

import {
  Wrapper,
  ArticleTitle,
  BackWrapper,
  ArrowIcon,
  BackText,
} from '../styles/left_sticker'

type TProps = {
  show: boolean
  title: string
  isTocMenuOpened: boolean
  testid?: string
}

const LeftSticker: FC<TProps> = ({
  show,
  title,
  isTocMenuOpened,
  testid = 'article-sticker-left-sidebar',
}) => {
  return (
    <Wrapper show={show} testid={testid}>
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
