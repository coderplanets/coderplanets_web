import { FC, memo } from 'react'
import Link from 'next/link'

import { ICON } from '@/config'
import { ROUTE } from '@/constant'

import Footer from './Footer'

import {
  Wrapper,
  BodyWrapper,
  Entry,
  Logo,
  SubscribeLogo,
  ChartLogo,
  Main,
  Title,
  Desc,
  Wip,
} from '../styles/more_panel'

const MoreContent: FC = () => {
  return (
    <Wrapper>
      <BodyWrapper>
        {/* <Entry>
          <Main>
            <Logo src={`${ICON}/menu/shop.svg`} />
            <Title>
              小周边<Wip>开发中</Wip>
            </Title>
          </Main>
          <Desc>贴纸/冰箱贴/各种奇奇怪怪。。</Desc>
        </Entry> */}
        <Entry>
          <Main>
            <Logo src={`${ICON}/menu/lifebuoy.png`} />
            <Link href={`/${ROUTE.SUPPORT_US}`} passHref>
              <Title>
                支持我们
                <Wip>help</Wip>
              </Title>
            </Link>
          </Main>
          <Desc>帮助我们一起将社区维持下去</Desc>
        </Entry>
        <Entry>
          <Main>
            <Logo src={`${ICON}/menu/hot.svg`} />
            <Link href={`/${ROUTE.TRENDING}`} passHref>
              <Title>趋势讨论</Title>
            </Link>
          </Main>
          <Desc>站内外近期热门讨论</Desc>
        </Entry>
        <Entry>
          <Main>
            <Logo src={`${ICON}/menu/makers.svg`} />
            <Title>Makers</Title>
          </Main>
          <Desc>创作者经验交流，开发者访谈</Desc>
        </Entry>
        <Link href={`/${ROUTE.RECIPES}`} passHref>
          <Entry>
            <Main>
              <Logo src={`${ICON}/menu/snippets.svg`} />
              <Title>创建子社区</Title>
            </Main>
            <Desc>在 CP 上创建一个子社区</Desc>
          </Entry>
        </Link>
        <Entry>
          <Main>
            <SubscribeLogo src={`${ICON}/menu/subscribe.svg`} />
            <Link href={`/${ROUTE.SUBSCRIBE}`} passHref>
              <Title offset="6px">社区订阅</Title>
            </Link>
          </Main>
          <Desc>各社区动态 RSS / Email 订阅</Desc>
        </Entry>
        <Entry>
          <Main>
            <ChartLogo src={`${ICON}/menu/chart.svg`} />
            <Title offset="8px">社区统计</Title>
          </Main>
          <Desc>社区各项统计数据</Desc>
        </Entry>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  )
}

export default memo(MoreContent)
