/*
 *
 * ArticleFooter
 *
 */

import { FC, useState } from 'react'

import type { TArticleCat, TMetric } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ArticleCatLabel from '@/widgets/ArticleCatLabel'
import { SpaceGrow } from '@/widgets/Common'
import TagsList from '@/widgets/TagsList'

import Panel from './Panel'

import type { TStore } from './store'
import { Wrapper, BaseInfo, CatLabelWrapper } from './styles'
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
  const { viewingArticle } = store
  const { author, articleTags } = viewingArticle

  const [cat, setCat] = useState('feature')

  return (
    <Wrapper testid={testid}>
      <BaseInfo>
        <TagsList items={articleTags} size="small" />
        <CatLabelWrapper>
          <ArticleCatLabel
            type={cat as TArticleCat}
            mode="readonly"
            onChange={(key) => setCat(key)}
          />
        </CatLabelWrapper>
        <div>Emoji</div>
      </BaseInfo>

      <Panel author={author} />
    </Wrapper>
  )
}

export default bond(ArticleFooterContainer, 'articleFooter') as FC<TProps>
