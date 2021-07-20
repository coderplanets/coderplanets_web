/*
 * PostLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TPost } from '@/spec'
import { METRIC, UPVOTE_LAYOUT } from '@/constant'
import { buildLog } from '@/utils'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import { IconButton } from '@/components/Buttons'
import Upvote from '@/components/Upvote'

import {
  Main,
  WorksWrapper,
  Cover,
  Intro,
  Title,
  Desc,
  Other,
  Actions,
  BottomInfo,
  SubWrapper,
} from '../../styles/desktop_view/works_layout'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TPost
  metric?: string
}

const WorksLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <WorksWrapper>
          <Cover src="https://avatars.githubusercontent.com/u/2041385?s=64&v=4" />
          <Intro>
            <Title>CoderPlanets</Title>
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
        <BottomInfo />
      </Main>
      <SubWrapper metric={metric}>
        <Upvote count={17} type={UPVOTE_LAYOUT.WORKS_ARTICLE} />
      </SubWrapper>
    </Fragment>
  )
}

export default memo(WorksLayout)
