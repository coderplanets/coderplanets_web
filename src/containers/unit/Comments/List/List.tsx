import { FC, Fragment, memo } from 'react'

import type { TAccount, TComment, TID } from '@/spec'
import Comment from '../Comment'

import RepliesList from './RepliesList'
import DateDivider from './DateDivider'

import { Wrapper, IndentLine } from '../styles/list/list'
import { foldComment } from '../logic'

type TProps = {
  entries: TComment[]
  tobeDeleteId: string
  accountInfo: TAccount
  foldedIds: TID[]
}

const List: FC<TProps> = ({
  entries,
  tobeDeleteId,
  accountInfo,
  foldedIds,
}) => {
  console.log('comment list entries -> ', entries)
  return (
    <Fragment>
      {entries.map((comment) => (
        <Wrapper key={comment.id}>
          <Comment
            data={comment}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            hasReplies={comment.repliesCount > 0}
            foldedIds={foldedIds}
          />
          {/* <DateDivider text={c.id} /> */}
          {comment.id === '354' && <DateDivider text="一个月后" />}
          {comment.replies?.length > 0 && (
            <RepliesList
              entries={comment.replies}
              repliesCount={comment.repliesCount}
              accountInfo={accountInfo}
              tobeDeleteId={tobeDeleteId}
              foldedIds={foldedIds}
            />
          )}
          <IndentLine
            hasReplies={comment.repliesCount > 0}
            onClick={() => foldComment(comment.id)}
          />
        </Wrapper>
      ))}
    </Fragment>
  )
}

export default memo(List)
