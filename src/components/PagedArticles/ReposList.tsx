import { Fragment, memo } from 'react'

import RepoItem from '@/components/RepoItem'

const ReposList = ({ props }) => {
  const { entries, active, onPreview, accountInfo } = props

  return (
    <Fragment>
      {entries.map((entry) => (
        <RepoItem
          key={entry.id}
          entry={entry}
          active={active}
          accountInfo={accountInfo}
          onPreview={() => onPreview(entry)}
        />
      ))}
    </Fragment>
  )
}

export default memo(ReposList)
