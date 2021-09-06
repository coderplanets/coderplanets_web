import { memo, FC } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'

import DotDivider from '@/components/DotDivider'
import Upvote from '@/components/Upvote'
import ArticleBaseStats from '@/components/ArticleBaseStats'
import Tabs from '@/components/Switcher/Tabs'

import {
  Wrapper,
  InfoWrapper,
  BottomWrapper,
  TabsWrapper,
  CollectWrapper,
  CollectIcon,
  CollectText,
  BaseWrapper,
  UpvoteWrapper,
} from '../styles/blog_viewer/article_info'

type TProps = {
  article: TArticle
}

const tabItems = [
  {
    title: '摘要',
    raw: 'digest',
  },
  {
    title: '关于作者',
    raw: 'author',
  },
  {
    title: '历史文章',
    raw: 'history',
  },
]

const ArticleInfo: FC<TProps> = ({ article }) => {
  const { upvotesCount, meta } = article

  return (
    <Wrapper>
      <InfoWrapper>
        <BaseWrapper>
          <ArticleBaseStats article={article} container="drawer" />
          <DotDivider space={10} />
          <CollectWrapper>
            <CollectIcon src={`${ICON}/article/collect-bookmark.svg`} />
            <CollectText>收藏</CollectText>
          </CollectWrapper>
        </BaseWrapper>
      </InfoWrapper>

      <BottomWrapper>
        <TabsWrapper>
          <Tabs
            items={tabItems}
            size="small"
            activeKey="digest"
            bottomSpace={10}
            articleColor
          />
        </TabsWrapper>
        <UpvoteWrapper>
          <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
        </UpvoteWrapper>
      </BottomWrapper>
    </Wrapper>
  )
}

export default memo(ArticleInfo)
