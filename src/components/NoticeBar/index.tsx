/*
 *
 * NoticeBar
 *
 */

import React, { FC } from 'react'

import TimeAgo from 'timeago-react'

import { buildLog } from '@/utils'
import { ICON } from '@/config'

import Icon from './Icon'

import { Wrapper, Main, UserName, AuthorTag, Timestamp, Why } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NoticeBar:index')

type TProps = {
  testid?: string
  type?: 'lock' | 'notice' | 'bot'
  user?: {
    nickname: string
  } | null
  isArticleAuthor?: boolean
  content: string
  timestamp?: string | null
}

const NoticeBar: FC<TProps> = ({
  testid = 'notice-bar',
  type = 'notice',
  user = null,
  isArticleAuthor = false,
  content,
  timestamp = null,
}) => {
  return (
    <Wrapper testid={testid}>
      <Icon type={type} />
      <Main>
        {user && <UserName>{user.nickname}</UserName>}
        {isArticleAuthor && <AuthorTag>(作者)</AuthorTag>}
        {content}
      </Main>
      {timestamp && (
        <Timestamp>
          <TimeAgo datetime={timestamp} locale="zh_CN" />
        </Timestamp>
      )}
      <Why src={`${ICON}/shape/question.svg`} />
    </Wrapper>
  )
}

export default React.memo(NoticeBar)
