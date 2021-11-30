import { FC, memo } from 'react'

import Link from 'next/link'
import { ICON } from '@/config'
import { ROUTE } from '@/constant'
import { Space, SpaceGrow } from '@/widgets/Common'

import type { TProps as TTopInfoProps } from './index'

import {
  Wrapper,
  InfoBar,
  SiteTitle,
  Beta,
  Item,
  HeartCrabIcon,
  HomeLogo,
} from '../../styles/desktop_view/top_info'

const HomeCommunity: FC = () => {
  return (
    <Wrapper>
      <InfoBar>
        <HomeLogo />
      </InfoBar>
      <SiteTitle>
        oderPlanets
        <Beta>beta</Beta>
      </SiteTitle>
      <SpaceGrow />
      <Item>关于</Item>
      <Link href={`/${ROUTE.SUPPORT_US}`} passHref>
        <Item>支持我们</Item>
      </Link>
      <Link href="/feedback" passHref>
        <Item>反馈 &amp; 建议</Item>
      </Link>
      <Link href={`/${ROUTE.SPONSOR}`} passHref>
        <Item>
          <HeartCrabIcon src={`${ICON}/emotion/heart.png`} noLazy />
          特别感谢
        </Item>
      </Link>
      <Item href="https://plausible.io/coderplanets.com" target="_blank">
        访问统计
      </Item>
      <Space right={80} />
    </Wrapper>
  )
}

export default memo(HomeCommunity)
