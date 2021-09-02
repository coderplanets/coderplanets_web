/*
 *
 * ArticleFooter
 *
 */

import { FC, useState } from 'react'

import type { TCopyright } from '@/spec'

import { buildLog } from '@/utils/logger'
import { joinUS } from '@/utils/helper'
import { pluggedIn } from '@/utils/mobx'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'
import Copyright from '@/components/Copyright'

// import TagList from '@/components/TagList'

// import TagListO from './TagList'
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
  const { viewingArticle, showReferenceList, showOperationList } = store
  const { author } = viewingArticle

  const [copyright, setCopyright] = useState('cc')

  return (
    <Wrapper testid={testid} onClick={() => joinUS()}>
      <BaseInfo>
        {/* <TagListO items={articleTags} /> */}
        tags, todo:
        <CommunityTagSetter />
        <Copyright
          type={copyright as TCopyright}
          mode="readonly"
          onChange={(key) => setCopyright(key)}
        />
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
