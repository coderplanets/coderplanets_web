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
import { pluggedIn, buildLog } from '@/utils'

import FavoritesCats from '@/containers/tool/FavoritesCats'

import StateInfo from './StateInfo'
import PublishDate from '../DesktopView/PublishDate'

import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Title,
  Brief,
} from '../styles/mobile_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

const ArticleDigestContainer = ({ articleDigest: store }) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection)

  const { viewingArticle } = store

  if (isNil(viewingArticle.id)) return null

  return (
    <Wrapper>
      <FavoritesCats />
      <InnerWrapper>
        <BannerContent>
          <Brief>
            <PublishDate insertedAt={viewingArticle.insertedAt} />
            <Title>{viewingArticle.title}</Title>
            <StateInfo
              article={viewingArticle}
              author={viewingArticle.author}
            />
          </Brief>
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

export default pluggedIn(ArticleDigestContainer)
