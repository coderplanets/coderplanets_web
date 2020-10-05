/*
 *
 * ArticleDigest
 *
 */

import React from 'react'
import T from 'prop-types'
import { isNil } from 'ramda'
import TimeAgo from 'timeago-react'
import { Waypoint } from 'react-waypoint'

import { useScroll } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import FavoritesCats from '@/containers/tool/FavoritesCats'
import DotDivider from '@/components/DotDivider'
import Maybe from '@/components/Maybe'
import { Space } from '@/components/Common'

import FloatHeader from './FloatHeader'
import Title from './Title'
import ReactionNumbers from './ReactionNumbers'
import MiddleInfo from './MiddleInfo'

import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Brief,
  Desc,
} from './styles/desktop_view'
import { useInit, inAnchor, outAnchor } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

const ArticleDigestContainer = ({
  articleDigest: store,
  showStar,
  showWordCount,
  showLastSync,
}) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection)

  const {
    activeThread,
    viewingData,
    starLoading,
    favoriteLoading,
    isHeaderFixed,
  } = store

  return (
    <Wrapper>
      <FavoritesCats />
      <FloatHeader show={isHeaderFixed} data={viewingData} />
      {!isNil(viewingData.id) && (
        <InnerWrapper>
          <BannerContent>
            <Brief>
              <Title thread={activeThread} data={viewingData} />
              <MiddleInfo thread={activeThread} data={viewingData} />
              <Desc>
                发布于:
                <Space left="3px" right="3px" />
                <TimeAgo datetime={viewingData.insertedAt} locale="zh_CN" />
                <Maybe test={showWordCount}>
                  <>
                    <DotDivider />
                    字数: {viewingData.length}
                  </>
                </Maybe>
                <Maybe test={showLastSync}>
                  <>
                    <DotDivider />
                    最后同步:
                    <Space left="3px" right="3px" />
                    {viewingData.lastSync ? (
                      <TimeAgo datetime={viewingData.lastSync} locale="zh_CN" />
                    ) : (
                      <span>--</span>
                    )}
                  </>
                </Maybe>
              </Desc>
            </Brief>
            <ReactionNumbers
              data={viewingData}
              starLoading={starLoading}
              favoriteLoading={favoriteLoading}
              showStar={showStar}
            />
          </BannerContent>
        </InnerWrapper>
      )}
      <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

ArticleDigestContainer.propTypes = {
  articleDigest: T.object.isRequired,
  showStar: T.bool,
  showWordCount: T.bool,
  showLastSync: T.bool,
}

ArticleDigestContainer.defaultProps = {
  showStar: true,
  showWordCount: true,
  showLastSync: false,
}

export default connectStore(ArticleDigestContainer)
