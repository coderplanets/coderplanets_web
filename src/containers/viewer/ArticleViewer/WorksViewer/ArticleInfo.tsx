import { memo, FC } from 'react'

import type { TArticle, TWorksTab } from '@/spec'
import { WORKS_TAB_ITEMS } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'
import Tabs from '@/widgets/Switcher/Tabs'
import Upvote from '@/widgets/Upvote'

import { Wrapper, TabWrapper } from '../styles/works_viewer/article_info'
import { worksTabOnChange } from '../logic'

type TProps = {
  article: TArticle
  tab: TWorksTab
}

const ArticleInfo: FC<TProps> = ({ article, tab }) => {
  const { upvotesCount, meta } = article
  // eslint-disable-next-line no-extra-boolean-cast
  const activeTab = !!tab ? tab : 'story'

  return (
    <Wrapper>
      <TabWrapper>
        <Tabs
          items={WORKS_TAB_ITEMS}
          size="small"
          activeKey={activeTab}
          bottomSpace={10}
          onChange={(tab) => worksTabOnChange(tab as TWorksTab)}
        />
      </TabWrapper>
      <SpaceGrow />
      <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
    </Wrapper>
  )
}

export default memo(ArticleInfo)
