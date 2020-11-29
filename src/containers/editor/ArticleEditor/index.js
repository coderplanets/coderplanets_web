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

import Header from './Header'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleEditor')

const ArticleEditorContainer = ({ articleEditor: store, testId, metric }) => {
  useInit(store)

  const { showSubTitle } = store

  return (
    <Wrapper testId={testId}>
      <InnerWrapper metric={metric}>
        <Header showSubTitle={showSubTitle} />
        <br />
        <div>正文内容 ... </div>
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
