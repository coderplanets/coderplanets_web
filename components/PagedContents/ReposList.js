import React from 'react'
import R from 'ramda'

import { TYPE } from '@constant'
import { Trans } from '@utils'

import { RepoItemLoading } from '@components/LoadingEffects'
import RepoItem from '@components/RepoItem'
import EmptyThread from '@components/EmptyThread'
import EmptyLabel from '@components/EmptyLabel'

const ReposList = ({ props }) => {
  const {
    entries,
    active,
    curView,
    community,
    thread,
    emptyPrefix,
    onPreview,
    accountInfo,
  } = props

  switch (curView) {
    case TYPE.RESULT:
      return (
        <React.Fragment>
          {entries.map(entry => (
            <RepoItem
              key={entry.id}
              entry={entry}
              active={active}
              accountInfo={accountInfo}
              onPreview={onPreview.bind(this, entry)}
            />
          ))}
        </React.Fragment>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <React.Fragment>
          {R.isEmpty(emptyPrefix) ? (
            <EmptyThread community={community} thread={thread} />
          ) : (
            <EmptyLabel
              text={`${emptyPrefix}${Trans(thread)}信息`}
              size="large"
            />
          )}
        </React.Fragment>
      )

    default:
      return <RepoItemLoading num={4} />
  }
}

export default ReposList
