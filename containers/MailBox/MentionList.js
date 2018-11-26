import React from 'react'
import R from 'ramda'

import { EmptyLabel } from '../../components'
import {
  Wrapper,
  ListsWrapper,
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
import { uid, cutFrom } from '../../utils'

import { previewUser } from './logic'

const MentionList = ({ data }) => {
  if (R.isEmpty(data.entries)) return <EmptyLabel text="还没有人提到(@)你" />

  return (
    <Wrapper>
      <ListsWrapper>
        <div>
          {data.entries.map(item => (
            <div key={uid.gen()}>
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
            </div>
          ))}
        </div>
      </ListsWrapper>
    </Wrapper>
  )
}

export default MentionList
