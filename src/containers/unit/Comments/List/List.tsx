import { FC, Fragment, memo } from 'react'

import type { TAccount, TComment, TID } from '@/spec'
import Comment from '../Comment'

import RepliesList from './RepliesList'
import DateDivider from './DateDivider'

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
        <Fragment key={c.id}>
          <Comment
            data={c}
            tobeDeleteId={tobeDeleteId}
            accountInfo={accountInfo}
            hasReplies={c.id === '377'}
            foldedIds={foldedIds}
          />
          {c.id === '354' && <DateDivider text="一个月后" />}
          {c.id === '377' && (
            <RepliesList
              entries={entries}
              accountInfo={accountInfo}
              tobeDeleteId={tobeDeleteId}
            />
          )}
        </Fragment>
      ))}
    </Fragment>
  )
}

export default memo(List)
