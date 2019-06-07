/*
 *
 * ArticleBanner
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import { connectStore, buildLog } from '@utils'

import DotDivider from '@components/DotDivider'
import Maybe from '@components/Maybe'
import { Space } from '@components/BaseStyled'
import FavoritesCats from '../FavoritesCats'

import Title from './Title'
import ReactionNumbers from './ReactionNumbers'
import MiddleInfo from './MiddleInfo'

import { Wrapper, BannerContent, Brief, Desc } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleBanner')

const ArticleBannerContainer = ({
  articleBanner,
  showStar,
  showWordCount,
  showLastSync,
}) => {
  useInit(articleBanner)

  const {
    activeThread,
    viewingData,
    starLoading,
    favoriteLoading,
  } = articleBanner

  return (
    <Wrapper>
      <FavoritesCats />
      {!R.isNil(viewingData.id) && (
        <BannerContent>
          <Brief>
            <Title thread={activeThread} data={viewingData} />
            <MiddleInfo thread={activeThread} data={viewingData} />
            <Desc>
              发布于:
              <Space left="3px" right="3px" />
              <TimeAgo datetime={viewingData.insertedAt} locale="zh_CN" />
              <Maybe test={showWordCount}>
                <React.Fragment>
                  <DotDivider />
                  字数: {viewingData.length}
                </React.Fragment>
              </Maybe>
              <Maybe test={showLastSync}>
                <React.Fragment>
                  <DotDivider />
                  最后同步:
                  <Space left="3px" right="3px" />
                  {viewingData.lastSync ? (
                    <TimeAgo datetime={viewingData.lastSync} locale="zh_CN" />
                  ) : (
                    <span>--</span>
                  )}
                </React.Fragment>
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
      )}
    </Wrapper>
  )
}

ArticleBannerContainer.propTypes = {
  articleBanner: T.object.isRequired,
  showStar: T.bool,
  showWordCount: T.bool,
  showLastSync: T.bool,
}

ArticleBannerContainer.defaultProps = {
  showStar: true,
  showWordCount: true,
  showLastSync: false,
}

export default connectStore(ArticleBannerContainer)
