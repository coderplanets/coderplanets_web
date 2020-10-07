import React from 'react'

import { ICON, ICON_BASE } from '@/config'
import {
  Wrapper,
  Info,
  CommunityLogo,
  ItemsWrapper,
  // Item,
  ItemIcon,
} from '../styles/footer'

const options = [
  {
    title: '过滤',
    raw: 'filter',
    icon: `${ICON}/filter.svg`,
  },
  {
    title: '发现',
    raw: 'discover',
    icon: `${ICON}/discover.svg`,
  },
  {
    title: '设置',
    raw: 'setting',
    icon: `${ICON}/magic.svg`,
  },
  {
    title: '发布',
    raw: 'publish',
    icon: `${ICON}/publish-plus.svg`,
  },
  {
    title: '账户',
    raw: 'account',
    icon: `${ICON}/account-solid.svg`,
  },
]

const Footer = () => {
  return (
    <Wrapper>
      <Info>
        <CommunityLogo src={`${ICON_BASE}/site_logo.svg`} />
      </Info>
      <ItemsWrapper>
        {options.map((item) => (
          // <Item key={item.raw}>{item.title}</Item>
          <ItemIcon key={item.raw} src={item.icon} />
        ))}
      </ItemsWrapper>
    </Wrapper>
  )
}

export default Footer
