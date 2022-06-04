/*
 *
 * DashboardDesc
 *
 */

import { FC, memo } from 'react'

import { POST_LAYOUT, ARTICLE_CAT, ARTICLE_STATE } from '@/constant'

import { buildLog } from '@/utils/logger'
import { mockUsers } from '@/utils/mock'
import { getRandomInt } from '@/utils/helper'

import NoticeBar from '@/widgets/NoticeBar'
import PostItem from '@/widgets/PostItem'

import { Wrapper, Title, Desc, DividerLine } from './styles/post_list_example'

/* eslint-disable-next-line */
const log = buildLog('c:DashboardDesc:index')

const demoPost = {
  id: '0',
  title: '帖子是否可以像评论一样开放表情功能?',
  digest:
    '帖子以及更新日志等文章类除了常见的 Upvote 以外，是否可以支持表情功能，像目前评论一样，但是具体表情有区别',
  views: getRandomInt(50, 399),
  upvotesCount: getRandomInt(50, 99),
  commentsCount: getRandomInt(50, 99),
  articleTags: [],
  category: ARTICLE_CAT.FEATURE,
  state: ARTICLE_STATE.TODO,
  originalCommunity: {
    raw: 'demo',
  },
  commentsParticipants: mockUsers(3),

  meta: {
    latestUpvotedUsers: mockUsers(3),
  },
  author: mockUsers(1)[0],
}

const PostListExample: FC = () => {
  const article1 = {
    ...demoPost,
    title: '看板板块在手机端显示异常',
    digest:
      '手机端帖子标题换行有错位问题，看起来不够直观，建议参考电商常见的搜索热榜等展示形式。',
    category: ARTICLE_CAT.BUG,
    state: ARTICLE_STATE.WIP,
    views: getRandomInt(50, 399),
    upvotesCount: getRandomInt(50, 99),
    commentsCount: getRandomInt(50, 99),
  }

  const article2 = {
    ...demoPost,
    title: '用户页能否看到发帖历史？',
    digest: '用户主页能否展示在社区内的历史发帖或评论，提高用户参与的热情？',
    category: ARTICLE_CAT.QUESTION,
    state: ARTICLE_STATE.RESOLVE,
    views: getRandomInt(50, 399),
    upvotesCount: getRandomInt(50, 99),
    commentsCount: getRandomInt(50, 99),
  }

  return (
    <Wrapper>
      <NoticeBar
        type="info"
        content="列表中的帖子仅为展示布局参考，非真实存在。"
        bottom={40}
      />

      <Title>布局 A</Title>
      <Desc>默认布局，侧重展示标题与参与 Upvotes 的用户</Desc>
      <PostItem article={demoPost} c11n={{}} curCommunity={{ raw: 'demo' }} />
      <PostItem article={article1} c11n={{}} curCommunity={{ raw: 'demo' }} />
      <PostItem article={article2} c11n={{}} curCommunity={{ raw: 'demo' }} />

      <DividerLine />
      <Title>布局 B</Title>
      <Desc>侧重展示发帖者与参与讨论的用户</Desc>

      <PostItem
        article={demoPost}
        c11n={{}}
        curCommunity={{ raw: 'demo' }}
        layout={POST_LAYOUT.COMMENT_FIRST}
      />
      <PostItem
        article={article1}
        c11n={{}}
        curCommunity={{ raw: 'demo' }}
        layout={POST_LAYOUT.COMMENT_FIRST}
      />
      <PostItem
        article={article2}
        c11n={{}}
        curCommunity={{ raw: 'demo' }}
        layout={POST_LAYOUT.COMMENT_FIRST}
      />
    </Wrapper>
  )
}

export default memo(PostListExample)
