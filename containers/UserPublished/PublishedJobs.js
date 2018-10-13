import React from 'react'

import { JobItemLoading, JobItem } from '../../components'

import { uid, TYPE } from '../../utils'

const PublishedJobs = ({ entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <JobItem
              key={uid.gen()}
              entry={entry}
              active={active}
              onTitleSelect={console.log}
            />
          ))}
        </React.Fragment>
      )
    }
    default:
      return <JobItemLoading num={4} />
  }
}

export default PublishedJobs
