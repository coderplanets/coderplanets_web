/*
 * ArticleViewer
 */

import { FC, memo, Fragment, useCallback, useState } from 'react'

import type { TPost } from '@/spec'
import { buildLog } from '@/utils'

import ViewportTracker from '@/components/ViewportTracker'
import { ArticleContentLoading } from '@/components/Loading'

import FixedHeader from './FixedHeader'
import Header from './Header'
import ArticleInfo from './ArticleInfo'

import { Wrapper, BodyWrapper, ArticleBody } from '../styles/works_viewer'

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
            <ArticleBody>
              <div>article body</div>
            </ArticleBody>
          )}
        </BodyWrapper>
      </Wrapper>
    </Fragment>
  )
}

export default memo(WorksViewer)
