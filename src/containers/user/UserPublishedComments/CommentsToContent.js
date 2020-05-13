import React from 'react'
import TimeAgo from 'timeago-react'

import { TYPE } from '@/constant'
import { Trans } from '@/utils'

import Pagi from '@/components/Pagi'
import EmptyLabel from '@/components/EmptyLabel'
import MarkDownRender from '@/components/MarkDownRender'
import { CommentLoading } from '@/components/LoadingEffects'

import Parent from './Parent'

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

import { onPreview, onPageChange } from './logic'

const CommentsToContent = ({ data, thread, curView }) => {
  const { entries } = data

  switch (curView) {
    case TYPE.RESULT:
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

          <Pagi
            margin={{ left: '-20px' }}
            pageNumber={data.pageNumber}
            pageSize={data.pageSize}
            totalCount={data.totalCount}
            onChange={onPageChange}
          />
        </Wrapper>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <React.Fragment>
          <EmptyLabel text={`未找到评论的${Trans(thread)}信息`} size="large" />
        </React.Fragment>
      )

    default:
      return <CommentLoading />
  }
}

export default React.memo(CommentsToContent)
