/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric, TEditMode } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'
import RichEditor from '@/containers/editor/RichEditor'
import CommunityBadgeSelector from '@/widgets/CommunityBadgeSelector'

import TitleInput from './TitleInput'
import Footer from './Footer'

import PublishRules from './PublishRules'

// import Settings from './Settings'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, editOnChange, changeCommunity, onTagSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleEditor')

type TProps = {
  testid?: string
  articleEditor?: TStore
  metric?: TMetric
  mode?: TEditMode
}

const ArticleEditorContainer: FC<TProps> = ({
  testid = 'article-editor',
  articleEditor: store,
  metric = METRIC.ARTICLE_EDITOR,
  mode = 'publish',
}) => {
  useInit(store, mode)
  const {
    title,
    body,
    copyRight,
    isQuestion,
    communityData,
    submitState,
    tagsData,
  } = store

  const initEditor = mode === 'publish' || body !== '{}'

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
        <ContentWrapper>
          <TitleInput title={title} />
          {initEditor && (
            <RichEditor
              data={body}
              onChange={(v) => editOnChange(JSON.stringify(v), 'body')}
              onLinkChange={(v) => editOnChange(v, 'linkAddr')}
            />
          )}
          <Footer
            mode={mode}
            tags={tagsData}
            body={body}
            community={communityData}
            copyRight={copyRight}
            isQuestion={isQuestion}
            submitState={submitState}
          />
        </ContentWrapper>
        <div>
          <CommunityBadgeSelector community={communityData} mode={mode} />
          <PublishRules />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleEditorContainer) as FC<TProps>
