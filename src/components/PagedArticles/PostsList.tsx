import { FC, Fragment, memo } from 'react'

import type { TPost, TC11N } from '@/spec'
import PostItem from '@/components/PostItem'

type TProps = {
  entries: TPost[]
  c11n: TC11N
}

const PostsList: FC<TProps> = ({ entries, c11n }) => {
  return (
    <Fragment>
      {entries.map((entry) => (
        <PostItem key={entry.id} entry={entry} c11n={c11n} />
      ))}
    </Fragment>
  )
}

export default memo(PostsList)
