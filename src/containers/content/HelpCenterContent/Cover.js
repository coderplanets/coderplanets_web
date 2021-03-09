import React from 'react'

import LinksCard from '@/components/LinksCard'

import { Wrapper } from './styles/cover'
import { gotoDetail } from './logic'

const items = [
  {
    id: '0',
    title: '这是一个什么社区？',
  },
  {
    id: '1',
    title: 'Wix Bookings: Tips for Marketing',
  },
  {
    id: '2',
    title: '在哪里可以下载到 iOS 版本的安装包?',
  },
  {
    id: '3',
    title: '后续会有更多的作品吗',
  },
]

const Cover = () => {
  return (
    <Wrapper>
      <LinksCard
        title="常见问题"
        items={items}
        onSelect={(item) => gotoDetail(item)}
      />
      <LinksCard
        title="常见问题"
        items={items}
        onSelect={(item) => gotoDetail(item)}
      />
      <LinksCard
        title="常见问题"
        items={items}
        onSelect={(item) => gotoDetail(item)}
      />
      <LinksCard
        title="常见问题"
        items={items}
        onSelect={(item) => gotoDetail(item)}
      />
      <LinksCard
        title="常见问题"
        items={items}
        onSelect={(item) => gotoDetail(item)}
      />
    </Wrapper>
  )
}

export default Cover
