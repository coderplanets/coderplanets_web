/*
 * ArticleViewer
 */

import { FC, memo, Fragment, useCallback, useState } from 'react'

import type { TWorks, TWorksTab } from '@/spec'
import { buildLog } from '@/utils/logger'

import ViewportTracker from '@/widgets/ViewportTracker'
import { ArticleContentLoading } from '@/widgets/Loading'

import FixedHeader from './FixedHeader'
import Header from './Header'
import ArticleInfo from './ArticleInfo'
import Content from './Content'

import { Wrapper, ContentWrapper } from '../styles/works_viewer'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  article: TWorks
  loading: boolean
  tab: string
}

const WorksViewer: FC<TProps> = ({ article, loading, tab }) => {
  const [fixedHeaderVisible, setFixedHeaderVisible] = useState(false)

  const hideFixedHeader = useCallback(() => setFixedHeaderVisible(false), [])
  const showFixedHeader = useCallback(() => setFixedHeaderVisible(true), [])

  log('WorksViewer article: ', article.techstacks)

  return (
    <Fragment>
      <FixedHeader article={article} visible={fixedHeaderVisible} />
      <Wrapper>
        <Header article={article} />
        <ArticleInfo article={article} tab={tab as TWorksTab} />
        <ViewportTracker onEnter={hideFixedHeader} onLeave={showFixedHeader} />
        <ContentWrapper>
          {loading ? (
            <ArticleContentLoading num={2} />
          ) : (
            <Content tab={tab} article={article} />
          )}
        </ContentWrapper>
      </Wrapper>
    </Fragment>
  )
}

export default memo(WorksViewer)
