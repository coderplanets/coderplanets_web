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
} from '../styles/more_panel/mobile_view'

const items = [
  {
    icon: `${ICON}/menu/shop.svg`,
    title: '作品集市',
    href: `/${ROUTE.PLAZA}`,
    raw: 11,
  },
  {
    icon: `${ICON}/route/cool-guide.svg`,
    title: '酷导航',
    href: `/${ROUTE.COOL_GUIDE}`,
    raw: 12,
  },
  {
    icon: `${ICON}/route/cup.svg`,
    title: '来一杯',
    href: `/${ROUTE.HAVE_A_DRINK}`,
    raw: 14,
  },
  {
    icon: `${ICON}/route/meetup.svg`,
    title: '小聚',
    href: `/${ROUTE.MEETUPS}`,
    raw: 15,
  },
  {
    icon: `${ICON_CMD}/header/more_data.svg`,
    title: 'Trending',
    href: `/${ROUTE.TRENDING}`,
    raw: 8,
  },
  {
    icon: `${ICON}/menu/makers2.svg`,
    title: 'Makers',
    href: '/makers',
    raw: 2,
  },
  {
    icon: `${ICON}/menu/vip.svg`,
    title: '会员',
    href: `/${ROUTE.MEMBERSHIP}`,
    raw: 28,
  },
  {
    icon: `${ICON}/menu/ear.svg`,
    title: '建议反馈',
    href: '/feedback',
    raw: 30,
  },
]

const MoreContent: FC = () => {
  return (
    <Wrapper mobile>
      <BodyWrapper>
        {items.map((item, index) => (
          <Link key={item.href} href={item.href} passHref>
            <Entry index={index} mobile>
              <Logo src={item.icon} />
              <Intro>
                <Title>{item.title}</Title>
              </Intro>
            </Entry>
          </Link>
        ))}
      </BodyWrapper>
    </Wrapper>
  )
}

export default memo(MoreContent)
