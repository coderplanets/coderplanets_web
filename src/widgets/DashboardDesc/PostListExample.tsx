/*
 *
 * DashboardDesc
 *
 */

import { FC, memo } from 'react'

import { POST_LAYOUT, ARTICLE_CAT, ARTICLE_STATE } from '@/constant'

import { buildLog } from '@/utils/logger'
import { mockUsers } from '@/utils/mock'

import NoticeBar from '@/widgets/NoticeBar'
import PostItem from '@/widgets/PostItem'

import { Wrapper, Title, Desc, DividerLine } from './styles/post_list_example'

/* eslint-disable-next-line */
const log = buildLog('c:DashboardDesc:index')

const demoPost = {
  id: '0',
  title: '这是一篇测试帖子',
  digest: '这是玉兰信息',
  views: 200,
  upvotesCount: 10,
  commentsCount: 15,
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
  return (
    <Wrapper>
      <NoticeBar
        type="info"
        content="列表中的帖子仅为展示布局参考，非真实存在。"
        bottom={40}
      />

      <Title>布局 A</Title>
      <Desc>侧重展示标题与参与 Upvotes 的用户</Desc>
      <PostItem article={demoPost} c11n={{}} curCommunity={{ raw: 'demo' }} />
      <PostItem article={demoPost} c11n={{}} curCommunity={{ raw: 'demo' }} />
      <PostItem article={demoPost} c11n={{}} curCommunity={{ raw: 'demo' }} />

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
        article={demoPost}
        c11n={{}}
        curCommunity={{ raw: 'demo' }}
        layout={POST_LAYOUT.COMMENT_FIRST}
      />
      <PostItem
        article={demoPost}
        c11n={{}}
        curCommunity={{ raw: 'demo' }}
        layout={POST_LAYOUT.COMMENT_FIRST}
      />
    </Wrapper>
  )
}

export default memo(PostListExample)
