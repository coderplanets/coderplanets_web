import { FC, memo } from 'react'

import { ICON, ICON_CMD } from '@/config'

import { ROUTE } from '@/constant'
import { changeToCommunity } from '@/utils/helper'

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
    target: ROUTE.PLAZA,
    raw: 11,
  },
  {
    icon: `${ICON}/route/cool-guide.svg`,
    title: '酷导航',
    target: ROUTE.COOL_GUIDE,
    raw: 12,
  },
  {
    icon: `${ICON}/route/cup.svg`,
    title: '来一杯',
    target: ROUTE.HAVE_A_DRINK,
    raw: 14,
  },
  {
    icon: `${ICON}/route/meetup.svg`,
    title: '小聚',
    target: ROUTE.MEETUPS,
    raw: 15,
  },
  {
    icon: `${ICON_CMD}/header/more_data.svg`,
    title: 'Trending',
    target: ROUTE.TRENDING,
    raw: 8,
  },
  {
    icon: `${ICON}/menu/makers2.svg`,
    title: 'Makers',
    target: 'makers',
    raw: 2,
  },
  {
    icon: `${ICON}/menu/vip.svg`,
    title: '会员',
    target: ROUTE.MEMBERSHIP,
    raw: 28,
  },
  {
    icon: `${ICON}/menu/ear.svg`,
    title: '建议反馈',
    target: 'feedback',
    raw: 30,
  },
]

const MoreContent: FC = () => {
  return (
    <Wrapper mobile>
      <BodyWrapper>
        {items.map((item, index) => (
          <Entry
            key={item.target}
            index={index}
            mobile
            onClick={() => {
              changeToCommunity(item.target)
            }}
          >
            <Logo src={item.icon} />
            <Intro>
              <Title>{item.title}</Title>
            </Intro>
          </Entry>
        ))}
      </BodyWrapper>
    </Wrapper>
  )
}

export default memo(MoreContent)
