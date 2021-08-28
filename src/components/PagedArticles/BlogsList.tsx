import { FC, Fragment, memo } from 'react'

import type { TBlog, TID, TC11N } from '@/spec'
import BlogItem from '@/components/BlogItem'

type TProps = {
  entries: TBlog[]
  activeId: TID
  c11n: TC11N
}

const BlogsList: FC<TProps> = ({ entries, activeId, c11n }) => {
  return (
    <Fragment>
      {entries.map((entry) => (
        <BlogItem
          key={entry.id}
          entry={entry}
          activeId={activeId}
          c11n={c11n}
        />
      ))}
    </Fragment>
  )
}

export default memo(BlogsList)
