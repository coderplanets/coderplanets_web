import { FC, memo } from 'react'
import Link from 'next/link'

import { HCN } from '@/constant'
import BlinkCursor from '@/widgets/BlinkCursor'
import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  CommunityTitle,
  ArticleTitle,
  Logo,
} from '../../styles/desktop_view/top_info/article'

type TProps = Pick<TTopInfoProps, 'article' | 'noBottomBorder'>

const Article: FC<TProps> = ({ article, noBottomBorder = false }) => {
  const { originalCommunity, title } = article

  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <Logo />
      </InfoBar>
      {originalCommunity.raw !== HCN && (
        <Link href={`/${originalCommunity.raw}`} passHref>
          <CommunityTitle as="a">{originalCommunity.title}</CommunityTitle>
        </Link>
      )}
      <BlinkCursor />
      <ArticleTitle>{title}</ArticleTitle>
    </Wrapper>
  )
}

export default memo(Article)
