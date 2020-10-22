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

import InfoBar from './InfoBar'

import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Title,
  Brief,
  Desc,
} from '../styles/mobile_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

const date2Locale = (dateString) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}年${month}月${day}日`
}

const ArticleDigestContainer = ({
  articleDigest: store,
  showStar,
  showLastSync,
}) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection)

  const { activeThread, viewingData, starLoading, favoriteLoading } = store

  return (
    <Wrapper>
      <FavoritesCats />
      {!isNil(viewingData.id) && (
        <InnerWrapper>
          <BannerContent>
            <Brief>
              <Desc>
                {date2Locale(viewingData.insertedAt)}
                {/* <TimeAgo datetime={viewingData.insertedAt} locale="zh_CN" /> */}
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
              <Title thread={activeThread} data={viewingData} />
            </Brief>
          </BannerContent>
          <InfoBar
            viewingData={viewingData}
            starLoading={starLoading}
            favoriteLoading={favoriteLoading}
            showStar={showStar}
          />
        </InnerWrapper>
      )}
      <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

ArticleDigestContainer.propTypes = {
  articleDigest: T.object.isRequired,
  showStar: T.bool,
  showLastSync: T.bool,
}

ArticleDigestContainer.defaultProps = {
  showStar: true,
  showLastSync: false,
}

export default connectStore(ArticleDigestContainer)
