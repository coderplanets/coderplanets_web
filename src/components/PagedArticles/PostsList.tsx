import { FC, Fragment, memo } from 'react'

import type { TPost, TID } from '@/spec'
import PostItem from '@/components/PostItem'

type TProps = {
  entries: TPost[]
  activeId: TID
}

const PostsList: FC<TProps> = ({ entries, activeId }) => {
  return (
    <Fragment>
      {entries.map((entry) => (
        <PostItem key={entry.id} entry={entry} activeId={activeId} />
      ))}
    </Fragment>
  )
}

export default memo(PostsList)
