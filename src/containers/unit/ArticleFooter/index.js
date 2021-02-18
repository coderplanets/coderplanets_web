//

/*
 *
 * ArticleFooter
 *
 */

import React from 'react'
import T from 'prop-types'

import { pluggedIn, buildLog } from '@/utils'

import TagList from './TagList'
import Actions from './Actions/index'
import RefersPanel from './Actions/RefersPanel'
import OperationPanel from './Actions/OperationPanel'

import AuthorInfo from './AuthorInfo'

import { Wrapper, BaseInfo } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleFooter')

const ArticleFooterContainer = ({ articleFooter: store, testId }) => {
  useInit(store)
  const { viewingData, showReferenceList, showOperationList } = store
  const { tags, author } = viewingData

  return (
    <Wrapper testId={testId}>
      <BaseInfo>
        <TagList items={tags} />
        <Actions
          showReferenceList={showReferenceList}
          showOperationList={showOperationList}
        />
      </BaseInfo>

      {showReferenceList && <RefersPanel />}
      {showOperationList && <OperationPanel />}
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

export default pluggedIn(ArticleFooterContainer)
