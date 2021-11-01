/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TWorks, TMetric } from '@/spec'
import { METRIC, UPVOTE_LAYOUT, WORKS_TAB } from '@/constant'
import { buildLog } from '@/utils/logger'

import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import IconButton from '@/widgets/Buttons/IconButton'
import Upvote from '@/widgets/Upvote'
import Tabs from '@/widgets/Switcher/Tabs'
import ArticleMenu from '@/widgets/ArticleMenu'
import { SpaceGrow } from '@/widgets/Common'

import {
  Main,
  WorksWrapper,
  Cover,
  Intro,
  Title,
  WorkName,
  Desc,
  Other,
  Actions,
  BottomInfo,
  TabsWrapper,
  SubWrapper,
} from '../styles/desktop_view/works_layout'
import { worksTabOnChange } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TWorks
  metric?: TMetric
  tab: string
}

const tabItems = [
  {
    title: '简介',
    raw: WORKS_TAB.STORY,
  },
  {
    title: '技术栈',
    raw: WORKS_TAB.TECHSTACKS,
  },
  {
    title: '更新',
    raw: WORKS_TAB.MILESTONE,
  },
  {
    title: '作者访谈',
    raw: WORKS_TAB.INTERVIEW,
  },
  {
    title: '社区',
    raw: WORKS_TAB.COMMUNITY,
  },
]

const WorksLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article, tab }) => {
  const { meta, title, desc, upvotesCount } = article

  const activeTab = !!tab ? tab : 'story'
  return (
    <Fragment>
      <Main metric={metric}>
        <WorksWrapper>
          <Cover src="https://avatars.githubusercontent.com/u/2041385?s=64&v=4" />
          <Intro>
            <Title>
              <WorkName>{title}</WorkName>
              <SpaceGrow />
              <ArticleMenu article={article} />
            </Title>
            <Desc>{desc}</Desc>
            <Other>
              <ArticleBaseStats article={article} />
              <Actions>
                <IconButton path="article/collect-bookmark.svg" size={18} />
                <IconButton path="article/share-solid.svg" size={18} />
              </Actions>
            </Other>
          </Intro>
        </WorksWrapper>
        <BottomInfo>
          <TabsWrapper>
            <Tabs
              items={tabItems}
              size="small"
              activeKey={activeTab}
              bottomSpace={4}
              onChange={worksTabOnChange}
            />
          </TabsWrapper>
        </BottomInfo>
      </Main>
      <SubWrapper metric={metric}>
        <Upvote
          count={upvotesCount}
          avatarList={meta.latestUpvotedUsers}
          type={UPVOTE_LAYOUT.WORKS_ARTICLE}
        />
      </SubWrapper>
    </Fragment>
  )
}

export default memo(WorksLayout)
