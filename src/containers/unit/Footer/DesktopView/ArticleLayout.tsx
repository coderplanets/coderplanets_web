/* eslint-disable jsx-a11y/accessible-emoji */
import { FC, memo } from 'react'

import Link from 'next/link'

import type { TArticle, TC11NLayout, TMetric } from '@/spec'
import { ICON, GITHUB } from '@/config'
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
} from '../styles/desktop_view/article_layout'

type TProps = {
  article: TArticle
  metric: TMetric
  layout: TC11NLayout
}

const BriefView: FC<TProps> = ({ metric, article, layout }) => {
  return (
    <Wrapper metric={metric} layout={layout}>
      <InnerWrapper>
        <TopInfo metric={METRIC.ARTICLE} article={article} noBottomBorder />
        <MainInfos>
          <BaseInfo>
            <Link href="/home/post/1" passHref>
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
              <Item>反馈 &amp; 建议</Item>
            </Link>
            <Link href={`/${ROUTE.SPONSOR}`} passHref>
              <Item>
                <HeartCrabIcon src={`${ICON}/emotion/heart.png`} noLazy />
                特别感谢
              </Item>
            </Link>
          </BaseInfo>
        </MainInfos>
      </InnerWrapper>
      <BottomInfo metric={metric} />
    </Wrapper>
  )
}

export default memo(BriefView)
