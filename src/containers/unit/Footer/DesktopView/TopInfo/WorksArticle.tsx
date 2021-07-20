import { FC, memo } from 'react'

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
      <CommunityTitle>作品集市</CommunityTitle>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <ArticleTitle>CoderPlaents</ArticleTitle>
    </Wrapper>
  )
}

export default memo(Article)
