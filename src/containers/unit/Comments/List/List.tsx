import { FC, Fragment, memo } from 'react'
import { includes } from 'ramda'

import type { TComment, TID } from '@/spec'
import Comment from '../Comment'

import RepliesList from './RepliesList'
import DateDivider from './DateDivider'

import { MODE } from '../constant'
import type { TMode } from '../spec'
import { Wrapper, IndentLine } from '../styles/list/list'
import { foldComment } from '../logic'

// const compareDate = () => {
// }

type TProps = {
  mode: TMode
  entries: TComment[]
  tobeDeleteId: string
  foldedIds: TID[]
}

const List: FC<TProps> = ({ mode, entries, tobeDeleteId, foldedIds }) => {
  return (
    <Fragment>
      {entries.map((comment, index) => (
        <Wrapper key={comment.id}>
          {/* <div style={{ color: 'wheat' }}>{index}</div> */}
          <Comment
            data={comment}
            tobeDeleteId={tobeDeleteId}
            hasReplies={comment.repliesCount > 0}
            foldedIds={foldedIds}
          />
          {mode === MODE.TIMELINE && index === 0 && (
            <DateDivider text="一个月后(timeline mode only)" />
          )}
          {mode === MODE.REPLIES &&
            comment.replies?.length > 0 &&
            !includes(comment.id, foldedIds) && (
              <RepliesList
                entries={comment.replies}
                repliesCount={comment.repliesCount}
                tobeDeleteId={tobeDeleteId}
                foldedIds={foldedIds}
              />
            )}
          <IndentLine
            hasReplies={comment.repliesCount > 0}
            onClick={() => foldComment(comment.id)}
            isFold={includes(comment.id, foldedIds)}
          />
        </Wrapper>
      ))}
    </Fragment>
  )
}

export default memo(List)
