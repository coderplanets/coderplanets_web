import { METRIC } from '@/constant'

import PostLayout from './PostLayout'
import BlogLayout from './BlogLayout'
import WorksLayout from './WorksLayout'

const ArticleContent = (props) => {
  const { metric } = props

  switch (metric) {
    case METRIC.BLOG_ARTICLE: {
      return <BlogLayout {...props} />
    }
    case METRIC.WORKS_ARTICLE: {
      return <WorksLayout {...props} />
    }
    default: {
      return <PostLayout {...props} />
    }
  }
}

export default ArticleContent
