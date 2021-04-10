import React from 'react'

import type { TAccount, TComment } from '@/spec'
import Comment from '../Comment'

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
        />
        {(index === 1 || index === 3) && <DateDivider text="一个月后" />}
      </React.Fragment>
    ))}
  </React.Fragment>
)

export default React.memo(List)
