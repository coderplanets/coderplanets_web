import { FC, memo } from 'react'

import ActionItem from './ActionItem'

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
]

const ActivityInfo: FC = () => {
  return (
    <Wrapper>
      {tmpItems.map((item) => (
        <ActionItem key={item.id} item={item} />
      ))}
    </Wrapper>
  )
}

export default memo(ActivityInfo)
