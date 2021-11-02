import type { TWorksTab, TBlogTab } from '@/spec'

export const WORKS_TAB = {
  STORY: 'story' as TWorksTab,
  BASIC: 'basic' as TWorksTab,
  TECHSTACKS: 'techstacks' as TWorksTab,
  COMMUNITY: 'community' as TWorksTab,
  MILESTONE: 'milestone' as TWorksTab,
  INTERVIEW: 'interview' as TWorksTab,
}

export const WORKS_TAB_ITEMS = [
  {
    title: '简介',
    raw: WORKS_TAB.STORY,
  },
  {
    title: '概况',
    raw: WORKS_TAB.BASIC,
  },
  {
    title: '技术栈',
    raw: WORKS_TAB.TECHSTACKS,
  },
  // {
  //   title: '作者访谈',
  //   raw: 'interview',
  // },
  // {
  //   title: '更新',
  //   raw: WORKS_TAB.MILESTONE,
  // },
  // {
  //   title: '作者访谈',
  //   raw: WORKS_TAB.INTERVIEW,
  // },
  {
    title: '社区',
    raw: WORKS_TAB.COMMUNITY,
  },
]

export const BLOG_TAB = {
  DIGEST: 'digest' as TBlogTab,
  AUTHOR: 'author' as TBlogTab,
  FEEDS: 'feeds' as TBlogTab,
}

export const BLOG_TAB_ITEMS = [
  {
    title: '摘要',
    raw: BLOG_TAB.DIGEST,
  },
  {
    title: '历史文章',
    raw: BLOG_TAB.FEEDS,
  },
  {
    title: '博客作者',
    raw: BLOG_TAB.AUTHOR,
  },
]
