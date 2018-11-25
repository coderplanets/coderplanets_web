import React from 'react'
import R from 'ramda'

import { EmptyLabel } from '../../components'
import {
  Wrapper,
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
  AtLabel,
} from './styles/mention_list'
import { uid, cutFrom } from '../../utils'

const MentionList = ({ data }) => {
  console.log('get data ==> : ', data)
  if (R.isEmpty(data.entries)) return <EmptyLabel text="还没有人提到(@)你" />

  return (
    <Wrapper>
      {data.entries.map(item => (
        <div key={uid.gen()}>
          <Message>
            <MessageHeader>
              <UserLabel>
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
                {cutFrom(item.sourcePreview, 20)}
                <AtLabel>中@了你</AtLabel>
              </SourcePreview>
            </MessageBody>
          </Message>
          <MessageDivider />
        </div>
      ))}
    </Wrapper>
  )
}

export default MentionList
