import { TYPE } from '@/constant'
import { ICON } from '@/config'
import type { TArticle } from '@/spec'

export const communityPageMenus = [
  {
    // '过滤',
    raw: TYPE.MM_TYPE.FILTER,
    icon: `${ICON}/filter.svg`,
  },
  {
    // '搜索',
    raw: TYPE.MM_TYPE.SEARCH,
    icon: `${ICON}/search.svg`,
  },
  {
    //  '发布',
    raw: TYPE.MM_TYPE.PUBLISH,
    icon: `${ICON}/edit/publish-pen.svg`,
  },
  {
    // '更多',
    raw: TYPE.MM_TYPE.MORE,
    icon: `${ICON}/more.svg`,
  },
]

type TArticleMenuItem = {
  title?: string
  desc?: string
  raw?: string
  icon?: string
  iconTheme?: string
}

const articlePageMenus = [
  {
    title: '喜欢',
    raw: TYPE.MM_TYPE.FILTER,
    icon: `${ICON}/article/heart.svg`,
  },
  {
    title: '讨论',
    raw: TYPE.MM_TYPE.SEARCH,
    icon: `${ICON}/article/comment-modeline.svg`,
  },
  {
    title: '收藏',
    raw: TYPE.MM_TYPE.PUBLISH,
    icon: `${ICON}/article/collect-modeline.svg`,
  },
  {
    title: '更多',
    raw: TYPE.MM_TYPE.MORE,
    icon: `${ICON}/more.svg`,
  },
]

export const getArticlePageMenus = (article: TArticle): TArticleMenuItem[] => {
  if (!article) return articlePageMenus

  const { upvotesCount, commentsCount, viewerHasUpvoted, viewerHasCollected } =
    article

  const articlePageMenusData = [...articlePageMenus] as TArticleMenuItem[]

  articlePageMenusData[0].desc = `${articlePageMenusData[0].title} ${upvotesCount}`
  articlePageMenusData[1].desc = `${articlePageMenusData[0].title} ${commentsCount}`

  if (viewerHasUpvoted) {
    articlePageMenusData[0].icon = `${ICON}/article/heart-solid.svg`
    articlePageMenusData[0].iconTheme = 'baseColor.red' // theme.key
  }

  if (viewerHasCollected) {
    articlePageMenusData[2].icon = `${ICON}/article/collect-solid-modeline.svg`
  }

  return articlePageMenusData
}
