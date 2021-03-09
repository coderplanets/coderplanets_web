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
import { pluggedIn, buildLog } from '@/utils'

import { STEP } from './constant'
import Editor from './Editor'
import Settings from './Settings'

import { Wrapper, InnerWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleEditor')

const ArticleEditorContainer = ({ articleEditor: store, testid, metric }) => {
  useInit(store)

  const { showSubTitle, step } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        {step === STEP.EDIT ? (
          <Editor showSubTitle={showSubTitle} />
        ) : (
          <Settings />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

ArticleEditorContainer.propTypes = {
  articleEditor: T.any.isRequired,
  testid: T.string,
  metric: T.oneOf(values(METRIC)),
}

ArticleEditorContainer.defaultProps = {
  testid: 'article-editor',
  metric: METRIC.ARTICLE_EDITOR,
}

export default pluggedIn(ArticleEditorContainer)
