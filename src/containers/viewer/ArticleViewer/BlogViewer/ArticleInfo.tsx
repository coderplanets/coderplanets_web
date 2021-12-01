import { memo, FC } from 'react'

import type { TArticle } from '@/spec'
import { BLOG_TAB, BLOG_TAB_ITEMS } from '@/constant'

import { addCollection } from '@/utils/helper'
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

type TProps = {
  article: TArticle
  tab: string
}

const ArticleInfo: FC<TProps> = ({ article, tab }) => {
  const { upvotesCount, meta } = article
  const activeTab = !!tab ? tab : BLOG_TAB.DIGEST

  return (
    <Wrapper>
      <InfoWrapper>
        <BaseWrapper>
          <ArticleBaseStats article={article} container="drawer" />
          <DotDivider space={10} />
          <CollectWrapper onClick={() => addCollection()}>
            <CollectIcon />
            <CollectText>收藏</CollectText>
          </CollectWrapper>
        </BaseWrapper>
      </InfoWrapper>

      <BottomWrapper>
        <TabsWrapper>
          <Tabs
            items={BLOG_TAB_ITEMS}
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
