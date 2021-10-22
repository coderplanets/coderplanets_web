import { memo, FC } from 'react'

import type { TArticle } from '@/spec'

import { SpaceGrow } from '@/widgets/Common'
import Tabs from '@/widgets/Switcher/Tabs'
import Upvote from '@/widgets/Upvote'

import { Wrapper, TabWrapper } from '../styles/works_viewer/article_info'

type TProps = {
  article: TArticle
}

const tabItems = [
  {
    title: '简介',
    raw: 'story',
  },
  {
    title: '技术栈',
    raw: 'techstack',
  },
  {
    title: '更新',
    raw: 'update',
  },
  {
    title: '作者访谈',
    raw: 'interview',
  },
  {
    title: '社区',
    raw: 'community',
  },
]

const ArticleInfo: FC<TProps> = ({ article }) => {
  const { upvotesCount, meta } = article

  return (
    <Wrapper>
      <TabWrapper>
        <Tabs
          items={tabItems}
          size="small"
          activeKey="story"
          bottomSpace={10}
        />
      </TabWrapper>
      <SpaceGrow />
      <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
    </Wrapper>
  )
}

export default memo(ArticleInfo)
