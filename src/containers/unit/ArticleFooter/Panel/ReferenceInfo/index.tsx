import { FC, memo } from 'react'

import ActionItem from '../ActivityInfo/ActionItem'

import { Wrapper } from '../../styles/panel/activity_info'

const tmpItems = [
  {
    id: '0',
    author: {
      login: '1',
      nickname: 'mydearxym',
      avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
    },
    insertedAt: '3天前',
    article: {
      title: '这个社区太棒了',
    },
    community: {
      raw: 'javascript',
    },
  },
  {
    id: '1',
    author: {
      login: '1',
      nickname: 'simon',
      avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
    },
    insertedAt: '1天前',
    article: {
      title: 'coderplanets 设计指南',
    },
    community: {
      raw: 'javascript',
    },
  },
]

const RefersPanel: FC = () => {
  return (
    <Wrapper>
      {tmpItems.map((item) => (
        <ActionItem key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default memo(RefersPanel)
