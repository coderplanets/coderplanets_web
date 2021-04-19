import React from 'react'

import type { TAccount, TComment } from '@/spec'

import TogglerButton from './TogglerButton'
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
}) => {
  return (
    <RepliesWrapper>
      {entries.slice(7, 9).map((c) => (
        <RepliesCommentsWrapper key={c.id}>
          <Comment
            data={c}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            withoutBottomDivider={c.id === '328'}
          />
        </RepliesCommentsWrapper>
      ))}
      <TogglerButton text="展开 236 条回复" />
    </RepliesWrapper>
  )
}

export default React.memo(RepliesList)
