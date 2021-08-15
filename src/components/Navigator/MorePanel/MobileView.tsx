import { FC, memo } from 'react'
import Link from 'next/link'

import { ICON, ICON_CMD } from '@/config'
import { ROUTE } from '@/constant'

import {
  Wrapper,
  BodyWrapper,
  Entry,
  Logo,
  Intro,
  Title,
  Desc,
  Wip,
} from '../styles/more_panel/mobile_view'

const items = [
  {
    icon: `${ICON}/route/light.svg`,
    title: '作品集市',
    desc: '作品，产品的跳蚤集市',
    href: `/${ROUTE.DISCOVERY}`,
    raw: 11,
  },
  {
    icon: `${ICON}/route/cool-guide.svg`,
    title: '酷导航',
    desc: '发现有意思的东西',
    href: `/${ROUTE.DISCOVERY}`,
    raw: 12,
  },
  {
    icon: `${ICON}/route/job.svg`,
    title: '工作',
    desc: '找工作？来这里看看',
    href: `/${ROUTE.DISCOVERY}`,
    raw: 13,
  },
  {
    icon: `${ICON}/route/cup.svg`,
    title: '来一杯',
    desc: '渴了累了来一杯？',
    href: `/${ROUTE.DISCOVERY}`,
    raw: 14,
  },
  {
    icon: `${ICON}/route/meetup.svg`,
    title: '活动',
    desc: '来线下和同行聊聊?',
    href: `/${ROUTE.DISCOVERY}`,
    raw: 15,
  },
  {
    icon: `${ICON_CMD}/header/more_data.svg`,
    title: 'Trending',
    desc: '各社区近期精华内容',
    href: `/${ROUTE.TRENDING}`,
    raw: 8,
  },
  {
    icon: `${ICON_CMD}/header/more_indie.svg`,
    title: '独立开发者',
    desc: '经验交流，开发者访谈',
    href: `/${ROUTE.RECIPES}`,
    raw: 2,
  },
  {
    icon: `${ICON_CMD}/header/more_snippets.svg`,
    title: '代码片段',
    desc: '各语言实用 Snippets，小技巧',
    wip: true,
    href: '',
    raw: 3,
  },
]

const MoreContent: FC = () => {
  return (
    <Wrapper mobile>
      <BodyWrapper>
        {items.map((item, index) => (
          <Link key={item.raw} href={`/${ROUTE.TRENDING}`} passHref>
            <Entry index={index} mobile>
              <Logo src={item.icon} />
              <Intro>
                <Title>
                  {item.title} {item.wip && <Wip>开发中</Wip>}{' '}
                </Title>
                <Desc>{item.desc}</Desc>
              </Intro>
            </Entry>
          </Link>
        ))}
      </BodyWrapper>
    </Wrapper>
  )
}

export default memo(MoreContent)
