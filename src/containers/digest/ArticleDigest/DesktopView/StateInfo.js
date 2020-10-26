import React from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Item,
  Text,
  ViewdIcon,
  ViewsText,
  LikeIcon,
  ReportIcon,
  Divider,
} from '../styles/desktop_view/state_info'

const StateInfo = ({ article }) => {
  return (
    <Wrapper>
      <Item>
        <ViewdIcon src={`${ICON}/viewed.svg`} />
        <ViewsText>{article.views}</ViewsText>
      </Item>
      <Item>
        <LikeIcon src={`${ICON}/comment.svg`} />
        <Text>{article.commentsCount}</Text>
      </Item>
      <Divider />
      <Item>
        <ReportIcon src={`${ICON}/report-ghost.svg`} />
      </Item>
    </Wrapper>
  )
}

export default React.memo(StateInfo)
