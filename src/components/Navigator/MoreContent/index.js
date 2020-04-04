import React from 'react'
// import Link from 'next/link'

import { ICON_CMD } from '@config'

// import { ROUTE } from '@constant'
import Footer from './Footer'

import {
  Wrapper,
  BodyWrapper,
  Entry,
  Logo,
  Intro,
  Title,
  Desc,
  Wip,
} from '../styles/more_content'

const MoreContent = () => (
  <Wrapper>
    <BodyWrapper>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_shop.svg`} />
        <Intro>
          <Title>
            小周边<Wip>开发中</Wip>
          </Title>
          <Desc>贴纸、冰箱贴以及各种奇奇怪怪。。</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_indie.svg`} />
        <Intro>
          <Title>独立开发者</Title>
          <Desc>经验交流，开发者访谈</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_data.svg`} />
        <Intro>
          <Title>Trending</Title>
          <Desc>各社区近期精华内容</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_chart.svg`} />
        <Intro>
          <Title>社区统计</Title>
          <Desc>各社区各项统计数据</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_weekly.svg`} />
        <Intro>
          <Title>
            周刊订阅 <Wip>开发中</Wip>
          </Title>
          <Desc>社区 RSS 订阅，专题周刊等</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_vip.svg`} />
        <Intro>
          <Title>高级会员</Title>
          <Desc>升级高级会员，获得更好体验</Desc>
        </Intro>
      </Entry>
      <Entry>
        <Logo src={`${ICON_CMD}/header/more_sponsor.svg`} />
        <Intro>
          <Title>赞助与广告</Title>
          <Desc>赞助社区，广告投放..</Desc>
        </Intro>
      </Entry>
    </BodyWrapper>
    <Footer />
  </Wrapper>
)

export default React.memo(MoreContent)
