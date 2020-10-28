//

/*
 *
 * ArticleFooter
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import TagList from './TagList'
import AuthorInfo from './AuthorInfo'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleFooter')

const ArticleFooterContainer = ({ articleFooter: store, testId }) => {
  useInit(store)
  const { viewingData } = store
  const { tags, author } = viewingData

  return (
    <Wrapper testId={testId}>
      <TagList items={tags} />
      <AuthorInfo author={author} />
    </Wrapper>
  )
}

ArticleFooterContainer.propTypes = {
  articleFooter: T.any.isRequired,
  testId: T.string,
}

ArticleFooterContainer.defaultProps = {
  testId: 'article-footer',
}

export default connectStore(ArticleFooterContainer)
