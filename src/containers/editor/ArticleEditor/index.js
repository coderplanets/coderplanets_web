//

/*
 *
 * ArticleEditor
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleEditor')

const ArticleEditorContainer = ({ articleEditor: store, testId, metric }) => {
  useInit(store)

  return (
    <Wrapper testId={testId}>
      <InnerWrapper metric={metric}>
        <h2>ArticleEditor hooks container!</h2>
        <div>impress me!</div>
      </InnerWrapper>
    </Wrapper>
  )
}

ArticleEditorContainer.propTypes = {
  articleEditor: T.any.isRequired,
  testId: T.string,
  metric: T.oneOf(values(METRIC)),
}

ArticleEditorContainer.defaultProps = {
  testId: 'article-editor',
  metric: METRIC.ARTICLE_EDITOR,
}

export default connectStore(ArticleEditorContainer)
