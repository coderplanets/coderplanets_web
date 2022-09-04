/*
 *
 * DashboardDesc
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TPost } from '@/spec'
import { POST_LAYOUT } from '@/constant'

import { buildLog } from '@/utils/logger'

import { Divider, Br } from '@/widgets/Common'
import PostItem from '@/widgets/PostItem'

import { Title, SubTitle, Desc } from '../styles/post_list_example'

/* eslint-disable-next-line */
const log = buildLog('w:DashboardDesc:index')

type TProps = {
  articles: TPost[]
}

const PostListExample: FC<TProps> = ({ articles }) => {
  return (
    <Fragment>
      <Title>
        紧凑简洁
        <SubTitle>(默认)</SubTitle>
      </Title>
      <Desc>侧重展示标题与参与 Upvotes 的用户</Desc>
      <Divider />
      {articles.map((item) => (
        <PostItem
          key={item.id}
          article={item}
          c11n={{}}
          curCommunity={{ raw: 'demo' }}
        />
      ))}

      <Br bottom={80} />
      <Title>三段式</Title>
      <Desc>侧重展示发帖者与参与讨论的用户</Desc>
      <Divider />

      {articles.map((item) => (
        <PostItem
          key={item.id}
          article={item}
          c11n={{}}
          curCommunity={{ raw: 'demo' }}
          layout={POST_LAYOUT.COMMENT_FIRST}
        />
      ))}
    </Fragment>
  )
}

export default memo(PostListExample)
