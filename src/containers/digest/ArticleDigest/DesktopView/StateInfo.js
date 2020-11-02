import React from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Item,
  Text,
  ViewdIcon,
  ViewsText,
  LikeIcon,
  NotifyIcon,
  ReportIcon,
  Divider,
} from '../styles/desktop_view/state_info'

const StateInfo = ({ article }) => {
  return (
    <Wrapper>
      <Item>
        <ViewdIcon src={`${ICON}/article/viewed.svg`} />
        <ViewsText>{article.views}</ViewsText>
      </Item>
      <Item>
        <LikeIcon src={`${ICON}/article/comment.svg`} />
        <Text>{article.commentsCount}</Text>
      </Item>
      <Divider />
      <Item>
        <NotifyIcon src={`${ICON}/article/notify-on.svg`} />
      </Item>
      <Item>
        <ReportIcon src={`${ICON}/article/report.svg`} />
      </Item>
    </Wrapper>
  )
}

export default React.memo(StateInfo)
