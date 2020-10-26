/*
 *
 * ArticleDigest
 *
 */

import React from 'react'
import T from 'prop-types'
import { isNil } from 'ramda'
import { Waypoint } from 'react-waypoint'

import { useScroll } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import FavoritesCats from '@/containers/tool/FavoritesCats'
import Author from './Author'
import StateInfo from './StateInfo'
// import DotDivider from '@/components/DotDivider'
// import { Space } from '@/components/Common'

import Title from './Title'

import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Main,
  PublishTime,
  PublishDesc,
  BottomInfo,
  AuthorWrapper,
} from '../styles/desktop_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

const ArticleDigestContainer = ({ articleDigest: store }) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection)

  const { activeThread, viewingData } = store

  if (isNil(viewingData.id)) return null

  return (
    <Wrapper>
      <FavoritesCats />
      <InnerWrapper>
        <BannerContent>
          <Main>
            <PublishTime>
              {/* {viewingData.insertedAt} */}
              10&nbsp;月&nbsp;04&nbsp;日上午&nbsp;12&nbsp;时，2020年
              {/* <Space left="3px" right="3px" />
                <TimeAgo datetime={viewingData.insertedAt} locale="zh_CN" />
                <DotDivider /> */}
            </PublishTime>
            <Title thread={activeThread} data={viewingData} />
            <BottomInfo>
              <PublishDesc>发布于 Elixir 社区</PublishDesc>
              <StateInfo />
            </BottomInfo>
          </Main>
          <AuthorWrapper>
            <Author user={viewingData.author} />
          </AuthorWrapper>
        </BannerContent>
      </InnerWrapper>
      <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

ArticleDigestContainer.propTypes = {
  articleDigest: T.object.isRequired,
}

ArticleDigestContainer.defaultProps = {}

export default connectStore(ArticleDigestContainer)
