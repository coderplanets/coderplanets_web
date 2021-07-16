import { memo, FC } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'

import { Space, SpaceGrow } from '@/components/Common'
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

const ArticleInfo: FC<TProps> = ({ article }) => {
  return (
    <Wrapper>
      <TabWrapper>
        <Tab $active>概览</Tab>
        <Space right={20} />
        <Tab>技术栈</Tab>
        <Space right={20} />
        <Tab>团队</Tab>
        <Space right={20} />
        <Tab>
          社区 <TabIcon src={`${ICON}/shape/link-outside.svg`} />
        </Tab>
      </TabWrapper>
      <SpaceGrow />
      <UpvoteWrapper>
        <Upvote />
      </UpvoteWrapper>
    </Wrapper>
  )
}

export default memo(ArticleInfo)
