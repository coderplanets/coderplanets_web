import { METRIC } from '@/constant'

import PostLayout from './PostLayout'
import BlogLayout from './BlogLayout'

const ArticleContent = (props) => {
  const { metric } = props

  switch (metric) {
    case METRIC.BLOG_ARTICLE: {
      return <BlogLayout {...props} />
    }
    default: {
      return <PostLayout {...props} />
    }
  }
}

export default ArticleContent
