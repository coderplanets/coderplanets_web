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

// import Settings from './Settings'

import type { TStore } from './store'
import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

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

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <TitleInput />
        <RichEditor />
        <Footer />
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleEditorContainer)
