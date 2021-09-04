import { memo, FC } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'

import { Space, SpaceGrow } from '@/components/Common'
import Tabs from '@/components/Switcher/Tabs'
import Upvote from '@/components/Upvote'

import {
  Wrapper,
  TabWrapper,
  Tab,
  TabIcon,
  UpvoteWrapper,
} from '../styles/works_viewer/article_info'

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
  return (
    <Wrapper>
      <TabWrapper>
        <Tabs
          items={tabItems}
          size="small"
          activeKey="story"
          bottomSpace={10}
          articleColor
        />
      </TabWrapper>
      <SpaceGrow />
      <UpvoteWrapper>
        <Upvote />
      </UpvoteWrapper>
    </Wrapper>
  )
}

export default memo(ArticleInfo)
