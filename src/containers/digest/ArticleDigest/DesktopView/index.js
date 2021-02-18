/*
 *
 * ArticleDigest
 *
 */

import React from 'react'
import T from 'prop-types'
import { isNil, values } from 'ramda'
import { Waypoint } from 'react-waypoint'

import { METRIC } from '@/constant'
import { useScroll } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import FavoritesCats from '@/containers/tool/FavoritesCats'
import Author from './Author'
import StateInfo from './StateInfo'
import PublishDate from './PublishDate'
// import DotDivider from '@/components/DotDivider'
// import { Space } from '@/components/Common'

import Title from './Title'

import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Main,
  PublishDesc,
  BottomInfo,
  AuthorWrapper,
} from '../styles/desktop_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

const ArticleDigestContainer = ({ articleDigest: store, metric }) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection)

  const { activeThread, viewingData } = store

  if (isNil(viewingData.id)) return null

  return (
    <Wrapper>
      <FavoritesCats />
      <InnerWrapper>
        <BannerContent>
          <Main metric={metric}>
            <PublishDate insertedAt={viewingData.insertedAt} />
            <Title thread={activeThread} data={viewingData} />
            <BottomInfo>
              <PublishDesc>Elixir 社区</PublishDesc>
              <StateInfo article={viewingData} />
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
  metric: T.oneOf(values(METRIC)),
}

ArticleDigestContainer.defaultProps = {
  metric: METRIC.ARTICLE,
}

export default pluggedIn(ArticleDigestContainer)
