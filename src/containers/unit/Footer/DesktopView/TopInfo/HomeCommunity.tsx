import { FC, memo } from 'react'

import Link from 'next/link'
import { ICON, ABOUT_LINK } from '@/config'
import { ROUTE } from '@/constant'
import { Space, SpaceGrow } from '@/widgets/Common'

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
      <Link href={`${ABOUT_LINK}`} passHref>
        <Item>关于</Item>
      </Link>
      <Link href={`/${ROUTE.SUPPORT_US}`} passHref>
        <Item>支持我们</Item>
      </Link>
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
      <Item href="https://plausible.io/coderplanets.com" target="_blank">
        访问统计
      </Item>
      <Space right={80} />
    </Wrapper>
  )
}

export default memo(HomeCommunity)
