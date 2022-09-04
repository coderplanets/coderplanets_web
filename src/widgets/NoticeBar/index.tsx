/*
 *
 * NoticeBar
 *
 */

import { FC, memo } from 'react'
import Link from 'next/link'
import TimeAgo from 'timeago-react'

import type { TSpace } from '@/spec'
import { buildLog } from '@/utils/logger'
import { ICON } from '@/config'

import Icon from './Icon'

import type { TType } from './spec'
import { TYPE } from './constant'
import { Wrapper, Main, UserName, AuthorTag, Timestamp, Why } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:NoticeBar:index')

type TProps = {
  testid?: string
  type?: TType
  user?: {
    nickname: string
  } | null
  isArticleAuthor?: boolean
  content: string
  timestamp?: string | null
  explainLink?: string | null
  noBg?: boolean
} & TSpace

const NoticeBar: FC<TProps> = ({
  testid = 'notice-bar',
  type = TYPE.NOTICE,
  user = null,
  isArticleAuthor = false,
  content,
  timestamp = null,
  explainLink = null,
  noBg = false,
  ...restProps
}) => {
  return (
    <Wrapper testid={testid} noBg={noBg} {...restProps}>
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
      {explainLink && (
        <Link href={explainLink}>
          <Why src={`${ICON}/shape/question.svg`} />
        </Link>
      )}
    </Wrapper>
  )
}

export default memo(NoticeBar)
