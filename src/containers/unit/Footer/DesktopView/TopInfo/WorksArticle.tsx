import { FC, memo } from 'react'

import BlinkCursor from '@/widgets/BlinkCursor'

import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  CommunityTitle,
  ArticleTitle,
  Logo,
} from '../../styles/desktop_view/top_info/article'

type TProps = TTopInfoProps

const WorksArticle: FC<TProps> = ({ article, noBottomBorder = false }) => {
  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <Logo />
      </InfoBar>
      <CommunityTitle>作品集市</CommunityTitle>
      <BlinkCursor duration={2} top={0} />
      <ArticleTitle>{article?.title}</ArticleTitle>
    </Wrapper>
  )
}

export default memo(WorksArticle)
