import React from 'react'
import { isEmpty } from 'ramda'

import EmptyLabel from '@/components/EmptyLabel'
import Pagi from '@/components/Pagi'

import ToggleInfo from './ToggleInfo'

import {
  Wrapper,
  InfoWrapper,
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

import { loadMentions } from './logic'

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

const MentionList = ({
  data: { entries, pageNumber, pageSize, totalCount },
  readState,
}) => {
  if (isEmpty(entries)) {
    return (
      <Wrapper>
        <InfoWrapper>
          <ToggleInfo readState={readState} totalCount={totalCount} />
        </InfoWrapper>
        <EmptyLabel text="还没有人提到(@)你" />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <InfoWrapper>
        <ToggleInfo readState={readState} totalCount={totalCount} />
      </InfoWrapper>

      <ListsWrapper>
        {entries.map((item) => (
          <MessageLinker
            key={item.id}
            href={`${getLinkAddr(item)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Message>
              <MessageHeader>
                <UserLabel>
                  <UserAvatar src={item.fromUser.avatar} />
                  <UserNickname>{item.fromUser.nickname}</UserNickname>
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
        <Pagi
          margin={{ left: '-20px' }}
          pageNumber={pageNumber}
          pageSize={pageSize}
          totalCount={totalCount}
          onChange={loadMentions}
        />
      </ListsWrapper>
    </Wrapper>
  )
}

export default React.memo(MentionList)
