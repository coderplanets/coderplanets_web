import React from 'react'

import { PostItemLoading, PostItem } from '../../components'

import { uid, TYPE } from '../../utils'

const PublishedPosts = ({ entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <PostItem
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
      return <PostItemLoading num={4} />
  }
}

export default PublishedPosts
