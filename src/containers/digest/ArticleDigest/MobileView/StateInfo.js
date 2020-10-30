import React from 'react'

import { ICON } from '@/config'

import { Space } from '@/components/Common'
import {
  Wrapper,
  Section,
  Item,
  Text,
  ViewdIcon,
  ViewsText,
  LikeIcon,
  CommentIcon,
  Divider,
  AuthorWrapper,
  Avatar,
  Nickname,
} from '../styles/mobile_view/state_info'

const StateInfo = ({ article, author }) => {
  return (
    <Wrapper>
      <Section>
        <Item>
          <ViewdIcon src={`${ICON}/viewed.svg`} />
          <ViewsText>{article.views}</ViewsText>
        </Item>
        <Space right="10px" />
        <Item>
          <CommentIcon src={`${ICON}/comment.svg`} />
          <Text>{article.commentsCount}</Text>
        </Item>
        <Divider />
        <Item>
          <LikeIcon src={`${ICON}/shape/heart.svg`} />
          <Text>{article.starredCount}</Text>
        </Item>
      </Section>
      <AuthorWrapper>
        <Avatar src={`${author.avatar}`} />
        <Nickname>{author.nickname}</Nickname>
      </AuthorWrapper>
    </Wrapper>
  )
}

export default React.memo(StateInfo)
