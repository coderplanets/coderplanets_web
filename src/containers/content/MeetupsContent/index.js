/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'
import { Affix, Button } from 'antd'

import { ICON_CMD } from '@config'
import { connectStore, buildLog } from '@utils'

import DotDivider from '@components/DotDivider'
import FiltersMenu from '@components/FiltersMenu'

import CalendarCard from './CalendarCard'
import DateSelector from './DateSelector'
import ActivityCard from './ActivityCard'

import {
  Wrapper,
  InnerWrapper,
  SidebarWrapper,
  ContentWrapper,
  NaviFooter,
  Terms,
  TermItem,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const items = [
  {
    id: 1,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 2,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
    type: '后端',
  },
  {
    id: 3,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 4,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
    type: '容器',
  },
  {
    id: 5,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
    type: '算法',
  },
  {
    id: 6,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 7,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 8,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 9,
    date: '10 / 27',
    week: '周二',
    title: 'SOFAChannel#11：从一个例子开始体验轻量级类隔离容器 SOFAArk',
    company: '腾讯',
  },
  {
    id: 10,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 11,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 12,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
]

const filtersItems = [
  {
    id: '0',
    title: '城 市',
    icon: `${ICON_CMD}/navi_china.svg`,

    filter: {
      active: '全部',
      options: [
        {
          id: 0,
          title: '全部',
        },
        {
          id: 1,
          title: '北京',
        },
        {
          id: 2,
          title: '上海',
        },
        {
          id: 3,
          title: '杭州',
        },
        {
          id: 4,
          title: '深圳',
        },
        {
          id: 5,
          title: '成都',
        },
      ],
    },
  },
  {
    id: '101',
    title: '话 题',
    icon: `${ICON_CMD}/navi_china.svg`,
    filter: {
      options: [
        {
          id: 10,
          title: '全部',
        },
        {
          id: 0,
          title: '大前端',
        },
        {
          id: 1,
          title: '数据库',
        },
        {
          id: 2,
          title: '容器',
        },
      ],
    },
  },
  {
    id: '102',
    title: '费 用',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
  {
    // 非 IT，设计类的网站
    id: '103',
    title: '人 数',
    icon: `${ICON_CMD}/navi_china.svg`,
  },
]

const MeetupsContentContainer = ({ meetupsContent }) => {
  useInit(meetupsContent)

  // TODO:  只要一 scroll, 就把打开的 filter 都关掉
  return (
    <Wrapper>
      <InnerWrapper>
        <SidebarWrapper>
          <CalendarCard />
          <Affix offsetTop={20}>
            <FiltersMenu items={filtersItems} />
            <NaviFooter>
              <Button type="primary" size="small" ghost>
                + 发起活动
              </Button>

              <Terms>
                <TermItem>关于</TermItem> <DotDivider radius="3px" />{' '}
                <TermItem>建议</TermItem> <DotDivider radius="3px" />{' '}
                <TermItem>举报</TermItem>
              </Terms>
            </NaviFooter>
          </Affix>
        </SidebarWrapper>
        <ContentWrapper>
          <DateSelector />
          {items.map(item => (
            <ActivityCard key={item.id} item={item} />
          ))}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(MeetupsContentContainer)
