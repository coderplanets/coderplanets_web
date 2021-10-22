/*
 * ArticleViewer
 */

import { FC, memo, Fragment, useCallback, useState } from 'react'

import type { TPost } from '@/spec'
import { buildLog } from '@/utils/logger'

import ViewportTracker from '@/widgets/ViewportTracker'
import ArticeBody from '@/widgets/ArtimentBody'
import { ArticleContentLoading } from '@/widgets/Loading'

import FixedHeader from './FixedHeader'
import Header from './Header'
import ArticleInfo from './ArticleInfo'

import { Wrapper, BodyWrapper } from '../styles/works_viewer'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  article: TPost
  loading: boolean
}

const WorksViewer: FC<TProps> = ({ article, loading }) => {
  const [fixedHeaderVisible, setFixedHeaderVisible] = useState(false)

  const hideFixedHeader = useCallback(() => setFixedHeaderVisible(false), [])
  const showFixedHeader = useCallback(() => setFixedHeaderVisible(true), [])

  return (
    <Fragment>
      <FixedHeader article={article} visible={fixedHeaderVisible} />
      <Wrapper>
        <Header article={article} />
        <ArticleInfo article={article} />
        <ViewportTracker onEnter={hideFixedHeader} onLeave={showFixedHeader} />
        <BodyWrapper>
          {loading ? (
            <ArticleContentLoading num={2} />
          ) : (
            <ArticeBody document={article.document} />
          )}
        </BodyWrapper>
      </Wrapper>
    </Fragment>
  )
}

export default memo(WorksViewer)
