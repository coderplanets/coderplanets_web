import React from 'react'
import R from 'ramda'

import { JobItemLoading } from '../LoadingEffects'
import JobItem from '../JobItem'

import EmptyThread from '../EmptyThread'
import EmptyLabel from '../EmptyLabel'

import { uid, TYPE, Trans } from '../../utils'

const JobsList = ({
  entries,
  curView,
  community,
  thread,
  emptyPrefix,
  active,
  onTitleSelect,
}) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <JobItem
              key={uid.gen()}
              entry={entry}
              active={active}
              onTitleSelect={onTitleSelect.bind(this, entry)}
            />
          ))}
        </React.Fragment>
      )
    }
    case TYPE.RESULT_EMPTY: {
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
    }
    default:
      return <JobItemLoading num={4} />
  }
}

export default JobsList
