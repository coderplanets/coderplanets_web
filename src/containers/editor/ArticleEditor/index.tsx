/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import RichEditor from '@/containers/editor/RichEditor'

import TitleInput from './TitleInput'
import Footer from './Footer'

import CommunityBadge from './CommunityBadge'
import PublishRules from './PublishRules'

// import Settings from './Settings'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, editOnChange } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleEditor')

type TProps = {
  testid?: string
  articleEditor?: TStore
  metric?: TMetric
}

const ArticleEditorContainer: FC<TProps> = ({
  testid = 'article-editor',
  articleEditor: store,
  metric = METRIC.ARTICLE_EDITOR,
}) => {
  useInit(store)
  const { title, copyRight, editingData, isQuestion, communityData } = store

  console.log('editingData --> ', editingData)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <ContentWrapper>
          <TitleInput title={title} />
          <RichEditor
            onChange={(v) => editOnChange(JSON.stringify(v), 'body')}
          />
          <Footer copyRight={copyRight} isQuestion={isQuestion} />
        </ContentWrapper>
        <div>
          <CommunityBadge community={communityData} />
          <PublishRules />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleEditorContainer) as FC<TProps>
