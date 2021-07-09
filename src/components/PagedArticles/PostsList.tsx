import { Fragment, memo } from 'react'

import PostItem from '@/components/PostItem'

const PostsList = ({ props }) => {
  const { entries, activeArticleId } = props

  return (
    <Fragment>
      {entries.map((entry) => (
        <PostItem
          key={entry.id}
          entry={entry}
          activeArticleId={activeArticleId}
        />
      ))}
    </Fragment>
  )
}

export default memo(PostsList)
