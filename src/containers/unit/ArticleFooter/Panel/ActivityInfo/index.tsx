import { FC, memo } from 'react'

import { Br } from '@/widgets/Common'

import ActionItem from './ActionItem'

import {
  Wrapper,
  Item,
  EditPenIcon,
  UpdateTimeIcon,
  CommentIcon,
  Highlight,
  Label,
  Content,
  HelpHint,
} from '../../styles/panel/activity_info'

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
      <Item>
        <EditPenIcon />
        <Label>创建时间</Label>
        <Content>
          <Highlight>mydearxym</Highlight> 创建于 <Highlight>3 天前</Highlight>
        </Content>
      </Item>

      <Item>
        <UpdateTimeIcon />
        <Label>更新时间</Label>
        <Content>
          <Highlight>longge</Highlight> 更新于 <Highlight>3 天前</Highlight>
        </Content>
      </Item>

      <Item>
        <CommentIcon />
        <Label>最后回复</Label>
        <Content>
          <Highlight>longge2</Highlight> 评论于 <Highlight>10 天前</Highlight>
        </Content>
      </Item>

      <Br top={15} />

      {tmpItems.map((item) => (
        <ActionItem key={item.id} item={item} />
      ))}
      <HelpHint>关于日志</HelpHint>
    </Wrapper>
  )
}

export default memo(ActivityInfo)
