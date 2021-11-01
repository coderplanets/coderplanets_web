import { memo, FC } from 'react'

import type { TArticle, TWorksTab } from '@/spec'
import { WORKS_TAB } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'
import Tabs from '@/widgets/Switcher/Tabs'
import Upvote from '@/widgets/Upvote'

import { Wrapper, TabWrapper } from '../styles/works_viewer/article_info'
import { worksTabOnChange } from '../logic'

type TProps = {
  article: TArticle
  tab: TWorksTab
}

const tabItems = [
  {
    title: '简介',
    raw: WORKS_TAB.STORY,
  },
  {
    title: '项目概况',
    raw: WORKS_TAB.BASIC,
  },
  {
    title: '技术栈',
    raw: WORKS_TAB.TECHSTACKS,
  },
  // {
  //   title: '作者访谈',
  //   raw: 'interview',
  // },
  {
    title: '社区',
    raw: WORKS_TAB.COMMUNITY,
  },
]

const ArticleInfo: FC<TProps> = ({ article, tab }) => {
  const { upvotesCount, meta } = article
  // eslint-disable-next-line no-extra-boolean-cast
  const activeTab = !!tab ? tab : 'story'

  return (
    <Wrapper>
      <TabWrapper>
        <Tabs
          items={tabItems}
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
