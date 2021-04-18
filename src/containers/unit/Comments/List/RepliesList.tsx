import React from 'react'

import type { TAccount, TComment } from '@/spec'

import DateDivider from './DateDivider'
import Comment from '../Comment'

import { RepliesWrapper, RepliesCommentsWrapper } from '../styles/list/list'

type TProps = {
  entries: TComment[]
  tobeDeleteId: string
  accountInfo: TAccount
}

const RepliesList: React.FC<TProps> = ({
  entries,
  tobeDeleteId,
  accountInfo,
}) => (
  <RepliesWrapper>
    {entries.slice(7, 9).map((c, index) => (
      <RepliesCommentsWrapper key={c.id}>
        <Comment
          data={c}
          tobeDeleteId={tobeDeleteId}
          accountInfo={accountInfo}
          withoutBottomDivider={c.id === '328'}
        />
        {(index === 1 || index === 3) && <DateDivider text="一个月后" />}
      </RepliesCommentsWrapper>
    ))}
  </RepliesWrapper>
)

export default React.memo(RepliesList)
