import { memo, FC } from 'react'

import type { TArticle } from '@/spec'
import { ICON } from '@/config'

import DotDivider from '@/widgets/DotDivider'
import Upvote from '@/widgets/Upvote'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import Tabs from '@/widgets/Switcher/Tabs'

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
import { blogTabOnChange } from '../logic'

const tabItems = [
  {
    title: '摘要',
    raw: 'digest',
  },
  {
    title: '历史文章',
    raw: 'feeds',
  },
  {
    title: '博客作者',
    raw: 'author',
  },
]

type TProps = {
  article: TArticle
  tab: string
}

const ArticleInfo: FC<TProps> = ({ article, tab }) => {
  const { upvotesCount, meta } = article
  const activeTab = !!tab ? tab : 'digest'

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
            activeKey={activeTab}
            bottomSpace={10}
            onChange={blogTabOnChange}
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
