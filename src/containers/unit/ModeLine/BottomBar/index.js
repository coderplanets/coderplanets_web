import React from 'react'

import { ICON } from '@/config'

import { MenuBlock, CommunityBlock, AccountBlock } from './ArrowBlock'
import { Wrapper, ItemsWrapper, ItemIcon } from '../styles/bottom_bar'

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
    title: '发布',
    raw: 'publish',
    icon: `${ICON}/edit/publish-pen.svg`,
  },
  {
    title: '更多',
    raw: 'more',
    icon: `${ICON}/more.svg`,
  },
]

const Footer = () => {
  return (
    <Wrapper>
      <MenuBlock />
      <CommunityBlock />
      <ItemsWrapper>
        {options.map((item) => (
          <ItemIcon key={item.raw} src={item.icon} />
        ))}
      </ItemsWrapper>
      <AccountBlock />
    </Wrapper>
  )
}

export default Footer
