import { cs } from '@/utils'

export const getMaxWidth = (type) => {
  switch (type) {
    case 'article': {
      return cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH
    }

    default: {
      return cs.MAX_CONTENT_WIDTH
    }
  }
}

export const getPadding = (type) => {
  switch (type) {
    case 'article': {
      return '0 5vw'
    }

    default: {
      return '0 8vw'
    }
  }
}
