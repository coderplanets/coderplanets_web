/*
 * ArticleViewer
 */

import { FC, memo, Fragment, useCallback, useState } from 'react'

import type { TPost } from '@/spec'
import { buildLog } from '@/utils/logger'

import GotoTop from '@/widgets/GotoTop'
import ViewportTracker from '@/widgets/ViewportTracker'
import { ArticleContentLoading } from '@/widgets/Loading'
import ArticeBody from '@/widgets/ArtimentBody'
import Upvote from '@/widgets/Upvote'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import FixedHeader from './FixedHeader'
import Header from './Header'
import ArticleInfo from './ArticleInfo'

import {
  Wrapper,
  BodyWrapper,
  Title,
  UpvoteWrapper,
  GoTopWrapper,
} from '../styles/post_viewer'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleViewer')

type TProps = {
  article: TPost
  loading: boolean
}

const PostViewer: FC<TProps> = ({ article, loading }) => {
  const [fixedHeaderVisible, setFixedHeaderVisible] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  const hideFixedHeader = useCallback(() => setFixedHeaderVisible(false), [])
  const showFixedHeader = useCallback(() => setFixedHeaderVisible(true), [])

  const hideFooter = useCallback(() => setFooterVisible(false), [])
  const showFooter = useCallback(() => setFooterVisible(true), [])

  const { upvotesCount, viewerHasUpvoted, meta } = article

  return (
    <Fragment>
      <FixedHeader
        article={article}
        visible={fixedHeaderVisible}
        footerVisible={footerVisible}
      />
      <Wrapper>
        <Header article={article} />
        <Title>
          <span>{article.title}</span>
          {/* <SubTitle>{article.id}</SubTitle> */}
        </Title>
        <ArticleInfo article={article} />
        <ViewportTracker onEnter={hideFixedHeader} onLeave={showFixedHeader} />
        <UpvoteWrapper
          show={fixedHeaderVisible && footerVisible}
          count={upvotesCount}
        >
          <Upvote
            count={upvotesCount}
            avatarList={meta.latestUpvotedUsers}
            viewerHasUpvoted={viewerHasUpvoted}
            type="sticker"
          />
        </UpvoteWrapper>
        {loading && (
          <ArticleContentLoading num={1} top={15} bottom={30} left={-50} />
        )}
        {!loading && (
          <BodyWrapper>
            <ArticeBody document={article.document} />
          </BodyWrapper>
        )}
        <ArticleFooter />
        <ViewportTracker onEnter={showFooter} onLeave={hideFooter} />
        <GoTopWrapper show={fixedHeaderVisible}>
          <GotoTop type="drawer" />
        </GoTopWrapper>
      </Wrapper>
    </Fragment>
  )
}

export default memo(PostViewer)
