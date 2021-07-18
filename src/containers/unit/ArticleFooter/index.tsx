//

/*
 *
 * ArticleFooter
 *
 */

import { FC } from 'react'

import { pluggedIn, buildLog } from '@/utils'

import Copyright from '@/components/Copyright'

import TagList from './TagList'
import Actions from './Actions/index'
import RefersPanel from './Actions/RefersPanel'
import OperationPanel from './Actions/OperationPanel'

import AuthorInfo from './AuthorInfo'

import type { TStore } from './store'
import { Wrapper, BaseInfo } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleFooter')

type TProps = {
  articleFooter?: TStore
  testid?: string
}

const ArticleFooterContainer: FC<TProps> = ({
  articleFooter: store,
  testid = 'article-footer',
}) => {
  useInit(store)
  const { viewingData, showReferenceList, showOperationList } = store
  const { tags, author } = viewingData

  return (
    <Wrapper testid={testid}>
      <BaseInfo>
        <TagList items={tags} />
        <Copyright />
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

export default pluggedIn(ArticleFooterContainer) as FC<TProps>
