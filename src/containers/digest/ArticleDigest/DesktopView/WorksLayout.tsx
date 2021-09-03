/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TPost, TMetric } from '@/spec'
import { METRIC, UPVOTE_LAYOUT } from '@/constant'
import { buildLog } from '@/utils/logger'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import IconButton from '@/components/Buttons/IconButton'
import Upvote from '@/components/Upvote'
import Tabs from '@/components/Switcher/Tabs'
import ArticleMenu from '@/components/ArticleMenu'
import { SpaceGrow } from '@/components/Common'

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

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TPost
  metric?: TMetric
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

const WorksLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <WorksWrapper>
          <Cover src="https://avatars.githubusercontent.com/u/2041385?s=64&v=4" />
          <Intro>
            <Title>
              <WorkName>CoderPlanets</WorkName>
              <SpaceGrow />
              <ArticleMenu />
            </Title>
            <Desc>可能是最性感的开发者社区, web first, pure ~</Desc>
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
              activeKey="story"
              articleColor
            />
          </TabsWrapper>
        </BottomInfo>
      </Main>
      <SubWrapper metric={metric}>
        <Upvote count={17} type={UPVOTE_LAYOUT.WORKS_ARTICLE} />
      </SubWrapper>
    </Fragment>
  )
}

export default memo(WorksLayout)
