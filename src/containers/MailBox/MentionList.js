import React from 'react'
import { isEmpty } from 'ramda'

import EmptyLabel from '@/components/EmptyLabel'

import { cutFrom } from '@/utils'
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
  FloorNum,
} from './styles/mention_list'

import { previewUser } from './logic'

const getLinkAddr = (item) => {
  const { community, parentType, parentId, sourceType, sourceId } = item

  if (!isEmpty(parentType)) {
    // comment
    return `/${community}/${parentType}/${parentId}`
  }

  // article
  const thread = sourceType === 'posts' ? 'post' : sourceType
  return `/${community}/${thread}/${sourceId}`
}

const AtMessage = ({ item }) => {
  const { parentType, floor, sourceType } = item
  if (!isEmpty(parentType)) {
    if (sourceType === 'comment_reply') {
      return (
        <span>
          <FloorNum>{`#${floor}`}</FloorNum>
          回复了你
        </span>
      )
    }

    return (
      <span>
        在<FloorNum>{`#${floor}`}</FloorNum>
        @了你
      </span>
    )
  }

  return <span>中@了你</span>
}

const MentionList = ({ data }) => {
  if (isEmpty(data.entries)) return <EmptyLabel text="还没有人提到(@)你" />

  return (
    <Wrapper>
      <ListsWrapper>
        {data.entries.map((item) => (
          <MessageLinker
            key={item.id}
            href={`${getLinkAddr(item)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Message>
              <MessageHeader>
                <UserLabel onClick={() => previewUser(item.fromUser)}>
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
                  <AtLabel>
                    <AtMessage item={item} />
                  </AtLabel>
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

export default React.memo(MentionList)
