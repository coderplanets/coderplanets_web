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
import Panel from './Panel'

import type { TStore } from './store'
import { Wrapper, BaseInfo } from './styles'
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

  const [copyright, setCopyright] = useState('cc')

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
      </BaseInfo>

      <Panel author={author} />
    </Wrapper>
  )
}

export default bond(ArticleFooterContainer, 'articleFooter') as FC<TProps>
