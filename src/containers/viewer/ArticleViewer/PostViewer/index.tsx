/*
 * ArticleViewer
 */

import { FC, memo, Fragment, useCallback, useState } from 'react'

import type { TPost } from '@/spec'
import { buildLog } from '@/utils/logger'

import ViewportTracker from '@/widgets/ViewportTracker'
import { ArticleContentLoading } from '@/widgets/Loading'
import ArticeBody from '@/widgets/ArtimentBody'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import FixedHeader from './FixedHeader'
import Header from './Header'
import ArticleInfo from './ArticleInfo'

import { Wrapper, BodyWrapper, Title } from '../styles/post_viewer'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  article: TPost
  loading: boolean
}

const PostViewer: FC<TProps> = ({ article, loading }) => {
  const [fixedHeaderVisible, setFixedHeaderVisible] = useState(false)

  const hideFixedHeader = useCallback(() => setFixedHeaderVisible(false), [])
  const showFixedHeader = useCallback(() => setFixedHeaderVisible(true), [])

  return (
    <Fragment>
      <FixedHeader article={article} visible={fixedHeaderVisible} />
      <Wrapper>
        <Header article={article} />
        <Title>
          <span>{article.title}</span>
          {/* <SubTitle>{article.id}</SubTitle> */}
        </Title>
        <ArticleInfo article={article} />
        <ViewportTracker onEnter={hideFixedHeader} onLeave={showFixedHeader} />

        {loading && (
          <ArticleContentLoading num={1} top={15} bottom={30} left={-50} />
        )}
        {!loading && (
          <BodyWrapper>
            <ArticeBody document={article.document} />
          </BodyWrapper>
        )}
        <ArticleFooter />
      </Wrapper>
    </Fragment>
  )
}

export default memo(PostViewer)
