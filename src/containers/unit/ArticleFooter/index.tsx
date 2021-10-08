/*
 *
 * ArticleFooter
 *
 */

import { FC, useState } from 'react'

import type { TCopyright } from '@/spec'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'
import Copyright from '@/components/Copyright'
import { SpaceGrow } from '@/components/Common'

// import TagList from '@/components/TagList'

import TagList from './TagList'
import Actions from './Actions/index'
import RefersPanel from './Actions/RefersPanel'
import OperationPanel from './Actions/OperationPanel'

import AuthorInfo from './AuthorInfo'

import type { TStore } from './store'
import { Wrapper, BaseInfo, Divider } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleFooter')

type TProps = {
  articleFooter?: TStore
  testid?: string
  showAuthorInfo?: boolean
}

const ArticleFooterContainer: FC<TProps> = ({
  articleFooter: store,
  testid = 'article-footer',
  showAuthorInfo = true,
}) => {
  useInit(store)
  const { viewingArticle, showReferenceList, showOperationList } = store
  const { author, articleTags, meta } = viewingArticle

  const [copyright, setCopyright] = useState('cc')

  return (
    <Wrapper testid={testid}>
      <BaseInfo>
        <TagList items={articleTags} />
        <CommunityTagSetter />
        <Copyright
          type={copyright as TCopyright}
          mode="readonly"
          onChange={(key) => setCopyright(key)}
        />
        <SpaceGrow />
        <Actions
          citingCount={meta.citingCount}
          showReferenceList={showReferenceList}
          showOperationList={showOperationList}
        />
      </BaseInfo>

      {showReferenceList && <RefersPanel />}
      {showOperationList && <OperationPanel />}

      {!showAuthorInfo && <Divider />}
      {showAuthorInfo && <AuthorInfo author={author} />}
    </Wrapper>
  )
}

export default pluggedIn(ArticleFooterContainer) as FC<TProps>
