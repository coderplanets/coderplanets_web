import { FC, memo } from 'react'

import type { TComment, TID } from '@/spec'

import type { TRepliesState, TAPIMode } from '../spec'
import TogglerButton from './TogglerButton'
import Comment from '../Comment'

import {
  Wrapper,
  CountHint,
  SlashSign,
  CountNum,
  ListWrapper,
} from '../styles/list/replies_list'

import { loadCommentReplies } from '../logic'

type TProps = {
  parentId: TID
  apiMode: TAPIMode
  entries: TComment[]
  repliesCount: number
  repliesState: TRepliesState
  foldedIds: TID[]
}

const RepliesList: FC<TProps> = ({
  parentId,
  apiMode,
  entries,
  repliesCount,
  repliesState,
  foldedIds,
}) => {
  const loading =
    parentId === repliesState.repliesParentId && repliesState.repliesLoading

  return (
    <Wrapper>
      {repliesCount > 0 && (
        <CountHint>
          <SlashSign>&#47;&#47;</SlashSign>
          <CountNum>{repliesCount}</CountNum> 条回复:
        </CountHint>
      )}
      {entries.map((comment) => {
        return (
          <ListWrapper key={comment.id}>
            <Comment
              apiMode={apiMode}
              data={comment}
              foldedIds={foldedIds}
              showInnerRef
              isReply
            />
          </ListWrapper>
        )
      })}
      {repliesCount > entries.length && (
        <TogglerButton
          loading={loading}
          text={`更多回复 ( ${repliesCount - entries.length} )`}
          onClick={() => loadCommentReplies(parentId)}
        />
      )}
    </Wrapper>
  )
}

export default memo(RepliesList)
