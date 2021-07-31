import { C11N } from '@/constant'
import { WIDTH } from '@/utils/css/metric'

export const getMaxWidth = (type) => {
  switch (type) {
    case 'article': {
      return WIDTH.ARTICLE.PAGE
    }

    default: {
      return WIDTH.COMMUNITY.PAGE
    }
  }
}

export const getPadding = (type, layout) => {
  switch (type) {
    case 'article': {
      return '0 5vw;'
    }

    default: {
      return layout === C11N.HOLY_GRAIL ? '0 5vw;' : '0 6vw;'
    }
  }
}
