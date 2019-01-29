/*
 *
 * ArticleBanner
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import DotDivider from 'components/DotDivider'
import Maybe from 'components/Maybe'
import { Space } from 'components/BaseStyled'
import { makeDebugger, storePlug } from 'utils'
import FavoritesCats from '../FavoritesCats'

import Title from './Title'
import ReactionNumbers from './ReactionNumbers'
import MiddleInfo from './MiddleInfo'

import { Wrapper, BannerContent, Brief, Desc } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:ArticleBanner')

class ArticleBannerContainer extends React.Component {
  componentDidMount() {
    const { articleBanner } = this.props
    logic.init(articleBanner)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { articleBanner, showStar, showWordCount, showLastSync } = this.props
    const {
      activeThread,
      viewingData,
      starLoading,
      favoriteLoading,
    } = articleBanner

    return (
      <Wrapper>
        <FavoritesCats />
        {R.isNil(viewingData.id) ? null : (
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
}

ArticleBannerContainer.propTypes = {
  articleBanner: PropTypes.object.isRequired,
  showStar: PropTypes.bool,
  showWordCount: PropTypes.bool,
  showLastSync: PropTypes.bool,
}

ArticleBannerContainer.defaultProps = {
  showStar: true,
  showWordCount: true,
  showLastSync: false,
}

export default inject(storePlug('articleBanner'))(
  observer(ArticleBannerContainer)
)
