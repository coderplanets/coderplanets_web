import { FC, memo } from 'react'

import type { TAccount, TComment, TID } from '@/spec'

import TogglerButton from './TogglerButton'
import Comment from '../Comment'

import { RepliesWrapper, RepliesCommentsWrapper } from '../styles/list/list'

type TProps = {
  entries: TComment[]
  tobeDeleteId: string
  accountInfo: TAccount
  foldedIds: TID[]
}

const RepliesList: FC<TProps> = ({
  entries,
  tobeDeleteId,
  accountInfo,
  foldedIds,
}) => {
  return (
    <RepliesWrapper>
      {entries.slice(7, 9).map((c) => (
        <RepliesCommentsWrapper key={c.id}>
          <Comment
            data={c}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            foldedIds={foldedIds}
            withoutBottomDivider={c.id === '328'}
            isReply
          />
        </RepliesCommentsWrapper>
      ))}
      <TogglerButton text="展开 236 条回复" />
    </RepliesWrapper>
  )
}

export default memo(RepliesList)
