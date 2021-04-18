import React from 'react'

import type { TAccount, TComment } from '@/spec'
import Comment from '../Comment'

import RepliesList from './RepliesList'
import DateDivider from './DateDivider'

type TProps = {
  entries: TComment[]
  tobeDeleteId: string
  accountInfo: TAccount
}

const List: React.FC<TProps> = ({ entries, tobeDeleteId, accountInfo }) => (
  <React.Fragment>
    {entries.map((c, index) => (
      <React.Fragment key={c.id}>
        <Comment
          data={c}
          tobeDeleteId={tobeDeleteId}
          accountInfo={accountInfo}
          hasReplies={c.id === '377'}
        />
        {(index === 1 || index === 3) && <DateDivider text="一个月后" />}
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

export default React.memo(List)
