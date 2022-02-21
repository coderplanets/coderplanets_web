/*
 *
 * ArticleFooter
 *
 */

import { FC, useState } from 'react'

import type { TCopyright, TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Copyright from '@/widgets/Copyright'
import { SpaceGrow } from '@/widgets/Common'

// import TagList from '@/widgets/TagList'

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
  metric?: TMetric
}

const ArticleFooterContainer: FC<TProps> = ({
  articleFooter: store,
  testid = 'article-footer',
  metric = METRIC.ARTICLE,
}) => {
  useInit(store)
  const {
    viewingArticle,
    showReferenceList,
    showOperationList,
    hasFollowedAuthor,
  } = store
  const { author, articleTags, meta } = viewingArticle

  const [copyright, setCopyright] = useState('cc')
  const showAuthorInfo = metric !== METRIC.BLOG_ARTICLE

  return (
    <Wrapper testid={testid}>
      <BaseInfo>
        <TagList items={articleTags} />
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
      {showAuthorInfo && (
        <AuthorInfo author={author} hasFollowedAuthor={hasFollowedAuthor} />
      )}
    </Wrapper>
  )
}

export default bond(ArticleFooterContainer, 'articleFooter') as FC<TProps>
