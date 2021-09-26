/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

// import RichEditor from '@/containers/editor/RichEditor'

import RSSInputer from './RSSInputer'
import FeedList from './FeedList'
import Footer from './Footer'

import CommunityBadge from './CommunityBadge'
import PublishRules from './PublishRules'

// import Settings from './Settings'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

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

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <ContentWrapper>
          <RSSInputer />
          <FeedList />
          {/* <RichEditor /> */}
          <Footer />
        </ContentWrapper>
        <div>
          <CommunityBadge />
          <PublishRules />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(BlogEditorContainer) as FC<TProps>
