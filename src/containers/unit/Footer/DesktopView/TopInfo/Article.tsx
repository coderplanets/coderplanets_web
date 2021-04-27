import React, { FC } from 'react'

import { ICON } from '@/config'
import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  CommunityTitle,
  ArticleTitle,
  ArrowDividerIcon,
  Logo,
} from '../../styles/desktop_view/top_info/article'

type TProps = Pick<TTopInfoProps, 'title' | 'noBottomBorder'>

const Article: FC<TProps> = ({ title = 'article', noBottomBorder = false }) => {
  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <Logo />
      </InfoBar>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <CommunityTitle>javascript</CommunityTitle>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <ArticleTitle>{title}</ArticleTitle>
    </Wrapper>
  )
}

export default React.memo(Article)
