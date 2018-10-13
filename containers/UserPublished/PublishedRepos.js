import React from 'react'

import { RepoItemLoading, RepoItem } from '../../components'

import { uid, TYPE } from '../../utils'

const PublishedRepos = ({ entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <RepoItem
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
      return <RepoItemLoading num={4} />
  }
}

export default PublishedRepos
