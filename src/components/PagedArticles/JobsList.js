import React from 'react'
import { isEmpty } from 'ramda'

import { TYPE } from '@/constant'
import { Trans } from '@/utils'
import { JobItemLoading } from '@/components/Loading'

import JobItem from '@/components/JobItem'
import EmptyThread from '@/components/EmptyThread'
import EmptyLabel from '@/components/EmptyLabel'

const JobsList = ({ props }) => {
  const {
    entries,
    active,
    curView,
    community,
    thread,
    emptyPrefix,
    onPreview,
    onAuthorSelect,
    accountInfo,
  } = props

  switch (curView) {
    case TYPE.RESULT:
      return (
        <>
          {entries.map((entry) => (
            <JobItem
              key={entry.id}
              entry={entry}
              community={community}
              active={active}
              accountInfo={accountInfo}
              onPreview={() => onPreview(entry)}
              onAuthorSelect={onAuthorSelect}
            />
          ))}
        </>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <>
          {isEmpty(emptyPrefix) ? (
            <EmptyThread community={community} thread={thread} />
          ) : (
            <EmptyLabel
              text={`${emptyPrefix}${Trans(thread)}信息`}
              size="large"
            />
          )}
        </>
      )

    default:
      return <JobItemLoading num={4} />
  }
}

export default React.memo(JobsList)
