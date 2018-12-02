import React from 'react'
import R from 'ramda'

import { PostItemLoading } from '../LoadingEffects'
import PostItem from '../PostItem'

import EmptyThread from '../EmptyThread'
import EmptyLabel from '../EmptyLabel'

import { uid, TYPE, Trans } from '../../utils'

const PostsList = ({ props }) => {
  const {
    entries,
    cover,
    active,
    curView,
    community,
    thread,
    emptyPrefix,
    onTitleSelect,
    onUserSelect,
    accountInfo,
  } = props

  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <PostItem
              key={uid.gen()}
              entry={entry}
              cover={cover}
              active={active}
              accountInfo={accountInfo}
              onUserSelect={onUserSelect}
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
      return <PostItemLoading num={4} />
  }
}

export default PostsList
