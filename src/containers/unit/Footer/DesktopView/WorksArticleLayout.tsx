import { FC, memo } from 'react'

import Link from 'next/link'
import type { TArticle } from '@/spec'
import { ICON, GITHUB, ABOUT_LINK } from '@/config'
import { METRIC, ROUTE } from '@/constant'
import { joinUS } from '@/utils/helper'

import TopInfo from './TopInfo'
import BottomInfo from './BottomInfo'

import {
  Wrapper,
  InnerWrapper,
  MainInfos,
  BaseInfo,
  Item,
  NoLinkItem,
  HeartCrabIcon,
} from '../styles/desktop_view/works_article_layout'

type TProps = {
  viewingArticle: TArticle
}

const WorksArticleLayout: FC<TProps> = ({ viewingArticle }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <TopInfo
          metric={METRIC.WORKS_ARTICLE}
          article={viewingArticle}
          noBottomBorder
        />
        <MainInfos>
          <BaseInfo>
            <Link href={`${ABOUT_LINK}`} passHref>
              <Item>关于</Item>
            </Link>
            <Link href={`/${ROUTE.APPLY_COMMUNITY}`} passHref>
              <Item>创建社区</Item>
            </Link>
            <NoLinkItem onClick={() => joinUS()}>加入群聊</NoLinkItem>
            <Item href={`${GITHUB}`} rel="noopener noreferrer" target="_blank">
              Github
            </Item>
            <Link href="/feedback" passHref>
              <Item>反馈建议</Item>
            </Link>
            <Link href={`/${ROUTE.SPONSOR}`} passHref>
              <Item>
                <HeartCrabIcon src={`${ICON}/emotion/heart.png`} noLazy />
                特别感谢
              </Item>
            </Link>
            <Link href={`/${ROUTE.FRIENDS}`} passHref>
              <Item>友链</Item>
            </Link>
          </BaseInfo>
        </MainInfos>
      </InnerWrapper>
      <BottomInfo metric={METRIC.WORKS_ARTICLE} />
    </Wrapper>
  )
}

export default memo(WorksArticleLayout)
