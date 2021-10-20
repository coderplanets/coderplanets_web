import { FC, memo } from 'react'
import { find } from 'ramda'

import type { TComment, TID } from '@/spec'

import TogglerButton from './TogglerButton'
import Comment from '../Comment'

import { RepliesWrapper, RepliesCommentsWrapper } from '../styles/list/list'

type TProps = {
  entries: TComment[]
  repliesCount: number
  tobeDeleteId: string
  foldedIds: TID[]
}

const RepliesList: FC<TProps> = ({
  entries,
  repliesCount,
  tobeDeleteId,
  foldedIds,
}) => {
  return (
    <RepliesWrapper>
      {entries.map((comment) => {
        return (
          <RepliesCommentsWrapper key={comment.id}>
            <Comment
              data={comment}
              tobeDeleteId={tobeDeleteId}
              foldedIds={foldedIds}
              showInnerRef
              isReply
            />
          </RepliesCommentsWrapper>
        )
      })}
      {repliesCount > entries.length && (
        <TogglerButton
          text={`展开更多回复 ( ${repliesCount - entries.length} )`}
        />
      )}
    </RepliesWrapper>
  )
}

export default memo(RepliesList)
