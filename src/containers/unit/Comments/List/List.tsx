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
  return (
    <Fragment>
      {entries.map((c) => (
        <Wrapper key={c.id}>
          <Comment
            data={c}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            hasReplies={c.id === '108'}
            foldedIds={foldedIds}
          />
          {/* <DateDivider text={c.id} /> */}
          {c.id === '354' && <DateDivider text="一个月后" />}
          {c.id === '108' && (
            <RepliesList
              entries={entries}
              accountInfo={accountInfo}
              tobeDeleteId={tobeDeleteId}
              foldedIds={foldedIds}
            />
          )}
          <IndentLine
            hasReplies={c.id === '108'}
            onClick={() => foldComment(c.id)}
          />
        </Wrapper>
      ))}
    </Fragment>
  )
}

export default memo(List)
