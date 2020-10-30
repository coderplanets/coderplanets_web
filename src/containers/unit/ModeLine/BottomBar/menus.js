import { TYPE } from '@/constant'
import { ICON } from '@/config'

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

const articlePageMenus = [
  {
    title: '喜欢',
    raw: TYPE.MM_TYPE.FILTER,
    icon: `${ICON}/article/heart.svg`,
  },
  {
    title: '评论',
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

export const getArticlePageMenus = (article) => {
  if (!article) return articlePageMenus

  const articlePageMenusData = [...articlePageMenus]
  articlePageMenusData[0].desc = `${articlePageMenusData[0].title} ${article.starredCount}`
  articlePageMenusData[1].desc = `${articlePageMenusData[0].title} ${article.commentsCount}`

  return articlePageMenusData
}
