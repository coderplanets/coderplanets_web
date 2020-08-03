import React from 'react'
import { isEmpty } from 'ramda'

import { TYPE } from '@/constant'
import { Trans } from '@/utils'

import { PostItemLoading } from '@/components/LoadingEffects'
import PostItem from '@/components/PostItem'
import EmptyThread from '@/components/EmptyThread'
import EmptyLabel from '@/components/EmptyLabel'

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
        <>
          {entries.map((entry) => (
            <PostItem
              key={entry.id}
              entry={entry}
              cover={cover}
              active={active}
              accountInfo={accountInfo}
              onUserSelect={onUserSelect}
              onAuthorSelect={onAuthorSelect}
              onPreview={() => onPreview(entry)}
            />
          ))}
        </>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <>
          {isEmpty(emptyPrefix) ? (
            <EmptyThread community={community} thread={thread} />
          ) : (
            <EmptyLabel
              text={`${emptyPrefix}${Trans(thread)}信息`}
              size="large"
            />
          )}
        </>
      )

    default:
      return <PostItemLoading num={4} />
  }
}

export default React.memo(PostsList)
