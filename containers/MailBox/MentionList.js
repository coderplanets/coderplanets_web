import React from 'react'
import R from 'ramda'

import EmptyLabel from 'components/EmptyLabel'

import { cutFrom } from 'utils'
import {
  Wrapper,
  ListsWrapper,
  MessageLinker,
  Message,
  MessageDivider,
  MessageHeader,
  MessageBody,
  UserLabel,
  UserAvatar,
  UserNickname,
  TitleHeader,
  TypeLabel,
  SourceTitle,
  SourcePreview,
  PreviewBody,
  AtLabel,
} from './styles/mention_list'

import { previewUser } from './logic'

const getLinkAddr = item => {
  const { sourceType } = item
  const thread = sourceType === 'posts' ? 'post' : sourceType

  return `/${item.community}/${thread}/${item.sourceId}`
}

const MentionList = ({ data }) => {
  if (R.isEmpty(data.entries)) return <EmptyLabel text="还没有人提到(@)你" />

  return (
    <Wrapper>
      <ListsWrapper>
        {data.entries.map(item => (
          <MessageLinker
            key={item.id}
            href={`${getLinkAddr(item)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Message>
              <MessageHeader>
                <UserLabel onClick={previewUser.bind(this, item.fromUser)}>
                  <UserAvatar src={item.fromUser.avatar} />
                  <UserNickname>
                    {cutFrom(item.fromUser.nickname, 8)}
                  </UserNickname>
                </UserLabel>
                <TitleHeader>
                  <TypeLabel>在帖子</TypeLabel>
                  <SourceTitle>{item.sourceTitle}</SourceTitle>
                </TitleHeader>
              </MessageHeader>
              <MessageBody>
                <SourcePreview>
                  <PreviewBody>{item.sourcePreview}</PreviewBody>
                  <AtLabel>中@了你</AtLabel>
                </SourcePreview>
              </MessageBody>
            </Message>
            <MessageDivider />
          </MessageLinker>
        ))}
      </ListsWrapper>
    </Wrapper>
  )
}

export default MentionList
