import { FC, memo } from 'react'
import Link from 'next/link'

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

type TProps = Pick<TTopInfoProps, 'article' | 'noBottomBorder'>

const Article: FC<TProps> = ({ article, noBottomBorder = false }) => {
  const { originalCommunity, title } = article

  return (
    <Wrapper noBottomBorder={noBottomBorder}>
      <InfoBar>
        <Logo />
      </InfoBar>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <Link href={`/${originalCommunity.raw}`} passHref>
        <CommunityTitle as="a">{originalCommunity.title}</CommunityTitle>
      </Link>
      <ArrowDividerIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <ArticleTitle>{title}</ArticleTitle>
    </Wrapper>
  )
}

export default memo(Article)
