import { SITE_URL } from '@/config'

import type { TCommunity, TThread, TArticle, TUser } from '@/spec'
import { ROUTE, THREAD } from '@/constant'

import { plural } from './helper'

type TSEO = {
  url: string
  title: string
  description: string
  //
  datePublished?: string
  dateModified?: string
  authorName?: string
  images?: string[]
  // user
}

export const communitySEO = (community: TCommunity, thread: TThread): TSEO => {
  const { raw, title, desc } = community

  return {
    url: `${SITE_URL}/${raw}/${plural(thread)}`,
    title: raw === 'home' ? 'CoderPlanets' : `${title} | CP`,
    description: `${desc}`,
  }
}

export const exploreSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.EXPLORE}`,
    title: '社区索引 | CP',
    description: 'coderplanets 子社区索引',
  }
}

export const worksSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.WORKS}`,
    title: '作品集市 | coderplanets',
    description: '有趣有爱的作品分享',
  }
}

export const membershipSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.MEMBERSHIP}`,
    title: '升舱 | CP',
    description: '升级高级账户',
  }
}

export const meetupsSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.MEETUPS}`,
    title: '小聚 | CP',
    description: '来和志同道合的朋友一起聊聊',
  }
}

export const sponsorSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.SPONSOR}`,
    title: '赞助商 | CP',
    description: '赞助商',
  }
}

export const trendingSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.TRENDING}`,
    title: '热点趋势 | CP',
    description: '站内外热门讨论',
  }
}

export const drinkSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.HAVE_A_DRINK}`,
    title: '来一杯 | CP',
    description: 'IT冷知识，细节魔鬼，毒鸡汤',
  }
}

export const articleSEO = (
  thread: TThread = THREAD.POST,
  article: TArticle,
): TSEO => {
  const { id, title, insertedAt, updatedAt, author } = article

  return {
    url: `${SITE_URL}/${thread}/${id}`,
    title: `${title}`,
    datePublished: `${insertedAt}`,
    dateModified: `${updatedAt}`,
    authorName: `${author.nickname}`,
    description: `${title}`, // TODO:
    images: [],
  }
}

export const articlePublishSEO = (thread: TThread = THREAD.POST): TSEO => {
  switch (thread) {
    case THREAD.BLOG: {
      return {
        url: `${SITE_URL}/publish/blog`,
        title: '发布博客',
        description: '提交新博客到社区',
      }
    }

    case THREAD.JOB: {
      return {
        url: `${SITE_URL}/publish/job`,
        title: '发布招聘',
        description: ' 发布招人启事',
      }
    }

    case THREAD.WORKS: {
      return {
        url: `${SITE_URL}/publish/works`,
        title: '发布作品',
        description: '提交新作品到社区',
      }
    }

    default: {
      return {
        url: `${SITE_URL}/publish/post`,
        title: '发布帖子',
        description: '发布新帖子到社区',
      }
    }
  }
}

export const articleUpdateSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/todo`,
    title: '编辑帖子',
    description: '编辑帖子',
  }
}

export const userSEO = (user: TUser): TSEO => {
  return {
    title: `${user.nickname}`,
    url: `${SITE_URL}/${ROUTE.USER}/${user.login}`,
    description: user.bio,
  }
}

export const publishCommunitySEO = (): TSEO => {
  return {
    url: `${SITE_URL}/publish/community`,
    title: '建立新社区',
    description: '建立新社区',
  }
}
