/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric, TEditMode } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'
import CommunityBadgeSelector from '@/widgets/CommunityBadgeSelector'
import { Br } from '@/widgets/Common'

import type { TStep } from './spec'
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
  mode?: TEditMode
}

const BlogEditorContainer: FC<TProps> = ({
  testid = 'article-editor',
  blogEditor: store,
  metric = METRIC.ARTICLE_EDITOR,
  mode = 'publish',
}) => {
  useInit(store, mode)

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
    submitState,
    rssAuthorData,
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
              mode={mode}
              step={step as TStep}
              loading={loading}
              rss={rss}
              rssInfo={rssInfoData}
              filterTitle={filterTitle}
              validState={validState}
              activeBlog={activeBlogData}
              authorInfo={rssAuthorData}
            />
          </ContentWrapper>
          <Footer
            mode={mode}
            community={communityData}
            tags={tagsData}
            submitState={submitState}
          />
        </div>
        <div>
          {mode === 'publish' ? (
            <CommunityBadgeSelector community={communityData} />
          ) : (
            <Br top={120} />
          )}
          <PublishRules />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(BlogEditorContainer, 'blogEditor') as FC<TProps>
