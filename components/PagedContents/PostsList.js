import React from 'react'
import R from 'ramda'

import { TYPE, Trans } from '@utils'
import { PostItemLoading } from '@components/LoadingEffects'
import PostItem from '@components/PostItem'

import EmptyThread from '@components/EmptyThread'
import EmptyLabel from '@components/EmptyLabel'

const PostsList = ({ props }) => {
  const {
    entries,
    cover,
    active,
    curView,
    community,
    thread,
    emptyPrefix,
    onPreview,
    onUserSelect,
    onAuthorSelect,
    accountInfo,
  } = props

  switch (curView) {
    case TYPE.RESULT:
      return (
        <React.Fragment>
          {entries.map(entry => (
            <PostItem
              key={entry.id}
              entry={entry}
              cover={cover}
              active={active}
              accountInfo={accountInfo}
              onUserSelect={onUserSelect}
              onAuthorSelect={onAuthorSelect}
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
      return <PostItemLoading num={4} />
  }
}

export default PostsList
