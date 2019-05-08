/*
 *
 * ContentBanner
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import { makeDebugger } from '@utils'
import DotDivider from '@components/DotDivider'

import {
  BannerContainer,
  BannerContentWrapper,
  PostBrief,
  Title,
  Desc,
  MarkTag,
} from './styles'

import ReactionNumbers from './ReactionNumbers'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ContentBanner:index')

// TODO: add a Loading effect
const ContentBanner = ({ data, middleNode }) => {
  const isRefined = R.contains('refined', R.pluck('title', data.tags))

  return (
    <BannerContainer>
      {!R.isNil(data.id) && (
        <BannerContentWrapper>
          <PostBrief>
            <Title>{data.title}</Title>
            <React.Fragment>
              {!R.isEmpty(middleNode) && <div>{middleNode}</div>}
            </React.Fragment>
            <Desc>
              {isRefined ? <MarkTag>精华</MarkTag> : <div />}
              <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
              <DotDivider />
              字数: {data.length}
            </Desc>
          </PostBrief>
          <ReactionNumbers data={data} />
        </BannerContentWrapper>
      )}
    </BannerContainer>
  )
}

ContentBanner.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    insertedAt: PropTypes.string,
    updatedAt: PropTypes.string,
    views: PropTypes.number,
    favoritedCount: PropTypes.number,
    starredCount: PropTypes.number,
    viewerHasFavorited: PropTypes.bool,
    viewerHasStarred: PropTypes.bool,
  }),
  middleNode: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

ContentBanner.defaultProps = {
  data: {
    id: '',
    title: '',
    views: 0,
    favoritedCount: -1,
    starredCount: -1,
    viewerHasFavorited: false,
    viewerHasStarred: false,
  },
  middleNode: '',
}

export default ContentBanner
