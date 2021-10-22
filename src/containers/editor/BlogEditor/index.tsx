/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'
import CommunityBadgeSelector from '@/widgets/CommunityBadgeSelector'

import Content from './Content'
import Footer from './Footer'

import PublishRules from './PublishRules'

// import Settings from './Settings'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, changeCommunity, onTagSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:BlogEditor')

type TProps = {
  testid?: string
  blogEditor?: TStore
  metric?: TMetric
}

const BlogEditorContainer: FC<TProps> = ({
  testid = 'article-editor',
  blogEditor: store,
  metric = METRIC.ARTICLE_EDITOR,
}) => {
  useInit(store)
  const {
    step,
    rss,
    loading,
    rssInfoData,
    filterTitle,
    communityData,
    tagsData,
    validState,
    activeBlogData,
  } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        {communityData.id && (
          <CommunityTagSetter
            selectedCommunity={communityData}
            onCommunitySelect={changeCommunity}
            onTagSelect={onTagSelect}
          />
        )}
        <div>
          <ContentWrapper>
            <Content
              step={step}
              loading={loading}
              rss={rss}
              rssInfo={rssInfoData}
              filterTitle={filterTitle}
              validState={validState}
              activeBlog={activeBlogData}
            />
          </ContentWrapper>
          <Footer step={step} community={communityData} tags={tagsData} />
        </div>
        <div>
          <CommunityBadgeSelector community={communityData} />
          <PublishRules />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(BlogEditorContainer) as FC<TProps>
