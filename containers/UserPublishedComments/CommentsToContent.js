import React from 'react'
import TimeAgo from 'timeago-react'

import { MarkDownRender, CommentLoading, EmptyLabel } from '../../components'
import {
  Wrapper,
  CommentBlock,
  CommentDivider,
  CommentBox,
  CommentHeader,
  Avatar,
  AvatarInfo,
  Nickname,
  When,
  CommentBody,
} from './styles/comments_to_content'

import Parent from './Parent'

import { TYPE, Trans } from '../../utils'

const CommentsToContent = ({ data, thread, curView, onPreview }) => {
  const { entries } = data

  switch (curView) {
    case TYPE.RESULT: {
      return (
        <Wrapper>
          {entries.map(comment => (
            <div key={comment.id}>
              <CommentBlock onClick={onPreview.bind(this, comment)}>
                <Parent data={comment} thread={thread} />
                <CommentBox>
                  <CommentHeader>
                    <Avatar src={comment.author.avatar} />
                    <AvatarInfo>
                      <Nickname>{comment.author.nickname}</Nickname>
                      <When>
                        评论于:
                        <TimeAgo datetime={comment.updatedAt} locale="zh_CN" />
                      </When>
                    </AvatarInfo>
                  </CommentHeader>
                  <CommentBody>
                    <MarkDownRender body={comment.body} />
                  </CommentBody>
                </CommentBox>
              </CommentBlock>
              <CommentDivider />
            </div>
          ))}
        </Wrapper>
      )
    }
    case TYPE.RESULT_EMPTY: {
      return (
        <React.Fragment>
          <EmptyLabel text={`未找到评论的${Trans(thread)}信息`} size="large" />
        </React.Fragment>
      )
    }
    default: {
      return <CommentLoading />
    }
  }
}

export default CommentsToContent
