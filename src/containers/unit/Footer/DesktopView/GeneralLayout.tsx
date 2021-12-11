/* eslint-disable jsx-a11y/accessible-emoji */
import { FC, memo } from 'react'

import Link from 'next/link'
import type { TMetric } from '@/spec'
import { ICON, GITHUB, ABOUT_LINK } from '@/config'
import { ROUTE } from '@/constant'
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
} from '../styles/desktop_view/general_layout'

type TProps = {
  metric: TMetric
  title?: string
}

const GeneralLayout: FC<TProps> = ({ metric, title = '' }) => {
  return (
    <Wrapper>
      <InnerWrapper metric={metric}>
        <TopInfo metric={metric} title={title} noBottomBorder />
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
      <BottomInfo metric={metric} />
    </Wrapper>
  )
}

export default memo(GeneralLayout)
