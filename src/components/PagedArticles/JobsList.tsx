import { Fragment, memo } from 'react'

import JobItem from '@/components/JobItem'

const JobsList = ({ props }) => {
  const { entries, active, community, onAuthorSelect, accountInfo } = props

  return (
    <Fragment>
      {entries.map((entry) => (
        <JobItem
          key={entry.id}
          entry={entry}
          community={community}
          active={active}
          accountInfo={accountInfo}
          onAuthorSelect={onAuthorSelect}
        />
      ))}
    </Fragment>
  )
}

export default memo(JobsList)
