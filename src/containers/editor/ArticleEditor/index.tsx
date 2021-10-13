/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric, TEditMode } from '@/spec'
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
  mode?: TEditMode
}

const ArticleEditorContainer: FC<TProps> = ({
  testid = 'article-editor',
  articleEditor: store,
  metric = METRIC.ARTICLE_EDITOR,
  mode = 'publish',
}) => {
  useInit(store, mode)
  const { title, body, copyRight, isQuestion, communityData, publishing } =
    store

  const initEditor = mode === 'publish' || body !== '{}'
  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
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
            copyRight={copyRight}
            isQuestion={isQuestion}
            publishing={publishing}
          />
        </ContentWrapper>
        <div>
          <CommunityBadge community={communityData} mode={mode} />
          <PublishRules />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleEditorContainer) as FC<TProps>
