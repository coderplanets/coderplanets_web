import React from 'react'
import { ICON_BASE } from '@/config'
import {
  Wrapper,
  Info,
  CommunityLogo,
  ItemsWrapper,
  Item,
} from '../styles/mobile_view'

const options = [
  {
    title: '过滤',
    raw: 'filter',
  },
  {
    title: '发现',
    raw: 'discover',
  },
  {
    title: '设置',
    raw: 'setting',
  },
  {
    title: '发布',
    raw: 'publish',
  },
  {
    title: '账户',
    raw: 'account',
  },
]

const MobileView = () => {
  return (
    <Wrapper>
      <Info>
        <CommunityLogo src={`${ICON_BASE}/site_logo.svg`} />
      </Info>
      <ItemsWrapper>
        {options.map((item) => (
          <Item key={item.raw}>{item.title}</Item>
        ))}
      </ItemsWrapper>
    </Wrapper>
  )
}

export default MobileView
