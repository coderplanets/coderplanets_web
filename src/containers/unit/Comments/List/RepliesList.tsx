import { FC, memo } from 'react'

import type { TComment, TID } from '@/spec'

import type { TRepliesState } from '../spec'
import TogglerButton from './TogglerButton'
import Comment from '../Comment'

import { RepliesWrapper, RepliesCommentsWrapper } from '../styles/list/list'
import { loadCommentReplies } from '../logic'

type TProps = {
  parentId: TID
  entries: TComment[]
  repliesCount: number
  repliesState: TRepliesState
  foldedIds: TID[]
}

const RepliesList: FC<TProps> = ({
  parentId,
  entries,
  repliesCount,
  repliesState,
  foldedIds,
}) => {
  const loading =
    parentId === repliesState.repliesParentId && repliesState.repliesLoading

  return (
    <RepliesWrapper>
      {entries.map((comment) => {
        return (
          <RepliesCommentsWrapper key={comment.id}>
            <Comment
              data={comment}
              foldedIds={foldedIds}
              showInnerRef
              isReply
            />
          </RepliesCommentsWrapper>
        )
      })}
      {repliesCount > entries.length && (
        <TogglerButton
          loading={loading}
          text={`更多回复 ( ${repliesCount - entries.length} )`}
          onClick={() => loadCommentReplies(parentId)}
        />
      )}
    </RepliesWrapper>
  )
}

export default memo(RepliesList)
