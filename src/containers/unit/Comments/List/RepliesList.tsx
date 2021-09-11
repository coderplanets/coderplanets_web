import { FC, memo } from 'react'

import type { TAccount, TComment, TID } from '@/spec'

import TogglerButton from './TogglerButton'
import Comment from '../Comment'

import { RepliesWrapper, RepliesCommentsWrapper } from '../styles/list/list'

type TProps = {
  entries: TComment[]
  repliesCount: number
  tobeDeleteId: string
  accountInfo: TAccount
  foldedIds: TID[]
  hidedIds: TID[]
}

const RepliesList: FC<TProps> = ({
  entries,
  repliesCount,
  tobeDeleteId,
  accountInfo,
  foldedIds,
  hidedIds,
}) => {
  return (
    <RepliesWrapper>
      {entries.map((comment) => (
        <RepliesCommentsWrapper key={comment.id}>
          <Comment
            data={comment}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            foldedIds={foldedIds}
            hidedIds={hidedIds}
            isReply
          />
        </RepliesCommentsWrapper>
      ))}
      {repliesCount > entries.length && (
        <TogglerButton
          text={`显示更多回复 ( ${repliesCount - entries.length - 1} )`}
        />
      )}
    </RepliesWrapper>
  )
}

export default memo(RepliesList)
