import { Fragment, memo } from 'react'

import RepoItem from '@/components/RepoItem'

const ReposList = ({ props }) => {
  const { entries, active, accountInfo } = props

  return (
    <Fragment>
      {entries.map((entry) => (
        <RepoItem
          key={entry.id}
          entry={entry}
          active={active}
          accountInfo={accountInfo}
        />
      ))}
    </Fragment>
  )
}

export default memo(ReposList)
