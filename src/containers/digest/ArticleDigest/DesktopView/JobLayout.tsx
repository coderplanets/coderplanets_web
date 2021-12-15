/*
 * JobLayout
 */

import { FC, Fragment, memo } from 'react'

import type { TJob, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/widgets/Common'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import ArticleBelongCommunity from '@/widgets/ArticleBelongCommunity'
import DotDivider from '@/widgets/DotDivider'
import ArchivedSign from '@/widgets/ArchivedSign'
import ArticleMenu from '@/widgets/ArticleMenu'
import ReadableDate from '@/widgets/ReadableDate'
import Linker from '@/widgets/Linker'

import {
  Main,
  Header,
  PublishDateInfo,
  Title,
  BottomInfo,
  CommunityInfo,
  CompanyWrapper,
  LaptopIcon,
  CompanyName,
} from '../styles/desktop_view/job_layout'
import { subscribeCommunity, unsubscribeCommunity } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  article: TJob
  metric?: TMetric
}

const JobLayout: FC<TProps> = ({ metric = METRIC.ARTICLE, article }) => {
  return (
    <Fragment>
      <Main metric={metric}>
        <Header>
          <PublishDateInfo>
            <ReadableDate date={article.insertedAt} fmt="absolute" />
          </PublishDateInfo>
          {article.isArchived && (
            <Fragment>
              <DotDivider space={8} />
              <ArchivedSign date={article.archivedAt} />
            </Fragment>
          )}
          <SpaceGrow />
          <ArticleMenu article={article} />
        </Header>
        <Title>{article.title}</Title>
        <BottomInfo>
          <CompanyWrapper>
            <LaptopIcon />
            <CompanyName>{article.company}</CompanyName>
            <Linker src={article.companyLink} right={5} left={10} />
          </CompanyWrapper>
          <ArticleBaseStats article={article} />
        </BottomInfo>
      </Main>
      <CommunityInfo>
        <ArticleBelongCommunity
          article={article}
          onFollow={() => subscribeCommunity()}
          onUndoFollow={() => unsubscribeCommunity()}
        />
      </CommunityInfo>
    </Fragment>
  )
}

export default memo(JobLayout)
