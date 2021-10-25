import Router from 'next/router'

import type { TArticle, TBlog } from '@/spec'
import { EVENT, THREAD } from '@/constant'

import { moveToCommunity, mirrorToCommunity, setTag } from '@/utils/helper'

export const hendleMenu = (key: string, article: TArticle): void => {
  switch (key) {
    case EVENT.MOVE_TO_COMMUNITY: {
      return moveToCommunity()
    }
    case EVENT.MIRROR_TO_COMMUNITY: {
      return mirrorToCommunity()
    }
    case EVENT.SET_TAG: {
      return setTag()
    }
    case 'edit': {
      handleEdit(article)
      // eslint-disable-next-line no-useless-return
      return
    }
    default: {
      // eslint-disable-next-line no-useless-return
      return
    }
  }
}

export const holder = 1

const handleEdit = (article: TArticle): void => {
  const thread = article.meta.thread.toLowerCase()
  if (thread === THREAD.BLOG) {
    const blog = article as TBlog
    const rss = encodeURI(blog.rss)

    Router.push(`/update/rss?link=${rss}`)
    return
  }

  Router.push(`/update/${thread}/${article.id}`)
}
