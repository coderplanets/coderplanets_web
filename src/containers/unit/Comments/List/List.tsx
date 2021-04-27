import React, { FC } from 'react'

import type { TAccount, TComment } from '@/spec'
import Comment from '../Comment'

import RepliesList from './RepliesList'
import DateDivider from './DateDivider'

type TProps = {
  entries: TComment[]
  tobeDeleteId: string
  accountInfo: TAccount
}

const List: FC<TProps> = ({ entries, tobeDeleteId, accountInfo }) => {
  return (
    <React.Fragment>
      {entries.map((c) => (
        <React.Fragment key={c.id}>
          <Comment
            data={c}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            hasReplies={c.id === '377'}
          />
          {c.id === '354' && <DateDivider text="一个月后" />}
          {c.id === '377' && (
            <RepliesList
              entries={entries}
              accountInfo={accountInfo}
              tobeDeleteId={tobeDeleteId}
            />
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default React.memo(List)
