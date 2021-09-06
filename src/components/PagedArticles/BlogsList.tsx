import { FC, Fragment, memo } from 'react'

import type { TBlog, TC11N } from '@/spec'
import BlogItem from '@/components/BlogItem'

type TProps = {
  entries: TBlog[]
  c11n: TC11N
}

const BlogsList: FC<TProps> = ({ entries, c11n }) => {
  return (
    <Fragment>
      {entries.map((entry) => (
        <BlogItem key={entry.id} entry={entry} c11n={c11n} />
      ))}
    </Fragment>
  )
}

export default memo(BlogsList)
